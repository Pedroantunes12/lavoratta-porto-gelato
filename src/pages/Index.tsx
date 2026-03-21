import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import heroImg from "@/assets/hero-gelato.jpg";
import aboutShop from "@/assets/about-shop.jpg";
import logo from "@/assets/logo.png";
import redVelvet from "@/assets/red-velvet.jpg";
import boloLava from "@/assets/bolo-lava.jpg";
import ribsBurger from "@/assets/ribs-burger.jpg";
import gelados from "@/assets/gelados.jpg";
import saboresHero from "@/assets/sabores-hero.jpg";

const creations = [
  { name: "Pastel Nata Lavoratta", desc: "A nossa versão artesanal do pastel de nata com o gelado cremoso mais.", img: redVelvet },
  { name: "Bolo Lava", desc: "Delicioso bolo quente de chocolate.", img: boloLava },
  { name: "Ribs Burguer", desc: "A nossa fusão portuguesa, com um toque contemporâneo.", img: ribsBurger },
  { name: "Gelados", desc: "Centenas de sabores artesanais.", img: gelados },
];

const reviews = [
  {
    text: "Ótimo café com delicioso bolo de veludo vermelho, pastel de nata e croissants. Definitivamente entre o sentir-se no assento ao ar livre na santa na rua. Ótima vibração!",
    author: "Teresa Azevedo",
    rating: 5,
  },
  {
    text: "Uma gelataria, que é mais do que uma gelataria. Os gelados são muito bons, mas fiquei fã dos bolos e doces que tentam e também do café com Nutella que tem quando o pedir. O lugar é muito agradável e a zona exterior e esplanada para relaxar e passar algum tempo.",
    author: "Rui Sousa",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Lavoratta Gelato" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <Navbar />
        <div className="relative z-10 text-center">
          <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4">A Fábrica de Gelados Artesanais</p>
          <img src={logo} alt="Lavoratta" className="w-64 md:w-80 mx-auto mb-4" />
          <p className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase">A Arte de Combinar Sabores</p>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-4">Sobre Nós</h2>
              <p className="text-primary font-display italic text-lg mb-4">Localizado no coração do Porto.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na rua mais emblemática da cidade invicta, poderá encontrar na Lavoratta um oásis para toda a correria e agitação da cidade, desenhado pelo estúdio de arquitetura de André Dias.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tenha no seu espaço de inspiração italiana, a como na sua esplanada interior com um surpreendente jardim vertical.
              </p>
              <Link to="/sobre" className="text-primary font-body text-sm tracking-wider hover:underline">
                Leia Mais
              </Link>
            </div>
            <div className="relative">
              <img src={aboutShop} alt="Lavoratta Interior" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Criações */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12">Criações</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {creations.map((item) => (
              <div key={item.name} className="text-center group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 shadow-lg">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-10 gap-3">
            <Link to="/menu" className="text-muted-foreground text-sm italic hover:text-primary transition-colors">
              Ver Menu Completo
            </Link>
            <Link to="/menu" className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Comentários */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto">
            <h2 className="font-display text-5xl md:text-6xl italic font-bold text-primary-foreground mb-4">Comentários</h2>
            <p className="text-primary-foreground/70 text-sm mb-10">
              A nossa avaliação média dos clientes é 4.5/5
            </p>

            <div className="space-y-8">
              {reviews.map((review, i) => (
                <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">{review.text}</p>
                  <p className="text-primary-foreground/60 text-xs">{review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Os Nossos Sabores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={saboresHero} alt="Os Nossos Sabores" className="rounded-lg shadow-xl w-full max-w-md mx-auto" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-heading mb-4">Os Nossos Sabores</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Feitos de forma artesanal e com matéria-prima de confiança.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Da deliciosa baunilha de bourbon ao refrescante gelado de limão natural, procuramos na Lavoratta maravilhar, redescobrir e reinventar dos nossos sabores. Provem-nos!
              </p>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
