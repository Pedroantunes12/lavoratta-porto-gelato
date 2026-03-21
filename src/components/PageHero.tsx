import Navbar from "./Navbar";

interface PageHeroProps {
  image: string;
  title: string;
}

const PageHero = ({ image, title }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay" />
      <Navbar />
      <h1 className="relative z-10 font-display text-6xl md:text-8xl italic font-bold text-primary-foreground tracking-wide">
        {title}
      </h1>
    </section>
  );
};

export default PageHero;
