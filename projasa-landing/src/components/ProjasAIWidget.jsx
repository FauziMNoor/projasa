import { useState, useRef, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const INITIAL_MESSAGE = {
  id: 1,
  type: 'bot',
  text: "Halo! 👋 Saya Projas AI Asisten. Selamat datang di Projasa! Ada yang bisa saya bantu hari ini mengenai legalitas dan perizinan bisnis? 😊"
};

export default function ProjasAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);

  // Show popup bubble after 56 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowBubble(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Hide bubble when chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input.trim(),
          sessionId: sessionStorage.getItem('projas_session_id') || 
            (sessionStorage.setItem('projas_session_id', crypto.randomUUID()), sessionStorage.getItem('projas_session_id'))
        })
      });

      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: data.response || "Maaf, terjadi kesalahan. Silakan coba lagi."
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: "Maaf, saya sedang tidak bisa merespons. Silakan hubungi kami via WhatsApp: 0812-5532-111 👇"
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/628125532111', '_blank');
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        } bottom-24 right-6 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-180px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Projas AI Asisten</h3>
              <p className="text-xs text-blue-100">Online • Siap Membantu</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 px-4 py-2.5 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setInput('Apa harga untuk izin usaha mikro?')}
            className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 whitespace-nowrap transition-colors"
          >
            💰 Harga Izin Mikro
          </button>
          <button
            onClick={() => setInput('Layanan apa saja yang tersedia?')}
            className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 whitespace-nowrap transition-colors"
          >
            📋 Layanan
          </button>
          <button
            onClick={handleWhatsApp}
            className="text-xs px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full hover:bg-green-100 whitespace-nowrap transition-colors"
          >
            💬 Chat WhatsApp
          </button>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan Anda..."
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isLoading}
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label={isOpen ? 'Tutup chat' : 'Buka chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-2xl group-hover:scale-110 transition-transform">🤖</span>
        )}
      </button>

      {/* Popup Bubble - appears after 56 seconds */}
      {showBubble && !isOpen && (
        <div className="fixed z-50 bottom-[7.5rem] right-[5.5rem] animate-fade-in">
          <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 max-w-[220px]">
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs transition-colors"
            >
              ✕
            </button>
            <p className="text-sm text-gray-800 font-medium leading-snug">
              💬 Punya pertanyaan soal izin usaha? Tanya saya — jawaban instan dalam hitungan detik!
            </p>
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {!isOpen && !showBubble && (
        <div className="fixed z-40 bottom-[10.5rem] right-6 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat dengan Projas AI
        </div>
      )}
    </>
  );
}
