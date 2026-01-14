import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubscribed(true);
      setEmail("");
      setName("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
            Receba nossas{" "}
            <span className="text-gradient-gold">novidades</span>
          </h2>
          <p className="text-secondary-foreground/70 mt-4 max-w-xl mx-auto">
            Cadastre-se para receber informações sobre legislação, dicas
            fiscais e atualizações importantes para sua empresa.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-primary/10 rounded-xl"
            >
              <p className="text-primary font-semibold">
                ✓ Cadastro realizado com sucesso!
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                className="flex-1 px-5 py-4 rounded-lg bg-charcoal-light border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email"
                required
                className="flex-1 px-5 py-4 rounded-lg bg-charcoal-light border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-gold whitespace-nowrap"
              >
                Cadastrar
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          <p className="text-xs text-secondary-foreground/50 mt-4">
            Respeitamos sua privacidade. Seus dados serão tratados conforme a
            LGPD.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
