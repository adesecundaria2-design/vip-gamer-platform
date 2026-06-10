import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'

dotenv.config()

const app = express()

// CORS Configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}))

// Middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiados intentos desde esta IP, intente más tarde.'
})

app.use('/api/', limiter)

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vip-gamer'

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB conectado'))
.catch(err => console.error('❌ Error MongoDB:', err))

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() })
})

// Routes
try {
  const authRoutes = await import('./routes/auth.routes.js')
  const vipRoutes = await import('./routes/vip.routes.js')
  const paymentRoutes = await import('./routes/payments.routes.js')
  const gameRoutes = await import('./routes/games.routes.js')
  const missionRoutes = await import('./routes/missions.routes.js')
  const giveawayRoutes = await import('./routes/giveaways.routes.js')
  const adminRoutes = await import('./routes/admin.routes.js')
  
  app.use('/api/auth', authRoutes.default)
  app.use('/api/vip', vipRoutes.default)
  app.use('/api/payments', paymentRoutes.default)
  app.use('/api/games', gameRoutes.default)
  app.use('/api/missions', missionRoutes.default)
  app.use('/api/giveaways', giveawayRoutes.default)
  app.use('/api/admin', adminRoutes.default)
} catch (error) {
  console.error('Error loading routes:', error)
}

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Error interno del servidor' })
})

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en puerto ${PORT}`)
  })
}

export default app