# FamilyGasto - Control de Gastos Familiares Premium 🏠💎

Una aplicación full-stack premium para la gestión financiera familiar y patrimonial, diseñada para el control de múltiples propiedades, gastos recurrentes y sincronización inteligente entre aplicaciones.

## ✨ Características Especiales (Nuevas)
- **Gestión Multi-Propiedad**: Controla gastos por vivienda (Málaga, Lucena, Mijas, etc.).
- **Sincronización con Gasoil**: Integración automática con la app de combustible de la familia.
- **Gestión de Recibos**: Sube y visualiza imágenes de tickets y facturas directamente desde el dashboard.
- **Alertas de Impuestos**: Calendario de vencimientos para IBI, contribuciones y seguros.
- **Gastos Recurrentes**: Identificación visual de gastos fijos mensuales.

---

## 🚀 Manual de Lanzamiento

### 1. Requisitos Previos
- **Node.js v18+** instalado.
- Ambas aplicaciones (`GastosFamiliares` y `controlGasoilFamiliar`) deben estar en la misma red local (normalmente `localhost`).

### 2. Preparación del Backend (GastosFamiliares)
Desde la carpeta `backend`:
1. Instala dependencias: `npm install`
2. Asegúrate de tener el `.env` configurado (ya lo hemos hecho por ti).
3. Sincroniza la base de datos (SQLite): `npx prisma migrate dev`
4. **Sembrar datos iniciales** (Propiedades y gastos base): `npx prisma db seed`
5. Lanza el servidor: `npm run dev` (Correrá en el puerto **3001**).

### 3. Preparación del Frontend (GastosFamiliares)
Desde la carpeta `frontend`:
1. Instala dependencias: `npm install`
2. Lanza la web: `npm run dev` (Correrá en el puerto **3000**).
3. Accede a: `http://localhost:3000`

### 4. Conexión con la App de Gasoil
Para que la sincronización funcione, la app de Gasoil debe estar configurada:
1. Ve a `controlGasoilFamiliar/backend`.
2. Lanza el servidor: `npm run dev` (Correrá en el puerto **3002**).
3. Cada vez que añadas un repostaje en esa app, verás aparecer el gasto automáticamente en **FamilyGasto**.

---

## 🛠️ Estructura del Proyecto
- **Backend (Clean Architecture)**:
  - `src/domain`: Entidades (Expense, Property) y Repositorios.
  - `src/application`: Casos de uso.
  - `src/infrastructure`: Implementación de Prisma, Multer (archivos) y Controladores.
- **Frontend (Next.js)**:
  - `src/app`: Dashboard premium con React Hooks y Lucide Icons.
- **uploads/**: Carpeta donde se guardan físicamente tus recibos.

## 🛡️ Seguridad
- **Internal Sync Key**: Solo aplicaciones autorizadas con tu clave secreta pueden enviar gastos al sistema.
- **Multer Filter**: Solo se permiten imágenes y PDFs para evitar archivos maliciosos.
- **Prisma**: Protección nativa contra inyecciones SQL.

---

## 👨‍🏫 Manual de Usuario Rápido
1. **Ver Recibos**: Haz clic en el icono verde `+` en la lista de gastos para ver el archivo adjunto.
2. **Subir Recibo**: Haz clic en el icono gris tenue `+` de cualquier gasto para subir su factura.
3. **Alertas**: Revisa la tarjeta de "Alertas Próximas" para no olvidar el pago del IBI o la Contribución.
4. **Propiedades**: Usa el panel lateral para ver cuántos gastos tiene acumulados cada una de tus casas.
"# GestionFamilia" 
