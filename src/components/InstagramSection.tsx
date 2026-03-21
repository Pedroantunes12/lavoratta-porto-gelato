import { Instagram } from "lucide-react";
import pastelNataReal from "@/assets/pastel-nata-real.png";
import burgerTop from "@/assets/burger-top.png";
import coneTap from "@/assets/cone-tap.png";
import brigadeiros from "@/assets/brigadeiros.png";

const images = [pastelNataReal, burgerTop, coneTap, brigadeiros];

const InstagramSection = () => {
  return (
    <section className="bg-primary">
      <div className="grid grid-cols-2 md:grid-cols-6 items-stretch">
        <div className="col-span-2 flex flex-col items-center justify-center py-12 px-6 text-center">
          <Instagram className="text-primary-foreground mb-3" size={40} />
          <p className="text-primary-foreground/80 text-sm mb-1">Siga-nos no</p>
          <h3 className="font-display text-primary-foreground text-3xl italic font-bold">Instagram</h3>
        </div>
        {images.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={img} alt="Instagram" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
