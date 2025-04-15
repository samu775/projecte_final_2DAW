# ❓ ¿Es necesario usar Prisma?

No, no es obligatorio. Prisma es una herramienta opcional, pero muy recomendada para trabajar con bases de datos de forma moderna, segura y rápida.

---

# 🧠 ¿Qué hace Prisma?

Es un ORM (Object-Relational Mapper), que te permite:

- 🔹 Definir tus tablas como modelos en código
- 🔹 Hacer consultas sin escribir SQL directamente
- 🔹 Validaciones automáticas
- 🔹 Generar y aplicar migraciones (modificaciones a la BD)
- 🔹 Conectarte a PostgreSQL, MySQL, SQLite, etc.

---

# 👍 VENTAJAS DE USAR PRISMA

| Prisma te ayuda con...        | ¿Por qué importa?                                       |
|-------------------------------|--------------------------------------------------------|
| Código limpio                 | Evitas consultas SQL manuales feas o repetidas         |
| Seguridad                     | Evita SQL injection                                    |
| Autocompletado                | TypeScript-friendly, súper útil                        |
| Rápida curva de aprendizaje   | Aprendes 1 modelo y sabes todos                        |
| Buenas prácticas              | Facilita mantener el proyecto ordenado                |

---

# 🤔 ¿Y si no uso Prisma?

Puedes usar alternativas como:

- Knex.js – más técnico, parecido a SQL
- Sequelize – ORM más antiguo y usado (funciona bien con JS puro)
- Escribir SQL directamente (menos recomendado si el proyecto crece)

**✅ Funcionan**  
**❌ Pero son más propensos a errores, más difíciles de mantener y más verbosos**

---

# 🧪 ¿Es fácil aprender Prisma?

¡Sí! Es sorprendentemente fácil. Mira este ejemplo 👇

### 🎯 Objetivo: Traer todos los usuarios

**Con Prisma:**

```ts
const usuarios = await prisma.usuario.findMany();
```
Sin Prisma (con SQL manual):
```ts
const result = await pool.query("SELECT * FROM usuarios");
```
Prisma además valida y te ayuda con autocompletado en VS Code.

---
---
# 🎓 Recomendación para tu grupo DAW

🟢 **Si usas TypeScript o JavaScript moderno, Prisma es:**

- fácil de aprender
- moderno
- te da puntos extra en presentación final
- te ahorra muchos errores comunes

🔴 **No lo uses solo si:**

- No tienes tiempo ni quieres aprender nada más
- El profe quiere solo SQL escrito a mano
