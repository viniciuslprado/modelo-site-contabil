import { motion } from "framer-motion";
import {
  Table2,
  Calendar,
  FileText,
  ClipboardList,
  FileCheck,
  Link2,
} from "lucide-react";

const accessCards = [
  {
    icon: Table2,
    title: "Tabelas Práticas",
    description: "Índices e tabelas atualizadas para consulta rápida",
  },
  {
    icon: Calendar,
    title: "Agenda de Obrigações",
    description: "Calendário fiscal com todas as datas importantes",
  },
  {
    icon: FileText,
    title: "Modelos de Documentos",
    description: "Templates prontos para uso empresarial",
  },
  {
    icon: ClipboardList,
    title: "Formulários Diversos",
    description: "Formulários para procedimentos contábeis",
  },
  {
    icon: FileCheck,
    title: "Certidões Negativas",
    description: "Acesso rápido às certidões de débitos",
  },
  {
    icon: Link2,
    title: "Links Úteis",
    description: "Portais governamentais e órgãos públicos",
  },
];

const QuickAccess = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary font-bold text-3xl mb-2">Acesso Rápido</h2>
          <p className="section-subtitle mx-auto text-secondary-foreground/90 text-lg font-medium">
            Ferramentas e recursos para facilitar o dia a dia da sua empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a
                href="#"
                className="group block rounded-xl p-6 shadow-md border border-primary/30 bg-secondary text-white transition-colors hover:bg-amber-50 hover:text-black hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <card.icon className="w-6 h-6 text-gold group-hover:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-black transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white/80 group-hover:text-black text-sm mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
