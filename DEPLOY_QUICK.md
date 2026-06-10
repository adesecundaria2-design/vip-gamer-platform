# 🎮 DESPLIEGUE RÁPIDO EN NETLIFY (10 MINUTOS)

## ⚡ Opción Más Rápida: Netlify + MongoDB Atlas

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/adesecundaria2-design/vip-gamer-platform.git
cd vip-gamer-platform
```

### Paso 2: Crear MongoDB Atlas (2 min)

1. Ve a: https://mongodb.com/cloud/atlas
2. **Sign Up** → Crea cuenta
3. **Create a Free Cluster** → Selecciona "Free"
4. Espera a que se cree
5. **Connect** → Copia la URL:
   ```
   mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/vip-gamer
   ```

### Paso 3: Desplegar Frontend en Netlify (3 min)

#### Opción A: Arrastra y Suelta (Más Fácil)

1. Ve a: https://app.netlify.com
2. **Drag and drop** → Arrastra la carpeta `frontend/dist`
3. ¡Tu sitio está en vivo!

#### Opción B: Conectar GitHub (Recomendado)

1. Ve a: https://app.netlify.com
2. **New site from Git**
3. **Connect to Git** → Selecciona GitHub
4. Autoriza Netlify
5. Selecciona: `vip-gamer-platform`
6. **Deploy settings:**
   - **Build command:** `cd frontend && npm install && npm run build`
   - **Publish directory:** `frontend/dist`
7. **Deploy** → Espera 2-5 min

### Paso 4: Obtener URL del Frontend

Tu sitio estará en: `https://[nombre-random].netlify.app`

Ejemplo: `https://vip-gamer-landing-2024.netlify.app`

### Paso 5: Desplegar Backend en Vercel (3 min)

#### La forma más fácil:

1. Ve a: https://vercel.com
2. **New Project** → **Import Git Repository**
3. Selecciona: `vip-gamer-platform`
4. **Root Directory:** Selecciona `backend`
5. **Environment Variables:** Agrega:

```
MONGODB_URI=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/vip-gamer
JWT_SECRET=MiSecretoSuperSeguro123456789012345
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxx
ADMIN_WHATSAPP=+591XXXXXXXXX
CORS_ORIGIN=https://[tu-netlify-url].netlify.app
NODE_ENV=production
```

6. **Deploy** → Espera 2-3 min

Tu API estará en: `https://vip-gamer-backend.vercel.app`

### Paso 6: Conectar Frontend con Backend (1 min)

1. En Netlify → Tu sitio
2. **Site settings** → **Build & deploy**
3. **Environment variables** → **Edit variables**
4. Agregar:
   - **VITE_API_URL:** `https://vip-gamer-backend.vercel.app/api`
5. **Trigger deploy** → Redeployar

---

## ✅ Verificación Final

```bash
# Verifica que el frontend funcione
curl https://tu-sitio.netlify.app

# Verifica que el backend funcione
curl https://tu-api.vercel.app/health
```

Si ves respuestas ✅ ¡Está en vivo!

---

## 🎯 URLs de tu Plataforma

```
🎮 Frontend: https://tu-sitio.netlify.app
🔌 Backend: https://tu-api.vercel.app
💾 Database: MongoDB Atlas
```

---

## 📊 Cosas Que Funcionarán Inmediatamente

✅ Login/Registro
✅ 5 Minijuegos
✅ Sistema VIP
✅ Misiones
✅ Sorteos
✅ Panel Admin
✅ Perfil de usuario
✅ Cofre diario

---

## ⚙️ Configuración Adicional (Opcional)

### Agregar Dominio Personalizado en Netlify

1. Netlify → **Domain settings**
2. **Add custom domain**
3. Sigue las instrucciones DNS

### Habilitar SSL (Automático)

Ya viene habilitado en Netlify y Vercel ✅

### Configurar Twilio (Para WhatsApp)

1. Ve a: https://twilio.com
2. Crea cuenta
3. Obtén:
   - Account SID
   - Auth Token
   - WhatsApp Number
4. Actualiza variables en Vercel

---

## 🐛 Solucionar Problemas Comunes

### Frontend dice "No puede conectar a API"
```
❌ VITE_API_URL no está configurada correctamente
✅ Solución: Verifica URL de Vercel en Netlify environment variables
```

### Backend está en blanco
```
❌ MONGODB_URI está incorrecto
✅ Solución: Revisa credenciales de MongoDB Atlas
```

### Error 504 en Vercel
```
❌ Database timeout
✅ Solución: Whitelist tu IP en MongoDB Atlas
```

---

## 📱 Acciones Siguientes

1. **Personalizar:**
   - Cambiar logo
   - Cambiar colores
   - Agregar tu QR de pago real

2. **Configurar:**
   - Twilio WhatsApp
   - Email notifications
   - Analytics

3. **Monetizar:**
   - Cobrar pagos reales
   - Procesador de pagos
   - Reportes financieros

---

## 🚀 Bonus: Script de Despliegue Automático

```bash
#!/bin/bash

# Clone repository
git clone https://github.com/adesecundaria2-design/vip-gamer-platform.git
cd vip-gamer-platform

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Deploy with Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=frontend/dist

# Deploy backend manually via Vercel web UI

echo "✅ Despliegue completado!"
```

---

## 📞 ¿Problemas?

1. Revisa los logs en Netlify: **Deploys → View logs**
2. Revisa los logs en Vercel: **Deployments → Logs**
3. Prueba localmente: `npm run dev`
4. Contacta al soporte

---

**¡Tu plataforma está lista en 10 minutos! 🎉**

Última actualización: 2026-06-10
