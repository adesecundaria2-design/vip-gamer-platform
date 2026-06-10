import React, { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'qrcode.react'

const PaymentModal = ({ vipLevel, onClose }) => {
  const vipData = {
    1: { price: 10, diamonds: 110 },
    2: { price: 20, diamonds: 220 },
    3: { price: 50, diamonds: 570 },
    4: { price: 100, diamonds: 1166 }
  }

  const data = vipData[vipLevel]
  const [step, setStep] = useState('qr') // qr, upload, confirmed
  const [file, setFile] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="gamer-card max-w-md w-full space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gamer-gold">Pago VIP {vipLevel}</h3>
          <button onClick={onClose} className="text-2xl">✕</button>
        </div>

        {step === 'qr' && (
          <div className="space-y-4 text-center">
            <p className="text-lg font-bold">Escanea el código QR con tu app de pago</p>
            <p className="text-2xl font-bold text-gamer-orange">{data.price} Bs</p>
            
            <div className="flex justify-center bg-white p-4 rounded-lg">
              <QRCode value="https://payment-qr-data.example.com" size={256} />
            </div>

            <button
              onClick={() => setStep('upload')}
              className="gamer-btn w-full"
            >
              He Realizado el Pago
            </button>
          </div>
        )}

        {step === 'upload' && (
          <div className="space-y-4">
            <p className="text-center">Sube una captura del comprobante de pago</p>
            
            <div className="border-2 border-dashed border-gamer-orange rounded-lg p-6 text-center cursor-pointer hover:border-gamer-gold">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0])}
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <p className="text-4xl mb-2">📸</p>
                <p className="font-bold text-gamer-orange">Haz clic para subir imagen</p>
              </label>
            </div>

            {file && <p className="text-gamer-success text-sm">✅ {file.name}</p>}

            <button
              onClick={() => setStep('confirmed')}
              disabled={!file}
              className="gamer-btn w-full disabled:opacity-50"
            >
              Enviar Comprobante
            </button>
          </div>
        )}

        {step === 'confirmed' && (
          <div className="space-y-4 text-center">
            <p className="text-4xl">✅</p>
            <p className="text-xl font-bold text-gamer-gold">¡Comprobante Recibido!</p>
            <p className="text-gray-400">Tu pago está siendo verificado. Recibirás {data.diamonds} 💎 pronto.</p>
            
            <div className="bg-gamer-light p-4 rounded-lg space-y-2 text-left">
              <p className="text-sm"><span className="text-gamer-orange">Estado:</span> <span className="text-gamer-accent">Pendiente</span></p>
              <p className="text-sm"><span className="text-gamer-orange">VIP:</span> <span className="text-gamer-gold">Nivel {vipLevel}</span></p>
              <p className="text-sm"><span className="text-gamer-orange">Diamantes:</span> <span className="text-gamer-gold">{data.diamonds}</span></p>
            </div>

            <button onClick={onClose} className="gamer-btn w-full">
              Cerrar
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default PaymentModal