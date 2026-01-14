import { motion } from "framer-motion";
import {
  Calculator,
  Users,
  FileSpreadsheet,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Área Contábil",
    description:
      "Escrituração contábil, balanços patrimoniais, demonstrações financeiras e relatórios gerenciais completos.",
    features: [
      "Escrituração contábil",
      "Balanço patrimonial",
      "DRE e DMPL",
      "Relatórios gerenciais",
    ],
  },
  {
    icon: Users,
    title: "Obrigações Trabalhistas",
    description:
      "Gestão completa de folha de pagamento, admissões, demissões e todas as obrigações trabalhistas.",
    features: [
      "Folha de pagamento",
      "Admissões e demissões",
      "eSocial",
      "FGTS e INSS",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Serviços Fiscais",
    description:
      "Apuração de impostos, planejamento tributário e cumprimento de todas as obrigações fiscais.",
    features: [
      "Apuração de impostos",
      "SPED Fiscal",
      "Planejamento tributário",
      "Obrigações acessórias",
    ],
  },
  {
    icon: Briefcase,
    title: "Assessoria Empresarial",
    description:
      "Consultoria estratégica para abertura de empresas, alterações contratuais e gestão empresarial.",
    features: [
      "Abertura de empresas",
      "Alterações contratuais",
      "Consultoria tributária",
      "Gestão empresarial",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 section-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="section-title mt-2">
            Soluções completas para{" "}
            <span className="text-gradient-gold">sua empresa</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-secondary-foreground/70">
            Oferecemos uma gama completa de serviços contábeis e empresariais
            para atender todas as necessidades do seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-charcoal-light/50 backdrop-blur-sm rounded-xl p-8 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-secondary-foreground">
                    {service.title}
                  </h3>
                  <p className="text-secondary-foreground/70 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-secondary-foreground/60 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-primary mt-6 font-medium group-hover:gap-3 transition-all"
                  >
                    Saiba mais
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
