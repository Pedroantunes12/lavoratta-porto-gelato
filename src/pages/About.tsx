import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import aboutGardenWall from "@/assets/about-garden-wall.png";
import logo from "@/assets/logo.png";
import logoFooter from "@/assets/logo-footer.jpg";
import galleryCorridor from "@/assets/gallery-corridor.jpg";
import galleryGarden from "@/assets/gallery-garden.webp";
import galleryConeGreen from "@/assets/gallery-cone-green.webp";
import galleryGelatoDisplay from "@/assets/gallery-gelato-display.png";
import galleryFirepitClose from "@/assets/gallery-firepit-close.jpg";
import galleryChocoCone from "@/assets/gallery-choco-cone.jpg";
import galleryFirepitPeople from "@/assets/gallery-firepit-people.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero image={aboutGardenWall} title="Sobre" />

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
            <img src={aboutCorridor} alt="Interior Lavoratta" className="rounded-lg shadow-lg w-full h-72 object-cover" />
            <img src={shopDisplay} alt="Montra de gelados" className="rounded-lg shadow-lg w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Inspire-se */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-5xl md:text-6xl italic font-bold text-primary-foreground mb-12">Inspire-se</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">O Nosso</h3>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Conceito</h3>
            </div>
            <div>
              <p className="font-display italic text-primary-foreground/90 text-xl leading-relaxed mb-6">
                Sabemos que o amor é a linguagem universal, mas nada diz amor como Gelado Artesanal. Gelado é alegria, gelado é união de sabores e pessoas, gelado é vida!
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

      {/* Gallery Grid */}
      <section>
        <div className="grid grid-cols-3 gap-1">
          {/* Row 1 - 3 equal columns */}
          <div className="aspect-[4/3] overflow-hidden">
            <img src={aboutChocoTap} alt="Chocolate tap" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={aboutFirepitTop} alt="Fire pit" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={aboutFirepit} alt="Lareira" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Row 2 - center large, sides blank with logo */}
          <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-background">
          </div>
          <div className="aspect-[4/3] overflow-hidden row-span-1">
            <img src={aboutGardenWall} alt="Jardim" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-background">
          </div>
        </div>

        {/* Full width gelato display */}
        <div className="w-full h-[40vh] overflow-hidden">
          <img src={aboutGelatoDisplay} alt="Gelato display" className="w-full h-full object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
