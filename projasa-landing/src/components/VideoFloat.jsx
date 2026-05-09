import { useState, useRef } from 'react'

export default function VideoFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef(null)

  const handleToggle = () => {
    if (isOpen) {
      // Closing - pause video
      if (videoRef.current) {
        videoRef.current.pause()
      }
      setIsOpen(false)
    } else {
      setIsOpen(true)
      // Auto-play video when opened
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
        }
      }, 300)
    }
  }

  const handleVideoClick = (e) => {
    // Prevent toggle when interacting with video controls
    e.stopPropagation()
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Expanded Video Player */}
      <div
        className={`transition-all duration-500 ease-in-out origin-bottom-left ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-0 pointer-events-none'
        }`}
      >
        <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden w-[280px] sm:w-[320px]">
          {/* Close button */}
          <button
            onClick={handleToggle}
            className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video */}
          <video
            ref={videoRef}
            src="/video_iklan/ingin_bangun_bisnis.mp4"
            className="w-full aspect-[9/16] object-cover"
            controls
            playsInline
            onClick={handleVideoClick}
          />
        </div>
      </div>

      {/* Bubble Button (visible when closed) */}
      <div
        className={`transition-all duration-500 ${
          isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <button
          onClick={handleToggle}
          className="relative group cursor-pointer"
          aria-label="Tonton video iklan"
        >
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>

          {/* Bubble with video thumbnail */}
          <div className="relative w-40 h-40 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300 overflow-hidden border-3 border-white">
            {/* Video preview (muted, autoplay loop) */}
            <video
              src="/video_iklan/ingin_bangun_bisnis.mp4"
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            />

            {/* Play icon overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white drop-shadow-lg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
