import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Empresa", href: "/empresa" },
  { name: "Serviços", href: "/servicos" },
  { name: "Clientes", href: "/#clientes" },
  { name: "Dúvidas", href: "/duvidas" },
  { name: "Informativos", href: "/informativos" },
  { name: "Contato", href: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showClientAreaMsg, setShowClientAreaMsg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom text-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">
                SC
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-display text-xl font-semibold">
                Site <span className="text-gold">contábil</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-gold transition-colors duration-200 text-sm font-medium gold-underline"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:shadow-gold"
              onClick={() => setShowClientAreaMsg(true)}
            >
              Área do Cliente
              <ExternalLink size={16} />
            </button>
          </div>

          {/* Card/modal para mensagem */}
          {showClientAreaMsg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
                <p className="mb-6 text-center">Botão para caso tenha app próprio ou deseja desenvolvimento do módulo</p>
                <button
                  className="bg-primary text-white px-4 py-2 rounded font-semibold"
                  onClick={() => setShowClientAreaMsg(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-secondary-foreground/10 text-white"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.href.startsWith("http")) {
                      window.open(link.href, "_blank");
                    } else {
                      window.location.href = link.href;
                    }
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-white hover:text-gold transition-colors py-2 text-lg"
                >
                  {link.name}
                </motion.a>
              ))}
              <button
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded font-semibold mt-4"
                onClick={() => setShowClientAreaMsg(true)}
              >
                Área do Cliente
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
