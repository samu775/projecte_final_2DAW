# 🌐 BASE DE DATOS EN LA NUBE: Railway + PostgreSQL (opcion top)

1. Entra a: [https://railway.app](https://railway.app)
2. Crea una cuenta (con GitHub o email)
3. Clic en "New Project" > "Provision PostgreSQL"

Railway te generará automáticamente:

### 🔗 una URL como esta:

```bash
postgres://usuario:contraseña@host:puerto/db
``` 

Copia esa URL y guárdala en tu backend .env como:

```bash
DATABASE_URL=postgres://usuario:contraseña@host:puerto/db
```

---
---

# ✅ STACK 1 – TypeScript

## 📁 ESTRUCTURA DEL PROYECTO

```plaintext
/proyecto-ts/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── prisma/
│   │   │   └── client.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env
│   ├── tsconfig.json
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
```
# 🧪 Tecnologías

| Parte     | Tech                          |
|-----------|-------------------------------|
| Lenguaje  | TypeScript                    |
| Backend   | Node.js + Express             |
| ORM       | Prisma                        |
| BD        | PostgreSQL (Railway)          |
| Frontend  | React + Vite + Tailwind CSS   |

---
---

# ✅ STACK 2 – JavaScript

## 📁 ESTRUCTURA DEL PROYECTO

```plaintext
/proyecto-js/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── prisma/
│   │   └── client.js
│   ├── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
```
# 🧪 Tecnologías

| Parte     | Tech                          |
|-----------|-------------------------------|
| Lenguaje  | JavaScript                    |
| Backend   | Node.js + Express             |
| ORM       | Prisma (compatible con JS)    |
| BD        | PostgreSQL (Railway)          |
| Frontend  | React + Vite + Tailwind CSS   |

---
---

# ✅ BONUS: CÓMO CONECTAR Prisma + Railway

### Paso 1: Define tu modelo (por ejemplo, Usuario y Pedido)

```prisma
// prisma/schema.prisma
model Usuario {
  id      Int      @id @default(autoincrement())
  nombre  String
  email   String   @unique
  pedidos Pedido[]
}

model Pedido {
  id        Int      @id @default(autoincrement())
  vuelo     String
  usuario   Usuario  @relation(fields: [usuarioId], references: [id])
  usuarioId Int
}
```
### Paso 2: Ejecuta en terminal

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Paso 3: Usa Prisma en tu backend

```ts
// backend/src/prisma/client.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default prisma
```

