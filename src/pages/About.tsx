import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import aboutGardenWall from "@/assets/about-garden-wall.png";
import logo from "@/assets/logo.png";
import logoGallery from "@/assets/logo-gallery.png";
import gallerySalad from "@/assets/gallery-salad.jpg";
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
      <section className="relative py-20">
        <div className="sphere-yellow w-12 h-12 -top-2 left-[10%]" />
        <div className="sphere-white w-8 h-8 top-16 right-[8%]" />
        <div className="sphere-burgundy w-10 h-10 bottom-20 left-[20%]" />
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
            <img src={galleryCorridor} alt="Interior Lavoratta" className="rounded-lg shadow-lg w-full h-72 object-cover" />
            <img src={galleryGarden} alt="Jardim Lavoratta" className="rounded-lg shadow-lg w-full h-72 object-cover" />
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

      {/* Gallery Mosaic */}
      <section>
        {/* Row 1: corridor (25%) | garden firepit (50%) | logo block (25%) */}
        <div className="grid grid-cols-4 gap-0">
          <div className="aspect-square overflow-hidden">
            <img src={galleryCorridor} alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="col-span-2 aspect-[2/1] overflow-hidden">
            <img src={galleryGarden} alt="Jardim" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#822635' }}>
            <img src={logoGallery} alt="Lavoratta" className="w-3/4 object-contain" />
          </div>
        </div>

        {/* Row 2: cone green wall (50%) | gelato display (50%) */}
        <div className="grid grid-cols-4 gap-0">
          <div className="aspect-square overflow-hidden">
            <img src={gallerySalad} alt="Salada Lavoratta" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="col-span-2 aspect-[2/1] overflow-hidden">
            <img src={galleryConeGreen} alt="Life is like an ice cream" className="w-full h-full object-cover object-right hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={galleryGelatoDisplay} alt="Gelados artesanais" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        {/* Row 3: firepit close (25%) | firepit people (50%) | choco cone (25%) */}
        <div className="grid grid-cols-4 gap-0">
          <div className="aspect-square overflow-hidden">
            <img src={galleryFirepitClose} alt="Lareira" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="col-span-2 aspect-[2/1] overflow-hidden">
            <img src={galleryFirepitPeople} alt="Terraço" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src={galleryChocoCone} alt="Cone chocolate" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
