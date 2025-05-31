# 💰 Finanzas - Gestión Financiera Personal

Un sistema de administración financiera desarrollado con **C# + SQL Server** en el backend y **React + TypeScript** en el frontend. Permite gestionar ingresos, gastos, préstamos y pagos recurrentes con seguridad y análisis financiero.

## 🚀 Funcionalidades por Módulo

### 🔹 Backend (C# + SQL Server)
El backend se encargará de procesar las solicitudes del usuario y gestionar la base de datos.

#### **Endpoints principales**
- **Autenticación (`/api/auth`)** → Registro, login y gestión de usuarios.
- **Ahorros (`/api/savings`)** → CRUD de ingresos y cuentas de ahorro.
- **Gastos (`/api/expenses`)** → CRUD de gastos con categorías y métodos de pago.
- **Préstamos (`/api/loans`)** → Registro y seguimiento de préstamos.
- **Pagos recurrentes (`/api/payments`)** → Gestión de pagos periódicos y alertas.
- **Reportes (`/api/reports`)** → Generación de gráficos financieros.

#### **🛡️ Seguridad**
- Encriptación de datos sensibles.
- Registro de actividad del usuario.
- Protección contra accesos no autorizados.

### 🎨 Frontend (React + TypeScript)
El frontend es la interfaz visual donde el usuario interactúa con el sistema.

#### **Componentes principales**
- **Dashboard** → Vista general del estado financiero.
- **Formulario de ingresos/gastos** → Captura de datos con validaciones.
- **Gráficos y reportes** → Visualización de tendencias financieras.
- **Gestión de préstamos y pagos** → Registro y seguimiento de deudas.
- **Autenticación** → Pantallas de login y registro.

#### **🛠️ Buenas prácticas**
- Uso de **React Query** para manejo eficiente de datos.
- Diseño modular con **Styled Components** o **Tailwind CSS**.
- Validaciones con **Yup** para formularios.

## 🗄️ Base de datos (Microsoft SQL Server)

### **Gestión de Usuarios**
- Registro de usuarios con autenticación segura.
- Almacenamiento de datos personales (nombre, email, contraseña encriptada).
- Configuración de preferencias financieras.

### **Tablas Principales**
1️⃣ **Ahorros**
- Registro de ingresos periódicos y puntuales.
- Categorización de cuentas de ahorro (banco, efectivo, inversiones).
- Historial de depósitos y retiros.

2️⃣ **Gastos y Compras**
- Registro de gastos con fecha, categoría y método de pago.
- Seguimiento de gastos diarios, semanales y mensuales.
- Relación entre ingresos y egresos.

3️⃣ **Préstamos y Deudas**
- Registro de préstamos otorgados y recibidos.
- Cálculo de intereses y fechas de vencimiento.
- Historial de pagos realizados y pendientes.

4️⃣ **Pagos Recurrentes**
- Gestión de suscripciones y facturas periódicas.
- Alertas de vencimiento y pagos automáticos.
- Relación con ingresos y gastos.

5️⃣ **Reportes y Análisis**
- Generación de gráficos financieros.
- Comparación de ingresos vs egresos.
- Análisis de tendencias de ahorro y gasto.

6️⃣ **Seguridad y Auditoría**
- Encriptación de datos sensibles.
- Registro de actividad del usuario.
- Protección contra accesos no autorizados.

---

## 🎯 Estado del Proyecto
📌 **En desarrollo** - Se está trabajando en la integración del backend y frontend.

## 📚 Tecnologías Utilizadas
- **Backend:** C# (ASP.NET Core) + SQL Server
- **Frontend:** React + TypeScript
- **Seguridad:** JWT para autenticación
- **Estilos:** Tailwind CSS / Styled Components

## 🌎 Autor
Proyecto desarrollado por **Kevin Rojas** 👨‍💻.

---

Con esta versión, tu README será más atractivo y fácil de entender para quienes visiten tu repositorio en GitHub. Si quieres agregar más detalles, dime qué te gustaría mejorar. 🚀
