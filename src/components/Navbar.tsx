import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Menu", path: "/menu" },
  { label: "Reservas", path: "/reservas" },
  { label: "Contacto", path: "/contacto" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Vertical MENU trigger — fixed left side */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-1 px-3 py-6 cursor-pointer group"
        aria-label="Toggle menu"
        initial={false}
      >
        {/* Decorative line */}
        <motion.div
          className="w-[2px] h-8 bg-primary-foreground/60 mb-2"
          animate={{ height: isOpen ? 0 : 32 }}
          transition={{ duration: 0.3 }}
        />

        {/* Hamburger icon morphing to X */}
        <div className="relative w-6 h-6 flex flex-col items-center justify-center gap-[5px] mb-3">
          <motion.span
            className="block w-5 h-[2px] bg-primary-foreground origin-center"
            animate={isOpen 
              ? { rotate: 45, y: 3.5 } 
              : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-5 h-[2px] bg-primary-foreground origin-center"
            animate={isOpen 
              ? { opacity: 0 } 
              : { opacity: 1 }
            }
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-[2px] bg-primary-foreground origin-center"
            animate={isOpen 
              ? { rotate: -45, y: -3.5 } 
              : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Vertical "MENU" text */}
        {"MENU".split("").map((letter, i) => (
          <motion.span
            key={i}
            className="font-display text-sm font-bold text-primary-foreground tracking-widest select-none"
            animate={isOpen 
              ? { opacity: 0, x: -10 } 
              : { opacity: 1, x: 0 }
            }
            transition={{ duration: 0.3, delay: isOpen ? 0 : i * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}

        {/* Decorative line */}
        <motion.div
          className="w-[2px] h-8 bg-primary-foreground/60 mt-2"
          animate={{ height: isOpen ? 0 : 32 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Logo top-right */}
      {location.pathname !== "/" && (
        <Link to="/" className="fixed top-5 right-6 z-[55]">
          <img src={logoWhite} alt="Lavoratta" className="h-12" />
        </Link>
      )}

      {/* Social icons top-right (below logo) */}
      <div className="fixed top-5 right-6 z-[55] hidden md:flex items-center gap-4">
        {location.pathname !== "/" && <div className="w-12" />}
        <div className="flex items-center gap-3 text-primary-foreground/70">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
            <Facebook size={16} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
            <Instagram size={16} />
          </a>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[50] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-foreground/97"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Left decorative panel */}
            <motion.div
              className="relative w-16 md:w-24 flex-shrink-0 flex flex-col items-center justify-center"
              initial={{ x: -80 }}
              animate={{ x: 0 }}
              exit={{ x: -80 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-[1px] h-full bg-primary-foreground/10" />
            </motion.div>

            {/* Menu content */}
            <div className="relative flex-1 flex flex-col md:flex-row items-center justify-center">
              {/* Navigation links */}
              <nav className="flex flex-col gap-2 md:gap-3">
                {navItems.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  const isHovered = hoveredItem === item.path;

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                    >
                      <Link
                        to={item.path}
                        onMouseEnter={() => setHoveredItem(item.path)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="group relative flex items-center gap-4 py-2"
                      >
                        {/* Decorative dot/line */}
                        <motion.div
                          className="w-8 h-[2px] bg-primary rounded-full origin-left"
                          animate={{
                            scaleX: isActive || isHovered ? 1 : 0.4,
                            opacity: isActive || isHovered ? 1 : 0.3,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Label */}
                        <motion.span
                          className={`font-display text-4xl md:text-6xl lg:text-7xl italic tracking-wide transition-colors duration-300 ${
                            isActive
                              ? "text-primary-foreground"
                              : "text-primary-foreground/40"
                          }`}
                          animate={{
                            color: isHovered ? "hsl(var(--primary-foreground))" : undefined,
                            x: isHovered ? 8 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.label}
                        </motion.span>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Right side - decorative elements */}
              <motion.div
                className="hidden md:flex flex-col items-center justify-center ml-20 lg:ml-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img src={logoWhite} alt="Lavoratta" className="h-24 lg:h-32 opacity-20" />
              </motion.div>

              {/* Bottom info */}
              <motion.div
                className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8 text-primary-foreground/40 text-xs tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="font-body">Gelataria & Creparia</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
                <span className="font-body">Espinho, Portugal</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/30 hidden sm:block" />
                <div className="hidden sm:flex items-center gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    <Facebook size={14} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    <Instagram size={14} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right decorative panel */}
            <motion.div
              className="relative w-16 md:w-24 flex-shrink-0 flex flex-col items-center justify-center"
              initial={{ x: 80 }}
              animate={{ x: 0 }}
              exit={{ x: 80 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-[1px] h-full bg-primary-foreground/10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
