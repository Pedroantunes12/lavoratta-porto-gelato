import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import garden from "@/assets/garden.jpg";
import gelatoFire from "@/assets/gelato-fire.jpg";
import pastelNata from "@/assets/pastel-nata.jpg";
import boloLava from "@/assets/bolo-lava.jpg";
import ribsBurger from "@/assets/ribs-burger.jpg";
import gelados from "@/assets/gelados.jpg";
import handGelato from "@/assets/hand-gelato.jpg";
import cakeBerries from "@/assets/cake-berries.jpg";

const creations = [
  { name: "Pastel Nata Lavoratta", desc: "A nossa criação, a base do pastel nata e o gelado pastel nata.", img: pastelNata },
  { name: "Bolo Lava", desc: "O nosso bolo lava de chocolate.", img: boloLava },
  { name: "Ribs Burguer", desc: "A nossa hambúrguer, com carne desfiada.", img: ribsBurger },
  { name: "Gelados", desc: "Os nossos sabores artesanais.", img: gelados },
];

const reviews = [
  {
    text: "Ótimo café com delicioso bolo veludo vermelho, pastel de nata e chocolates. Definitivamente entre e sente-se no assento ao ar livre na parte de trás. Ótima vibração!",
    author: "Sonia Achour",
    rating: 5,
  },
  {
    text: "Uma gelataria, que é mais do que uma gelataria. Os gelados são muito bons, mas fiquei fã dos bolos óptimos que tem e também do café com Nutella que tive oportunidade de provar. O local é muito agradável e a zona exterior é óptima para relaxar e passar algum tempo.",
    author: "Nuno Sousa",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero - Garden background like original */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={garden} alt="Lavoratta" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <Navbar />

        {/* Top quote */}
        <p className="absolute top-6 left-1/2 -translate-x-1/2 z-10 font-display italic text-primary-foreground/60 text-sm tracking-wide text-center">
          Life is like an ice cream, enjoy it before it melts.
        </p>

        <div className="relative z-10 text-center">
          <p className="text-primary-foreground/80 text-xs tracking-[0.35em] uppercase mb-2">
            A <span className="font-bold">Fábrica</span> de
          </p>
          <p className="text-primary-foreground/80 text-xs tracking-[0.35em] uppercase mb-8">
            Gelados Artesanais
          </p>
          <h1 className="font-display text-7xl md:text-9xl text-primary-foreground font-light tracking-wide mb-6" style={{ fontStyle: 'normal' }}>
            Lavoratta
          </h1>
          <p className="text-primary-foreground/70 text-xs tracking-[0.3em] uppercase">
            A Arte de Combinar Sabores
          </p>
        </div>
      </section>

      {/* Sobre Nós - Split layout with spheres */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative spheres */}
        <div className="sphere-yellow w-12 h-12 -top-2 left-[15%]" />
        <div className="sphere-white w-8 h-8 top-20 left-[5%]" />
        <div className="sphere-burgundy w-10 h-10 top-32 left-[25%]" />
        <div className="sphere-white w-6 h-6 bottom-20 left-[10%]" />
        <div className="sphere-burgundy w-5 h-5 bottom-10 right-[45%]" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left - Text on light gray bg */}
            <div className="bg-secondary p-12 md:p-16 flex flex-col justify-center">
              <h2 className="section-heading mb-4">Sobre Nós</h2>
              <p className="text-primary font-display italic text-lg font-semibold mb-6">
                Localizado no coração do Porto.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Na rua mais emblemática da cidade invicta, poderá encontrar na Lavoratta um oásis para toda a comoção e agitação da cidade, desenhado pelo estúdio de arquitetura de André Dias.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                Tanto no seu espaço de inspiração industrial, como na sua esplanada interior com um surpreendente Jardim Vertical.
              </p>
              <Link to="/sobre" className="text-primary font-body text-sm tracking-wider hover:underline inline-block">
                Leia Mais
              </Link>
            </div>

            {/* Right - Gelato image with fire background */}
            <div className="relative overflow-hidden min-h-[400px]">
              <img src={gelatoFire} alt="Gelato Lavoratta" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Criações - Landscape images with spheres */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative spheres */}
        <div className="sphere-yellow w-14 h-14 top-8 left-8" />
        <div className="sphere-burgundy w-10 h-10 top-[45%] right-4" />
        <div className="sphere-white w-8 h-8 bottom-24 left-12" />
        <div className="sphere-burgundy w-6 h-6 bottom-16 left-32" />

        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-16">Criações</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-6">
            {creations.map((item) => (
              <div key={item.name} className="group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Titles and descriptions below images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {creations.map((item) => (
              <div key={item.name + "-text"} className="text-center px-2 pt-4">
                <h3 className="font-display text-base md:text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end mt-14 gap-3">
            <Link to="/menu" className="text-primary font-display italic text-sm hover:underline">
              Ver Menu Completo
            </Link>
            <Link
              to="/menu"
              className="w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Comentários - Split layout with cake image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Left - Cake image */}
          <div className="relative overflow-hidden">
            <img src={cakeBerries} alt="Cake" className="w-full h-full object-cover" />
            {/* Gradient overlay blending into burgundy */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/40" />
          </div>

          {/* Right - Burgundy background with reviews */}
          <div className="bg-primary p-10 md:p-16 flex flex-col justify-center relative">
            {/* Big decorative quote marks */}
            <span className="absolute top-8 right-12 font-display text-[120px] text-primary-foreground/10 leading-none">
              &#8220;
            </span>

            <h2 className="font-display text-5xl md:text-6xl italic font-bold text-primary-foreground mb-3">
              Comentários
            </h2>
            <p className="text-primary-foreground/60 text-sm italic mb-10">
              A nossa avaliação média dos clientes é 4.5 / 5
            </p>

            <div className="space-y-8">
              {reviews.map((review, i) => (
                <div key={i} className="border-t border-primary-foreground/20 pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={12} className="fill-primary-foreground text-primary-foreground" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/85 text-sm leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">
                        {review.author.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <span className="text-primary-foreground/70 text-sm">{review.author}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-right">
              <span className="text-primary-foreground/50 text-xs underline cursor-pointer hover:text-primary-foreground transition-colors">
                Mais Comentários
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Os Nossos Sabores - with watermark */}
      <section className="relative py-20 overflow-hidden">
        {/* Watermark */}
        <div className="watermark-text">Lavoratta</div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Ice cream hand image */}
            <div className="relative">
              <img
                src={handGelato}
                alt="Os Nossos Sabores"
                className="rounded-lg w-full max-w-sm mx-auto"
              />
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="section-heading mb-8">
                Os Nossos<br />Sabores
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Feitos de forma artesanal e com matéria-prima de excelência.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Da deliciosa baunilha de bourbon ao refrescante gelado de limão natural, procuramos na Lavoratta, maravilhar todos com a intensidade dos nossos sabores. Prove-nos!
              </p>

              {/* Small decorative sphere */}
              <div className="sphere-yellow w-8 h-8 relative mt-8 left-1/2 -translate-x-1/2" style={{ position: 'relative' }} />
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
