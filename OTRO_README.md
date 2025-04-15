# projecte_final_2DAW - PROPUESTA POR GERARD
# 💡 IDEA ORIGINAL RESUMIDA

Una app para gestionar la logística de la distribución de comida en aviones. Usada por el personal del aeropuerto (empresa de catering aéreo), con comunicación entre:

- Jefe y subjefe  
- Trabajadores  
- Control de logística (qué comida va en qué vuelo, cantidades, horarios)  
- Información en tiempo real

---

# 🚀 FUNCIONALIDADES QUE PUEDES AÑADIR

## 🔄 Gestión de Pedidos

- Crear, editar, eliminar pedidos de comida por vuelo  
- Ver qué vuelo ya fue despachado  
- Estado de los pedidos: en preparación, en camino, entregado  

## 👨‍🍳 Gestión del Inventario

- Materia prima disponible  
- Avisos de stock bajo  
- Control de fechas de vencimiento  

## 🧾 Reportes

- Generar reportes diarios/semanales de entregas, retrasos, problemas  
- Visualizar estadísticas (gráficos) sobre tiempos de entrega o errores  

## 👥 Roles de Usuario

- **Jefe**: acceso total  
- **Subjefe**: validación y control  
- **Trabajadores**: ver tareas asignadas, marcar como completadas  
- *(Opcional)* **Cliente final (aerolínea)**: acceso de solo lectura a los pedidos  

## 🔔 Notificaciones

- Notificaciones push/email en eventos importantes (ej: pedido urgente, retraso)  

## 📱 App Responsive + PWA

- Que funcione bien en móviles (tablet/smartphone)  
- App PWA instalable  

## 💬 Chat interno o sistema de comentarios

- Para que los trabajadores puedan comunicarse con jefe/subjefe por pedido  

---

# 🧰 HERRAMIENTAS Y TECNOLOGÍAS

## 👩‍💻 FRONTEND

- **Lenguaje**: JavaScript / TypeScript  
- **Framework**: React *(o Vue.js si prefieren algo más ligero)*  
- **Estilos**: Tailwind CSS  

**Extras:**

- Shadcn/ui o Material UI para componentes bonitos  
- Framer Motion para animaciones  

## 🧠 BACKEND

- **Lenguaje**: Node.js (JavaScript)  
- **Framework**: Express.js  
- **API**: REST o GraphQL  
- **Autenticación**: JWT (Json Web Tokens)  

*Alternativa más pro:* NestJS (estructura más robusta y profesional)  

## 🗃️ BASE DE DATOS

- **Relacional**: PostgreSQL (recomendado)  
- **ORM**: Prisma o Sequelize  
→ Permite relaciones entre vuelos, pedidos, usuarios, roles, etc.  

*O si quieres algo más sencillo y rápido:* SQLite (para prototipo pequeño)  

## 🧪 TESTING

- **Frontend**: Jest + React Testing Library  
- **Backend**: Supertest + Jest  
- Pruebas automáticas básicas para login, rutas, etc.  

## 🧠 OTRAS HERRAMIENTAS

- **IDE**: Visual Studio Code 🔝  
- **Control de versiones**: Git + GitHub  
- **Diseño de UI/UX**: Figma (para prototipar)  
- **Postman**: Para testear el backend (API REST)  
- **Trello o Notion**: Para organización del proyecto  
- **Docker (opcional)**: Para montar tu app en contenedores  

---

# 📐 ARQUITECTURA RECOMENDADA

- **Arquitectura de la app**

Frontend (React)
    ↓
Backend (Node.js / Express)
    ↓
Base de Datos (PostgreSQL)

-  **Flujo de uso**

1. Usuarios acceden desde navegador o móvil (PWA)
2. Se autentican mediante sistema de login con JWT
3. Consultan:
   - Pedidos asignados
   - Estado de entregas
   - Chat interno
   - Notificaciones en tiempo real
4. Toda la información se guarda en la base de datos:
   - Pedidos
   - Vuelos
   - Usuarios
   - Inventario


---

# 🧠 IDEAS PARA SORPRENDER (Extra Points)

- 🎯 Dashboard con gráficas y KPIs en tiempo real  
- 🌍 Multilenguaje (español, inglés)  
- 📡 Funcionalidad offline (para PWA)  
- 🧠 IA sencilla: sugerencias automáticas de cantidad de comida según historial de vuelos  
- 📸 Subida de fotos de los pedidos o cargamentos  
--------------------------------------
--------------------------------------
# ✅ ¿Por qué es una excelente idea de proyecto?

---

## 1. ✈️ Resuelve un problema real

La logística de comidas en los aviones es compleja:  
Hay que saber cuántas comidas preparar, para qué vuelo, qué menú lleva cada uno, y que esté todo listo a tiempo.

Actualmente, muchas aerolíneas lo gestionan con **Excel o llamadas**, lo cual es lento y propenso a errores.

💡 **Tu app propone digitalizar eso y hacerlo más rápido, organizado y comunicativo.**

---

## 2. 🔄 Tiene flujo de usuarios bien definidos

Tienes varios **roles** que pueden usar la app:

| Rol               | Qué haría en la app                         |
|------------------|---------------------------------------------|
| Jefe de cocina    | Organiza pedidos, asigna tareas             |
| Subjefe           | Supervisa entregas, comunica con el jefe    |
| Cocineros         | Ven sus tareas diarias                      |
| Chofer            | Sabe qué comida debe entregar a qué avión   |
| Admin del sistema | Controla usuarios, vuelos y estadísticas    |

📱 Esto le da lógica, estructura y sentido a tu app.  
¡Perfecto para DAW!

---

## 3. 📊 Puedes aplicar CRUD + relaciones + roles

Esto es perfecto para mostrar tus conocimientos técnicos:

- Base de datos relacional con tablas como:
  - Usuarios (con roles)
  - Pedidos
  - Vuelos
  - Platos
  - Turnos

- Funcionalidades **CRUD** (crear, leer, editar, borrar)  
- Sistema de **login y permisos**

📌 **Esto cubre TODO lo que te piden en un proyecto de fin de ciclo.**

---

## 4. 💬 Tiene componente de comunicación

Podés incluir **chat interno o sistema de mensajes entre roles**:

- Jefe → Subjefe  
- Subjefe → Cocineros  
- Chat de incidencias o avisos urgentes

🎯 Eso suma mucho en la nota porque añade funcionalidades avanzadas.

---

## 5. 📈 Podés escalarlo o venderlo como producto

Este proyecto **no es solo un trabajo de clase**, también podría:

- Escalarse para diferentes aeropuertos  
- Usarse para catering de eventos  
- Convertirse en una app **SaaS (Software as a Service)**

📢 Puedes decir:  
> "Este proyecto puede seguir vivo más allá del ciclo. Tiene potencial real."

---

## 6. 🎓 Impacta en la evaluación final

Tu profe verá que:

- Identificaste una necesidad real  
- Aplicaste buenas prácticas (frontend, backend, base de datos, despliegue)  
- Trabajaste en equipo  
- Entregaste una solución profesional y moderna  

🔥🔥🔥  
**Y eso = ¡NOTA 10/10!**

