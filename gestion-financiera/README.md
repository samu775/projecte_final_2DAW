# 🏁 Pasos para Desarrollar el projecte

## 1️⃣ Configurar el entorno → Instalar Go, configurar Mongo DB, crear proyecto:

### 🛠 Paso 1: Instalar Go y Configurar el Entorno
#### 🔹 1. Instalar Go
* Primero, necesitas instalar Go en tu sistema.

    * 🔗 Descargar Go: https://go.dev/dl/

* Instalación en tu sistema operativo:
+ ***🔵 Windows:***

    * Descarga el instalador .msi y ejecútalo.

    * Durante la instalación, deja todo por defecto.

    * Para verificar la instalación, abre la terminal (CMD o PowerShell) y escribe:

            go version

        Si ves algo como: 

            go version go1.xx.x windows/amd64 
        
        está instalado correctamente.

+ ***🔵 Linux/macOS:***

    * Abre la terminal y ejecuta:

            sudo apt update && sudo apt install -y golang  # (Ubuntu/Debian)
        
        O en macOS con Homebrew:

            brew install go
    
        Verifica con:

            go version

#### 🔹 2. Configurar el Espacio de Trabajo de Go
* Por defecto, Go usa GOPATH, pero desde Go 1.18+ se usa go mod.

    * 1️⃣ Crea la carpeta de tu proyecto:

            mkdir gestion-financiera && cd gestion-financiera

    * 2️⃣ Inicializa el proyecto con go mod:

            go mod init gestion-financiera

        Esto creará un archivo go.mod que gestionará las dependencias del proyecto.
---
### 🗄 Paso 2: Instalar y Configurar MongoDB
* 📌 MongoDB: ¿Usar un Cluster (MongoDB Atlas) o Local?
Tienes dos opciones para usar MongoDB:

    1️⃣ Usar un cluster en la nube (MongoDB Atlas)

    2️⃣ Instalar MongoDB en tu ordenador (Local)

    ✅ ¿Cuál es mejor opción? Depende de lo que se necesite:

    | Opción                      | Pros                                                                 | Contras                                                             |
    |-----------------------------|----------------------------------------------------------------------|---------------------------------------------------------------------|
    | **MongoDB Atlas (Cluster en la nube)** | 🌎 Disponible desde cualquier lugar<br>🔒 Seguridad integrada (backups, escalabilidad)<br>🚀 Fácil despliegue en producción | 📶 Necesita internet<br>⏳ Puede ser más lento en consultas         |
    | **MongoDB Local (Instalado en tu PC)** | ⚡️ Más rápido en desarrollo<br>🆓 No depende de conexión a internet<br>👨‍💻 Ideal para trabajar sin conexión | 🖥 Puede ocupar espacio en disco<br>🔧 Necesita configuración extra para producción |

#### 🔹 **Opción 1: MongoDB Local**

##### **Windows**
1. Descargar e instalar desde [MongoDB Community](https://www.mongodb.com/try/download/community).
2. Durante la instalación, activar **"Run MongoDB as a Service"**.

##### **Linux (Ubuntu/Debian)**
```sh
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

##### **macOS (Homebrew)**
```sh
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### 🔹 **Verificar que MongoDB Funciona**
```sh
mongo
```
Si ves la consola de MongoDB (`>`), ¡está funcionando! Para salir, escribe `exit`.

---

#### 🔹 **Opción 2: Usar MongoDB Atlas (Cluster en la Nube)**
1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Crear un **cluster gratuito** (`M0 Free Tier`).
3. Configurar acceso: añadir IP `0.0.0.0/0` y crear usuario.
4. Obtener la conexión URI:
   ```plaintext
   mongodb+srv://usuario:password@cluster0.mongodb.net/tuBaseDeDatos?retryWrites=true&w=majority
   ```
5. Usar esta URI en la configuración del proyecto en Go.

---
### 📂 Paso 3: Crear el Proyecto en Go
Ahora que ya tenemos Go y MongoDB, vamos a preparar la estructura del proyecto.

* Ejecuta estos comandos en tu carpeta del proyecto:

        mkdir -p api controllers models database config 
        touch main.go

* Esto creará la siguiente estructura:
    ```plaintext
    📂 gestion-financiera/
    ┣ 📂 api/         # Rutas y controladores
    ┣ 📂 models/      # Modelos de MongoDB
    ┣ 📂 controllers/ # Lógica de negocio
    ┣ 📂 database/    # Conexión a MongoDB
    ┣ 📂 config/      # Configuración del proyecto
    ┣ main.go         # Punto de entrada del servidor
    ┗ go.mod          # Archivo de dependencias
    ```
---
### 🖥 4. ¿Qué IDE Recomendar?

#### 🔹 **1. VS Code (Recomendado)**
✅ Ligero y rápido
✅ Plugins para **Go** y **MongoDB**
✅ Soporta **Docker, Git, etc.**

🔗 [Descargar VS Code](https://code.visualstudio.com/)

**Extensiones útiles:**
- `Go` → Soporte para el lenguaje Go
- `REST Client` → Para probar APIs
- `MongoDB for VS Code` → Para conectar con MongoDB

#### 🔹 **2. Goland (JetBrains)**
✅ Depuración avanzada
✅ Soporta Go Modules
✅ Integración con Docker y Kubernetes

🔗 [Descargar Goland](https://www.jetbrains.com/go/) (Es de pago, pero tiene prueba gratuita)

---

# 🚀 ¿Próximos Pasos? .... muy pronto