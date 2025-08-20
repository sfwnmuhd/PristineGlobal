import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, X } from 'lucide-react'

const FloatingWhatsApp = () => {
  const [showChatView, setShowChatView] = useState(false)

  const handleWhatsAppClick = () => {
    if (showChatView) {
      window.open('https://wa.me/97477651525', '_blank')
    } else {
      setShowChatView(true)
    }
  }

  return (
    <div className='fixed bottom-4 right-4 sm:bottom-28 sm:right-6 z-50'>
      <AnimatePresence>
        {showChatView && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            className='mb-4 mr-2'
          >
            <div className='bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-100 relative'>
              <button
                onClick={() => setShowChatView(false)}
                className='absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors'
              >
                <X className='w-4 h-4' />
              </button>

              <div className='flex items-center space-x-3 mb-3'>
                <div className='w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center'>
                  <MessageCircle className='w-5 h-5 text-white' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 text-sm'>Need Help?</h4>
                  <p className='text-xs text-gray-500'>We're here to assist you</p>
                </div>
              </div>

              <p className='text-sm text-gray-600 mb-4'>
                Chat with us for instant support and get your questions answered quickly.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className='w-full bg-[#25D366] text-white font-medium py-2 px-4 rounded-xl hover:bg-[#20c157] transition-colors duration-300 flex items-center justify-center space-x-2'
              >
                <MessageCircle className='w-4 h-4' />
                <span>Start Chat</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='flex items-center'>
        {/* Always visible "Need help? Chat with us" text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='mr-2 sm:mr-4 bg-white rounded-lg shadow-xl px-3 sm:px-4 py-2 whitespace-nowrap border border-gray-100 relative hidden sm:block'
        >
          <div className='text-sm font-medium text-gray-800'>Need help?</div>
          <div className='text-xs text-gray-500'>Chat with us</div>

          {/* Arrow pointing to the button */}
          <div className='absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent'></div>
        </motion.div>

        {/* WhatsApp button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className='w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center cursor-pointer shadow-2xl hover:shadow-green-500/25 transition-all duration-300 relative'
        >
          <MessageCircle className='w-7 h-7 text-white' />

          {/* Pulse animation */}
          <div className='absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75'></div>
        </motion.div>
      </div>
    </div>
  )
}

export default FloatingWhatsApp
