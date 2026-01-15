import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, TrendingUp } from "lucide-react";

const features = [
  "Serviço de qualidade",
  "Equipe experiente",
  "Atendimento personalizado",
  "Tecnologia moderna",
  "Comunicação eficiente",
  "Suporte dedicado",
];

const About = () => {
  return (
    <section id="empresa" className="py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="section-title mt-2">
              Sua empresa parceira em{" "}
              <span className="text-gradient-gold">soluções</span>
            </h2>
            <p className="text-gray-200 text-lg mt-6 leading-relaxed">
              Somos uma empresa dedicada a fornecer serviços de alta qualidade para
              nossos clientes. Nosso objetivo é impulsionar o crescimento e o
              sucesso de cada parceiro atendido.
            </p>
            <p className="text-gray-200 text-lg mt-4 leading-relaxed">
              Contamos com uma equipe experiente e preparada para atender às
              necessidades específicas de cada projeto, sempre com ética,
              inovação e compromisso com resultados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Texto centralizado de experiência */}
          <div className="w-full flex justify-center mb-4">
            <span className="text-2xl md:text-3xl font-bold text-primary text-center">Mais de 25 anos de experiência</span>
          </div>
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <div className="bg-secondary text-secondary-foreground p-8 rounded-lg">
              <Users className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-display font-bold text-primary">
                100+
              </div>
              <p className="mt-2 text-secondary-foreground/70">
                Clientes atendidos
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <Target className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-display font-bold text-primary">
                10+
              </div>
              <p className="mt-2 text-muted-foreground">
                Anos de experiência
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-display font-bold text-primary">
                95%
              </div>
              <p className="mt-2 text-muted-foreground">
                Satisfação dos clientes
              </p>
            </div>

            <div className="bg-secondary text-secondary-foreground p-8 rounded-lg">
              <Users className="w-10 h-10 text-primary mb-4" />
              <div className="text-4xl font-display font-bold text-primary">
                #1
              </div>
              <p className="mt-2 text-secondary-foreground/70">
                Compromisso com qualidade
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
