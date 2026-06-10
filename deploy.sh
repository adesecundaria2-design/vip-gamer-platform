#!/bin/bash

# 🚀 Script Automático de Despliegue en Netlify y Vercel
# Uso: chmod +x deploy.sh && ./deploy.sh

set -e

echo "🎮 VIP GAMER PLATFORM - Script de Despliegue"
echo "============================================"
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Paso 1: Verificar requisitos
echo -e "${BLUE}Paso 1: Verificando requisitos...${NC}"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado"
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado"
    exit 1
fi

echo -e "${GREEN}✅ Todos los requisitos están instalados${NC}"
echo ""

# Paso 2: Build del Frontend
echo -e "${BLUE}Paso 2: Compilando Frontend...${NC}"

cd frontend
npm install
npm run build

if [ -d "dist" ]; then
    echo -e "${GREEN}✅ Frontend compilado exitosamente${NC}"
    echo "   Tamaño: $(du -sh dist | cut -f1)"
else
    echo "❌ Error en la compilación del frontend"
    exit 1
fi

cd ..
echo ""

# Paso 3: Verificar Backend
echo -e "${BLUE}Paso 3: Verificando Backend...${NC}"

cd backend
npm install

if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ Backend listo${NC}"
else
    echo "❌ Backend no encontrado"
    exit 1
fi

cd ..
echo ""

# Paso 4: Mostrar instrucciones de despliegue
echo -e "${BLUE}Paso 4: Instrucciones de Despliegue${NC}"
echo ""

echo -e "${YELLOW}📦 FRONTEND (Netlify):${NC}"
echo "1. Ve a: https://app.netlify.com"
echo "2. Click en 'New site from Git'"
echo "3. Selecciona este repositorio"
echo "4. Build command: cd frontend && npm install && npm run build"
echo "5. Publish directory: frontend/dist"
echo "6. Click Deploy"
echo ""

echo -e "${YELLOW}🔌 BACKEND (Vercel):${NC}"
echo "1. Ve a: https://vercel.com"
echo "2. Click en 'New Project'"
echo "3. Selecciona este repositorio"
echo "4. Root Directory: backend"
echo "5. Agrega estas variables de entorno:"
echo "   - MONGODB_URI=mongodb+srv://..."
echo "   - JWT_SECRET=tu_secret"
echo "   - TWILIO_ACCOUNT_SID=..."
echo "   - TWILIO_AUTH_TOKEN=..."
echo "   - ADMIN_WHATSAPP=+591..."
echo "   - CORS_ORIGIN=https://tu-netlify-url"
echo "6. Click Deploy"
echo ""

echo -e "${YELLOW}💾 DATABASE (MongoDB Atlas):${NC}"
echo "1. Ve a: https://mongodb.com/cloud/atlas"
echo "2. Crea cuenta y cluster gratis"
echo "3. Obtén la connection string"
echo "4. Usa esa URL en MONGODB_URI"
echo ""

echo -e "${GREEN}✅ Preparación completa!${NC}"
echo ""

echo -e "${BLUE}Resumen:${NC}"
echo "- Frontend listo en: frontend/dist"
echo "- Backend listo en: backend"
echo "- Tamaño frontend: $(du -sh frontend/dist | cut -f1)"
echo ""

echo -e "${GREEN}🚀 Siguiente paso: Desplegar en Netlify y Vercel${NC}"
echo ""
