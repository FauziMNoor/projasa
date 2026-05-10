import { useState, useRef, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || '/api';

// Simple message formatter for chat messages
function formatMessage(text) {
  if (!text) return null;
  
  const lines = text.split('\n');
  const elements = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Empty line = spacing
    if (line.trim() === '') {
      elements.push(<div key={`br-${i}`} className="h-1.5" />);
      continue;
    }
    
    // Normal text line
    elements.push(
      <p key={`p-${i}`} className="leading-relaxed">
        {formatInline(line)}
      </p>
    );
  }
  
  return elements;
}

// Handle inline: clean asterisks and make WhatsApp number clickable
function formatInline(text) {
  if (!text) return text;
  
  // Clean stray asterisks
  let cleaned = text.replace(/\*{1,2}([^*]+)\*{1,2}/g, (match, inner) => inner);
  
  // Remove any wa.me links and replace with just the number
  cleaned = cleaned.replace(/wa\.me\/628125532111/g, '0812-5532-111');
  cleaned = cleaned.replace(/https?:\/\/wa\.me\/\d+/g, '0812-5532-111');
  
  // Make WhatsApp number clickable
  const waMatch = cleaned.match(/(0812[-\s]?5532[-\s]?111)/);
  if (waMatch) {
    const idx = cleaned.indexOf(waMatch[0]);
    const before = cleaned.substring(0, idx);
    const after = cleaned.substring(idx + waMatch[0].length);
    return (
      <>
        {before}
        <a 
          href="https://wa.me/628125532111" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-green-600 underline font-medium"
        >
          0812-5532-111 💬
        </a>
        {after}
      </>
    );
  }
  
  return cleaned;
}

const INITIAL_MESSAGE = {
  id: 1,
  type: 'bot',
  text: "Halo! 👋 Saya Projas AI Asisten. Selamat datang di Projasa! Ada yang bisa saya bantu hari ini mengenai legalitas dan perizinan bisnis? 😊"
};

const TYPING_MESSAGES = [
  "Tanya yuk, saya jawab secepat kilat! ⚡",
  "Izin usaha ribet? Saya bantu urus semuanya 📋",
  "Konsultasi gratis, langsung dijawab! 💬",
  "Mau buka usaha? Tanya dulu izinnya di sini 🏢",
  "Bingung soal legalitas? Ketik aja, saya siap bantu ✅",
];

export default function ProjasAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const messagesEndRef = useRef(null);

  // Show popup bubble after 5 seconds
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

  // Typing effect for bubble messages
  useEffect(() => {
    if (!showBubble || isOpen) return;

    const currentMessage = TYPING_MESSAGES[messageIndex];
    let charIndex = 0;
    setTypingText('');

    const typingInterval = setInterval(() => {
      if (charIndex <= currentMessage.length) {
        setTypingText(currentMessage.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait 3 seconds then move to next message
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % TYPING_MESSAGES.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [showBubble, isOpen, messageIndex]);

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
      // Build conversation history (last 10 messages for context)
      const history = messages
        .filter(m => m.id !== 1) // exclude initial greeting
        .slice(-10)
        .map(m => ({
          role: m.type === 'user' ? 'user' : 'assistant',
          content: m.text
        }));

      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input.trim(),
          history
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
      {/* Backdrop blur on mobile when chat is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Window */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        } sm:bottom-40 sm:right-6 sm:w-[360px] sm:h-[480px] sm:max-h-[calc(100vh-200px)]
          bottom-20 right-3 left-3 sm:left-auto h-[70vh] max-h-[70vh]
          sm:max-w-[360px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/image/robot.png" alt="Projas AI" className="w-8 h-8 object-contain" />
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
                {msg.type === 'bot' ? formatMessage(msg.text) : msg.text}
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
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
        <p className="text-center text-[10px] text-gray-400/70 py-1">Projas is AI and can make mistakes</p>
      </div>

      {/* Floating Robot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 bottom-24 right-4 sm:right-6 transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? 'Tutup chat' : 'Buka chat'}
      >
        <img 
          src="/image/robot.png" 
          alt="Chat dengan Projas AI" 
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain hover:scale-110 transition-transform drop-shadow-lg"
        />
      </button>

      {/* Typing Bubble - appears after 5 seconds with typing effect */}
      {showBubble && !isOpen && (
        <div className="fixed z-50 bottom-[7.5rem] right-3 sm:bottom-[9.5rem] sm:right-[5rem] animate-fade-in">
          <div className="relative bg-white border border-blue-200 rounded-lg shadow-md px-2 py-1.5 max-w-[140px] sm:max-w-[200px]">
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center text-gray-700 text-[9px] font-bold transition-colors"
            >
              ✕
            </button>
            <p className="text-[11px] sm:text-sm text-gray-800 font-medium leading-tight min-h-[1.2rem]">
              {typingText}
              <span className="inline-block w-0.5 h-3 bg-blue-600 ml-0.5 animate-pulse align-middle"></span>
            </p>
            {/* Arrow pointing down to robot button */}
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white border-b border-r border-blue-200 transform rotate-45"></div>
          </div>
        </div>
      )}
    </>
  );
}
