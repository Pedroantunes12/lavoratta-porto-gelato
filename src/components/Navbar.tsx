import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const showLogo = location.pathname !== "/";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hidden md:block font-body text-sm tracking-wider uppercase transition-opacity hover:opacity-80 ${
                location.pathname === item.path
                  ? "text-primary-foreground font-bold"
                  : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4 text-primary-foreground/80">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Instagram size={18} />
            </a>
          </div>
          {showLogo && (
            <img src={logoWhite} alt="Lavoratta" className="h-12 ml-4" />
          )}
        </div>

        <button
          className="md:hidden text-primary-foreground z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-foreground/95 z-40 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl text-primary-foreground tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
