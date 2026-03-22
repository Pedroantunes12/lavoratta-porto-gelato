import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-footer-white.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Lavoratta" className="w-32 h-32 rounded-lg object-cover" />
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Menu</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Início</Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sobre</Link>
              <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors text-sm">Menu</Link>
              <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contacto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contactos</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>22 117 6549</span>
              <span>info@lavoratta.com</span>
              <span>R. de Santa Catarina 357,</span>
              <span>4000-446 Porto</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          Copyright © 2024 Lavoratta | Powered by Lavoratta
        </div>
      </div>
    </footer>
  );
};

export default Footer;
