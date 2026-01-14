import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center px-6 py-8 rounded-xl shadow-elevated border border-border">
        <h1 className="mb-4 text-5xl md:text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-lg md:text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-block mt-2 px-6 py-3 btn-gold text-lg font-semibold">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
