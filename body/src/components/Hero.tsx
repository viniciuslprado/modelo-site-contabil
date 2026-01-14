import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      {/* Conteúdo expandido */}
      <div className="relative z-10 pt-20 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 mx-auto"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-primary text-sm font-medium">
            Mais de 25 anos de experiência
          </span>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-6 text-center">
          A contabilidade da sua empresa de um jeito <span className="text-gradient-gold">simples e prático</span>
        </h1>
        <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10 text-center">
          Oferecemos soluções contábeis personalizadas que garantem segurança, economia tributária e tranquilidade para o seu negócio prosperar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-lg transition-all duration-300 hover:brightness-110 hover:shadow-gold">
            Seja nosso cliente
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border-2 border-primary/50 text-secondary-foreground px-8 py-4 rounded font-semibold text-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
            Fale com um contador
          </a>
        </div>
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-secondary-foreground/50">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">
                500+
              </div>
              <div className="text-sm">Empresas atendidas</div>
            </div>
            <div className="w-px h-12 bg-secondary-foreground/20 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">
                25+
              </div>
              <div className="text-sm">Anos de experiência</div>
            </div>
            <div className="w-px h-12 bg-secondary-foreground/20 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">
                98%
              </div>
              <div className="text-sm">Clientes satisfeitos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

};
export default Hero;
