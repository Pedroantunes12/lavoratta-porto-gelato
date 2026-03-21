import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import aboutShop from "@/assets/about-shop.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import garden from "@/assets/garden.jpg";
import logo from "@/assets/logo.png";
import heroGelato from "@/assets/hero-gelato.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero image={garden} title="Sobre" />

      {/* O Nosso Local */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">O Nosso</h2>
              <h2 className="font-display text-4xl font-bold mb-6">Local</h2>
            </div>
            <div>
              <p className="text-primary font-display italic text-xl font-semibold mb-4">
                Localizado no coração do Porto.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na rua mais emblemática da cidade invicta, poderá encontrar na Lavoratta um oásis para toda a correria e agitação da cidade, desenhado pelo estúdio de arquitetura de André Dias.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A melhor matéria-prima, os melhores ingredientes e a mestria na gelataria, fazem do gelado Lavoratta o melhor que vai provar e desejar.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img src={aboutInterior} alt="Interior" className="rounded-lg shadow-lg w-full h-72 object-cover" />
            <img src={aboutShop} alt="Gelato display" className="rounded-lg shadow-lg w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Inspire-se */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-5xl md:text-6xl italic font-bold text-primary-foreground mb-12">
            Inspire-se
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">O Nosso</h3>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Conceito</h3>
            </div>
            <div>
              <p className="font-display italic text-primary-foreground/90 text-xl leading-relaxed mb-6">
                Sabemos que o amor é a linguagem universal, mas nada diz amor como Gelado Artesanal. 
                Gelado é alegria, gelado é união de sabores e pessoas, gelado é vida!
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                Inspirada na palavra de origem italiana Lavorare que significa trabalhar, a Gelataria Lavoratta pretende remeter à arte no fabrico artesanal do gelado.
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                A melhor matéria-prima, os melhores ingredientes e a mestria na gelataria, fazem do gelado Lavoratta o melhor que vai provar e desejar. Por muitos momentos de prazer entre amigos, em família ou só para si!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="aspect-square overflow-hidden">
            <img src={aboutInterior} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden bg-primary flex items-center justify-center p-8">
            <div className="text-center">
              <img src={logo} alt="Lavoratta" className="w-32 mx-auto mb-3" />
              <p className="text-primary-foreground text-xs tracking-[0.2em] uppercase">A Arte de Combinar Sabores</p>
            </div>
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={garden} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={heroGelato} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
