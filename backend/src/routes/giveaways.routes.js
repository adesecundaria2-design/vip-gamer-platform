import express from 'express'

const router = express.Router()

// Get Active Giveaways
router.get('/active', (req, res) => {
  res.json({
    giveaways: []
  })
})

// Join Giveaway
router.post('/join', (req, res) => {
  res.json({ message: 'Te has unido al sorteo' })
})

export default router