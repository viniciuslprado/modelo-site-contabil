import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const notifications = [
  { name: "Maria S.", city: "São Paulo", action: "solicitou um orçamento" },
  { name: "João P.", city: "Campinas", action: "abriu uma empresa" },
  { name: "Ana C.", city: "Santos", action: "migrou sua contabilidade" },
  { name: "Carlos R.", city: "Guarulhos", action: "solicitou consultoria" },
  { name: "Fernanda L.", city: "Osasco", action: "abriu um MEI" },
  { name: "Roberto M.", city: "ABC", action: "fechou parceria" },
];

const SocialProof = () => {
  const [currentNotification, setCurrentNotification] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(randomIndex);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // First notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then every 15-25 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const notification = currentNotification !== null ? notifications[currentNotification] : null;

  return (
    <AnimatePresence>
      {isVisible && notification && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-40 bg-card border border-border rounded-lg shadow-elevated p-4 max-w-xs"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground">
                <span className="font-semibold">{notification.name}</span> de{" "}
                <span className="font-semibold">{notification.city}</span>{" "}
                {notification.action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Há {Math.floor(Math.random() * 5) + 1} minutos
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProof;
