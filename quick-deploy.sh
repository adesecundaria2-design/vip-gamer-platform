#!/bin/bash

# 🎯 Script Rápido: Despliegue con un Solo Comando

echo "🎮 Iniciando despliegue automático..."
echo ""

# 1. Instalar dependencias
echo "📦 Instalando dependencias..."
cd frontend && npm install && npm run build && cd ..
cd backend && npm install && cd ..

# 2. Subir a Git
echo "📤 Subiendo cambios a GitHub..."
git add .
git commit -m "deploy: Actualización de despliegue" || true
git push origin main

# 3. Mensaje de éxito
echo ""
echo "✅ Código actualizado en GitHub"
echo ""
echo "🚀 Próximos pasos:"
echo ""
echo "1️⃣  Frontend (Netlify):"
echo "   https://app.netlify.com → New site from Git"
echo ""
echo "2️⃣  Backend (Vercel):"
echo "   https://vercel.com → New Project"
echo ""
echo "3️⃣  Database (MongoDB Atlas):"
echo "   https://mongodb.com/cloud/atlas"
echo ""
