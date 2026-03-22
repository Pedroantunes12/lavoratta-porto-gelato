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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top bar — logo left, hamburger right */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-10 py-5 pointer-events-none">
        {/* Logo */}
        {location.pathname !== "/" && (
          <Link to="/" className="pointer-events-auto">
            <img src={logoWhite} alt="Lavoratta" className="h-10 md:h-12" />
          </Link>
        )}
        {location.pathname === "/" && <div />}

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto relative w-12 h-12 flex items-center justify-center group"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-end gap-[6px]">
            <motion.span
              className="block h-[2px] bg-primary-foreground origin-right"
              animate={isOpen
                ? { width: 24, rotate: -45, y: 4, x: -2 }
                : { width: 28, rotate: 0, y: 0, x: 0 }
              }
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.span
              className="block h-[2px] bg-primary-foreground"
              animate={isOpen
                ? { width: 0, opacity: 0 }
                : { width: 20, opacity: 1 }
              }
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.span
              className="block h-[2px] bg-primary-foreground origin-right"
              animate={isOpen
                ? { width: 24, rotate: 45, y: -4, x: -2 }
                : { width: 24, rotate: 0, y: 0, x: 0 }
              }
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>
        </button>
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay with curtain effect */}
            <motion.div
              className="fixed inset-0 z-[55] bg-foreground"
              initial={{ clipPath: "circle(0% at calc(100% - 42px) 32px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 42px) 32px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 42px) 32px)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Menu content */}
            <motion.div
              className="fixed inset-0 z-[56] flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {/* Navigation */}
              <div className="flex-1 flex items-center">
                <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Nav links */}
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item, i) => {
                      const isActive = location.pathname === item.path;
                      const isHovered = hoveredIndex === i;
                      const someHovered = hoveredIndex !== null;

                      return (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + i * 0.08,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                        >
                          <Link
                            to={item.path}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative flex items-center gap-5 py-1 md:py-2"
                          >
                            {/* Number */}
                            <span
                              className="font-body text-xs tracking-widest transition-all duration-500"
                              style={{
                                color: isActive || isHovered
                                  ? "hsl(var(--primary))"
                                  : "hsl(var(--primary-foreground) / 0.25)",
                              }}
                            >
                              0{i + 1}
                            </span>

                            {/* Divider line */}
                            <motion.div
                              className="h-[1px] bg-primary"
                              animate={{
                                width: isActive || isHovered ? 40 : 16,
                                opacity: isActive || isHovered ? 1 : 0.3,
                              }}
                              transition={{ duration: 0.4 }}
                            />

                            {/* Label */}
                            <span
                              className="font-display text-4xl md:text-6xl lg:text-7xl italic font-bold transition-all duration-500"
                              style={{
                                color: someHovered
                                  ? isHovered
                                    ? "hsl(var(--primary-foreground))"
                                    : "hsl(var(--primary-foreground) / 0.15)"
                                  : isActive
                                    ? "hsl(var(--primary-foreground))"
                                    : "hsl(var(--primary-foreground) / 0.6)",
                                transform: isHovered ? "translateX(8px)" : "translateX(0)",
                              }}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Right side info */}
                  <motion.div
                    className="hidden md:flex flex-col items-end gap-8 text-primary-foreground/40"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <img src={logoWhite} alt="Lavoratta" className="h-20 opacity-15" />

                    <div className="text-right font-body text-xs tracking-widest uppercase leading-relaxed">
                      <p>Gelataria & Creparia</p>
                      <p className="mt-1">Espinho, Portugal</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                        <Facebook size={16} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                        <Instagram size={16} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom bar */}
              <motion.div
                className="px-6 md:px-10 pb-8 flex items-center justify-between text-primary-foreground/25 font-body text-[11px] tracking-[0.2em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <span>© {new Date().getFullYear()} Lavoratta</span>
                <div className="flex items-center gap-4 md:hidden">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    <Facebook size={14} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    <Instagram size={14} />
                  </a>
                </div>
                <span className="hidden md:block">Sabor & Tradição</span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
