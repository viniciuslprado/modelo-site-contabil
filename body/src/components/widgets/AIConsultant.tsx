import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'Olá! Sou o Prado AI, seu assistente virtual de inteligência contábil. Como posso auxiliar na estratégia financeira da sua empresa hoje?'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "Você é o Prado AI, Consultor Contábil Sênior da Prado Contabilidade. Responda de forma executiva, objetiva e técnica. Foque em eficiência tributária e compliance. Use 'nós' para se referir à empresa. Jamais sugira nada gratuito ou informal. Ao final, sugira agendar uma reunião de diagnóstico técnico com nossos sócios para análise de escopo.",
        }
      });

      setMessages(prev => [...prev, {role: 'ai', text: response.text || 'Ocorreu um erro na conexão técnica. Por favor, utilize nossos canais oficiais de contato.'}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'ai', text: 'Estamos processando altos volumes de dados técnicos. Para atendimento prioritário, contate nossa mesa executiva via WhatsApp.'}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-navy-dark dark:bg-gold text-white dark:text-navy-dark p-4 rounded-full shadow-2xl border border-gold/30 hover:scale-110 transition-transform group relative"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold dark:bg-white rounded-full animate-ping"></div>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white dark:bg-navy-dark w-80 md:w-96 h-[500px] rounded-xl shadow-2xl flex flex-col border border-slate-200 dark:border-white/10 overflow-hidden animate-[scale_0.2s_ease-out]">
          <div className="bg-navy-dark p-4 flex justify-between items-center border-b border-gold/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>
              <div>
                <p className="text-white text-sm font-bold">Prado AI</p>
                <p className="text-gold text-[10px] uppercase tracking-widest">Inteligência Contábil</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-black/20">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${m.role === 'user' ? 'bg-gold text-navy-dark rounded-tr-none' : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-tl-none shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/5 p-3 rounded-lg shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-navy-dark border-t border-slate-100 dark:border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sua consulta técnica..." 
              className="flex-1 text-sm bg-slate-100 dark:bg-white/5 border-none rounded-full px-4 py-2 outline-none focus:ring-1 focus:ring-gold text-navy-dark dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="bg-navy-dark dark:bg-gold text-gold dark:text-navy-dark p-2 rounded-full hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
