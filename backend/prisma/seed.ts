import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database with Properties and advanced features...');

  // 1. Create a default Family
  const family = await prisma.family.upsert({
    where: { id: 'default-family-id' },
    update: {},
    create: {
      id: 'default-family-id',
      name: 'Familia García',
    },
  });

  // 2. Create a default User
  const user = await prisma.user.upsert({
    where: { email: 'admin@familia.com' },
    update: {},
    create: {
      id: 'admin-user-id',
      email: 'admin@familia.com',
      password: 'hashed-password-here',
      name: 'Administrador',
      familyId: family.id,
      role: 'HEAD_OF_FAMILY',
    },
  });

  // 3. Create Properties
  const propertyNames = ['CALERA 43', 'MALAGA', 'LUCENA', 'MIJAS', 'CALERA 14', 'TETUÁN 5', 'SCENI'];
  const properties: any = {};

  for (const name of propertyNames) {
    properties[name] = await prisma.property.create({
      data: {
        name: name,
        familyId: family.id,
        address: name === 'SCENI' ? 'Garaje/Vehículos' : `Calle ${name}, s/n`,
      }
    });
  }

  // 4. Create Expenses linked to Properties with new features
  const expenseData = [
    // CALERA 43
    { category: 'SUMINISTROS', description: 'LUZ', property: 'CALERA 43', isRecurring: true, interval: 'MONTHLY' },
    { category: 'SUMINISTROS', description: 'AGUA', property: 'CALERA 43', isRecurring: true, interval: 'MONTHLY' },
    { category: 'SEGUROS', description: 'SECURITAS', property: 'CALERA 43', isRecurring: true, interval: 'MONTHLY' },
    
    // Impuestos con Alertas (Improvement 5)
    { 
      category: 'GASOIL / IBI', 
      description: 'FRAC IBI', 
      property: 'CALERA 43', 
      amount: 120.50, 
      dueDate: new Date(2026, 5, 20), // Junio 2026
      isRecurring: true,
      interval: 'YEARLY'
    },

    // MALAGA
    { category: 'VIVIENDA', description: 'HIPOTECA', property: 'MALAGA', isRecurring: true, interval: 'MONTHLY', amount: 850 },
    { category: 'SUMINISTROS', description: 'INTERNET', property: 'MALAGA', isRecurring: true, interval: 'MONTHLY', amount: 45 },
    { category: 'VIVIENDA', description: 'CONTRIBUCION', property: 'MALAGA', dueDate: new Date(2026, 9, 10) },

    // SCENI (Improvement 3: Recibos)
    { 
      category: 'SCENI', 
      description: 'HYUNDAI - Reparación motor', 
      property: 'SCENI', 
      amount: 450, 
      receiptUrl: 'https://example.com/recibos/reparacion_hyundai.pdf' 
    },
    { category: 'SCENI', description: 'PEUGEOT', property: 'SCENI', isRecurring: true, interval: 'MONTHLY' },
  ];

  for (const item of expenseData) {
    await prisma.expense.create({
      data: {
        amount: item.amount || 0,
        description: item.description,
        category: item.category,
        userId: user.id,
        familyId: family.id,
        propertyId: properties[item.property]?.id,
        isRecurring: item.isRecurring || false,
        interval: item.interval || null,
        dueDate: item.dueDate || null,
        receiptUrl: item.receiptUrl || null,
        date: new Date(),
      },
    });
  }

  console.log('✅ Advanced Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
