import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Insight {
  title: string;
  summary: string;
  sourceName: string;
  url: string;
  category: string;
}

const DynamicInsights: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  interface GroundingSource {
    title?: string;
    uri?: string;
  }
  const [groundingSources, setGroundingSources] = useState<GroundingSource[]>([]);

  const fetchInsights = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Acesse e pesquise agora no portal da Receita Federal do Brasil (gov.br/receitafederal) e no Diário Oficial da União (in.gov.br) as 3 atualizações legislativas, instruções normativas ou notícias tributárias mais recentes publicadas nas últimas 48 horas. Extraia as informações e formate-as obrigatoriamente como um array JSON válido com as seguintes chaves: title, summary, sourceName, url, category.`;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      });
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const sources = chunks.map((chunk: unknown) => {
          const c = chunk as { web?: { title?: string; uri?: string } };
          return {
            title: c.web?.title,
            uri: c.web?.uri,
          };
        }).filter((s: GroundingSource) => s.uri);
        setGroundingSources(sources);
      }
      const text = response.text || '';
      try {
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setInsights(parsed);
            return;
          }
        }
      } catch (e) {
        // erro propositalmente ignorado
      }
      setInsights([]);
    } catch {
      setInsights([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-navy-dark transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif mb-8">Insights Tributários Recentes</h2>
        {loading ? (
          <div className="text-gold">Carregando...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, i) => (
              <a key={i} href={insight.url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-sm hover:border-gold/50 transition-all duration-500">
                <h3 className="text-lg font-bold text-navy-dark dark:text-white mb-2">{insight.title}</h3>
                <p className="text-sm text-slate-500 mb-2">{insight.summary}</p>
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest">{insight.category}</span>
                <div className="mt-2 text-xs text-slate-400">Fonte: {insight.sourceName}</div>
              </a>
            ))}
          </div>
        )}
        {groundingSources.length > 0 && (
          <div className="mt-8">
            <h4 className="text-xs font-bold text-slate-400 mb-2">Fontes utilizadas:</h4>
            <ul className="list-disc ml-6 text-xs text-slate-500">
              {groundingSources.map((src, i) => (
                <li key={i}><a href={src.uri} target="_blank" rel="noopener noreferrer">{src.title || src.uri}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicInsights;
