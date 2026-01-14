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
          className="bg-navy-dark text-white p-4 rounded-full shadow-2xl border border-gold/30 hover:scale-110 transition-transform group relative"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-ping"></div>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-[scale_0.2s_ease-out]">
          <div className="bg-navy-dark p-4 flex justify-between items-center border-b border-gold/20">
            <span className="text-white font-bold">Prado AI</span>
            <button onClick={() => setIsOpen(false)} className="text-gold hover:text-white">&times;</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm p-2 rounded ${msg.role === 'ai' ? 'bg-gold/10 text-navy-dark' : 'bg-navy-dark/10 text-navy-dark'}`}>{msg.text}</div>
            ))}
            {loading && <div className="text-xs text-slate-400">Pensando...</div>}
          </div>
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <form onSubmit={e => {e.preventDefault(); handleSend();}} className="flex gap-2">
              <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                className="flex-1 p-2 rounded border border-slate-200 bg-white text-navy-dark" 
                placeholder="Digite sua dúvida contábil..." 
                disabled={loading}
              />
              <button type="submit" className="bg-gold text-white px-4 py-2 rounded disabled:opacity-50" disabled={loading || !input.trim()}>Enviar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
