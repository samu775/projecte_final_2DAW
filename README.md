# projecte_final_2DAW
projecte final de curso de 2da de DAW de grau superior 

## idea planteada para el projecte final:

### 🏗 Arquitectura del Proyecto
🔹 Características Principales
  + ✔ Registrar ingresos y gastos.
  + ✔ Categorizar transacciones (comida, transporte, entretenimiento, etc.)
  + ✔ Generar reportes y gráficos de gastos
  + ✔ Notificaciones sobre hábitos de gasto
  + ✔ Posibilidad de exportar datos en CSV o PDF
  + ✔ Multiusuario con autenticación segura

### 🏛 Tecnologías Recomendadas
🔹 Backend (Go)
  + Framework: Gin o Echo (para API REST rápida y segura)

  +  Base de Datos: PostgreSQL o MongoDB (para almacenar datos financieros)

  + Autenticación: JWT (para sesiones seguras)

  + ORM: GORM (para manejar la base de datos fácilmente)

  + Seguridad: Cifrado de datos sensibles (bcrypt para contraseñas)

🔹 Frontend
  - React.js o Vue.js (para una interfaz rápida y moderna)

  - Chart.js o Recharts (para gráficos de gastos)

🔹 Infraestructura
  - Docker (para despliegue fácil)

  - Redis (para mejorar la velocidad de la API)

  - AWS o Railway (para hosting en la nube)

### 🗂 Estructura del Proyecto en Go

* 📂 gestion-financiera/
 * ┣ 📂 api/         # Controladores y rutas
 * ┣ 📂 models/      # Modelos de la base de datos
 * ┣ 📂 services/    # Lógica de negocio
 * ┣ 📂 database/    # Conexión a la base de datos
 * ┣ 📂 middleware/  # Autenticación y seguridad
 * ┣ 📂 config/      # Variables de entorno
 * ┣ main.go         # Punto de entrada


### 🏁 Pasos para Desarrollarlo
> 1️⃣ Configurar el entorno → Instalar Go, configurar PostgreSQL o MongoDB, crear proyecto.

> 2️⃣ Definir los modelos de datos → Usuario, transacción, categoría, etc.

> 3️⃣ Crear API REST en Go → Rutas para registrar gastos, consultar historial, etc.

> 4️⃣ Implementar autenticación segura → Registro/Login con JWT.

> 5️⃣ Integrar frontend con React/Vue → Diseño y conexión con API.

> 6️⃣ Añadir gráficos y reportes → Visualización de gastos por categoría.

> 7️⃣ Mejorar seguridad y optimización → Encriptar datos, mejorar consultas SQL.

> 8️⃣ Desplegar en la nube → Usar Railway, AWS o DigitalOcean.