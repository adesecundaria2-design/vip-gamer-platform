# 🎮 VIP GAMER PLATFORM

Plataforma web profesional, moderna y completamente funcional con diseño gamer. Sistema VIP, pagos, minijuegos, misiones, sorteos y panel administrativo.

## 📋 Características Principales

### 👤 Autenticación
- ✅ Registro de usuarios
- ✅ Inicio de sesión seguro (JWT)
- ✅ Perfil de usuario personalizado
- ✅ Guardado automático de progreso

### 👑 Sistema VIP (4 Niveles)
- **VIP 1**: 10 Bs → 110 💎
- **VIP 2**: 20 Bs → 220 💎
- **VIP 3**: 50 Bs → 570 💎
- **VIP 4 ELITE**: 100 Bs → 1166 💎

Cada VIP incluye:
- Barra de progreso visual
- Misiones exclusivas
- Recompensas automáticas

### 💳 Sistema de Pagos
- 📱 QR de pago integrado (Pago móvil)
- 📸 Carga de comprobante
- ✅ Verificación automática
- 🔄 Estados: Pendiente → Verificado → Activado
- 🔔 Notificaciones en tiempo real

### 🎮 Minijuegos (5 tipos)
- 🚗 **Carrera de Autos** - Gana por velocidad
- ⚽ **Penales de Fútbol** - Marca goles
- 🧠 **Juego de Memoria** - Encuentra parejas
- 🏃 **Runner Infinito** - Salta obstáculos
- 🎯 **Tiro al Blanco** - Acierta objetivos

Cada juego otorga puntos VIP automáticamente.

### 📋 Sistema de Misiones
- 🎮 Jugar X partidas
- 🏆 Ganar carreras
- 📊 Alcanzar puntuaciones
- 📅 Rachas de login
- Barra de progreso por VIP
- Recompensas automáticas

### 🎁 Sorteos VIP
- 📅 Sorteos semanales y mensuales
- 🎫 Boletos por completar misiones
- 💎 Premios: Diamantes, Recompensas, VIPs gratis
- 📊 Vista de participantes y boletos
- 🏆 Historial de ganadores

**Sistema de Boletos:**
- VIP 1 completado = 1 boleto
- VIP 2 completado = 3 boletos
- VIP 3 completado = 7 boletos
- VIP 4 completado = 15 boletos

### 🏆 Extras
- 📊 Ranking semanal
- 🎁 Cofre diario (recompensas aleatorias)
- ⭐ Sistema de logros
- 👥 Sistema de referidos
- 📈 Estadísticas del jugador
- 🔔 Notificaciones en tiempo real

### 🛠️ Panel de Administración
- 👥 Gestión de usuarios
- 💳 Verificación de pagos
- 📋 Gestión de reclamos
- 🎲 Control de sorteos
- 📊 Estadísticas y reportes
- 🎁 Gestión de recompensas
- 📱 Integración WhatsApp

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - UI moderna
- **Vite** - Build ultra rápido
- **TypeScript** - Tipado seguro
- **Tailwind CSS** - Estilos responsive
- **Framer Motion** - Animaciones fluidas
- **Axios** - Peticiones HTTP

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos
- **JWT** - Autenticación segura
- **bcrypt** - Encriptación de contraseñas
- **Multer** - Carga de archivos
- **Twilio** - Notificaciones WhatsApp
- **QRCode** - Generador de QR

### DevOps
- **Docker** - Containerización
- **Docker Compose** - Orquestación

## 📁 Estructura del Proyecto

```
vip-gamer-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── ...
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── ...
│   └── package.json
└── docker-compose.yml
```

## 🚀 Instalación Rápida

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

---

**Desarrollado con ❤️ para gamers**