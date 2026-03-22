import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import menuHero from "@/assets/menu-hero.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import boloLava from "@/assets/bolo-lava.jpg";
import ribsBurger from "@/assets/ribs-burger.jpg";
import gelados from "@/assets/gelados.jpg";
import pastelNata from "@/assets/pastel-nata.jpg";
import saboresHero from "@/assets/sabores-hero.jpg";
import garden from "@/assets/garden.jpg";
import menuCrepeFroyo from "@/assets/menu-crepe-froyo.jpg";
import menuCrepePresunto from "@/assets/menu-crepe-presunto.jpg";
import menuWaffles from "@/assets/menu-waffles.jpg";
import menuWaffleChoc from "@/assets/menu-waffle-choc.jpg";
import menuPanquecaBambini from "@/assets/menu-panqueca-bambini.jpg";
import menuPanquecaEgg from "@/assets/menu-panqueca-egg.jpg";
import menuPistacio from "@/assets/menu-pistacio.jpg";
import menuOreo from "@/assets/menu-oreo.jpg";
import menuCheesecakeMaracuja from "@/assets/menu-cheesecake-maracuja.jpg";
import menuRedVelvet from "@/assets/menu-red-velvet.jpg";
import menuBrownie from "@/assets/menu-brownie.jpg";
import menuChocCake from "@/assets/menu-choc-cake.jpg";
import menuEclairs from "@/assets/menu-eclairs.jpg";
import menuStrawberryPastry from "@/assets/menu-strawberry-pastry.jpg";
import menuBrigadeiros from "@/assets/menu-brigadeiros.jpg";

type MenuItem = { name: string; desc: string; price: string; img: string };

const menuData: Record<string, MenuItem[]> = {
  "Destaques": [
    { name: "Red Velvet", desc: "Bolo veludo vermelho com frutos.", price: "3.30€", img: redVelvet },
    { name: "Tosta", desc: "Duas fatias e Coca-Cola.", price: "8.5€", img: ribsBurger },
    { name: "Salada Mozzarella", desc: "Entrada Caprese, presunto e muito queijo.", price: "8.25€", img: gelados },
    { name: "Crepe Ribs", desc: "Crepe com carne desfiada num molho especial.", price: "10€", img: ribsBurger },
    { name: "Waffle Queijo", desc: "Gelato, Morango e massa.", price: "8.20€", img: pastelNata },
    { name: "Crepe Banoffe", desc: "Caramelo, banana e gelato.", price: "7.60€", img: boloLava },
    { name: "Pastel Nata Gelado", desc: "Pastel nata com Lavoratta.", price: "2.20€", img: pastelNata },
    { name: "Gelados", desc: "Sabores artesanais.", price: "5.0€", img: gelados },
  ],
  "Taças de Gelado": [
    { name: "Bambini", desc: "Gelado, Morango, maracujá, Manga, Nata, Topping de caramelo.", price: "7.90€", img: saboresHero },
    { name: "Lavoratta", desc: "Gelado de Crossants, waffles, Choc dourado, Lavoratta.", price: "8.90€", img: gelados },
    { name: "Marshlovers", desc: "Gelado, Avelã, gelado de Baunilha e Calda de Chocolate de leite, pistáchio e MarshmAllows.", price: "6.50€", img: saboresHero },
    { name: "Tropical", desc: "Gelado, Manga, Morango e Sumo, Frutas, Waffle ou Manga.", price: "8.40€", img: gelados },
    { name: "Maiores de 18", desc: "Gelado de Licores, Vodka, Shots de Licores, Lemon Pie, Caramelo.", price: "7.90€", img: boloLava },
    { name: "Happy Lavoratta", desc: "Bolo de Morango, bola de Baunilha e Nata Chocolate, Pistáchio, Carapica, Chocolate.", price: "7.20€", img: saboresHero },
  ],
  "Crepes | Waffle | Panquecas": [
    { name: "Crepe FroYo & Berries", desc: "Crepe gelato, iogurte, frutos Vermelhos.", price: "7.90€", img: menuCrepeFroyo },
    { name: "Crepe Lavoratta", desc: "Crepe com gelato contendo waffles e toppings.", price: "8.90€", img: menuCrepePresunto },
    { name: "Waffle Gelado e Topping", desc: "Waffle com gelado e toppings variados.", price: "5.40€", img: menuWaffles },
    { name: "Waffle Topping Banoffee", desc: "Waffle, gelato e caramelo de banana e Nata.", price: "7.60€", img: menuWaffleChoc },
    { name: "Panqueca Bambini", desc: "Gelato, banana e choc e morango e caramelo e marmelada.", price: "7.90€", img: menuPanquecaBambini },
    { name: "Panqueca Lavoratta", desc: "Panq com gelato premium com morango e chocolate e caramelo e leite.", price: "8.90€", img: menuPanquecaEgg },
  ],
  "Doces | Bolos": [
    { name: "Bolo Pistácio", desc: "Com massa fina para os amantes de Pistácio.", price: "3.30€", img: redVelvet },
    { name: "Bolo Oreo", desc: "Com cobertura à base de oramentos de Oreo.", price: "3.30€", img: boloLava },
    { name: "Cheesecake de Maracujá", desc: "A versão da cheesecake com gelato e calda de Maracujá.", price: "3.30€", img: pastelNata },
    { name: "Cheesecake de Frutos Vermelhos", desc: "Tradição e modernidade.", price: "3.30€", img: redVelvet },
    { name: "Bolo Cookie", desc: "A nossa receita dos bolos. Tem o sabor daquilo que é caseiro e saudável.", price: "3.30€", img: boloLava },
    { name: "Bolo Banoffee", desc: "Dois delíciosos sabores com banana e caramelo.", price: "3.30€", img: pastelNata },
    { name: "Bolo Lava", desc: "Um delicado bolo com a cobertura de chocolate quente.", price: "3.30€", img: boloLava },
    { name: "Cheesecake de Morango", desc: "A versão da cheesecake com morango.", price: "3.30€", img: redVelvet },
  ],
  "Saladas e Bowls": [
    { name: "Presunto", desc: "Fresco, natural, com salsa e molho.", price: "8.25€", img: ribsBurger },
    { name: "Mozzarella Fresca", desc: "Mozzarella, tomate, abóbora, tomate seco.", price: "7.90€", img: gelados },
    { name: "Bowl Açaí", desc: "Bowl com açaí e fruta.", price: "9.90€", img: saboresHero },
    { name: "Bowl Pitaya", desc: "Bowl de Pitaya e fruta e granola.", price: "9.90€", img: saboresHero },
  ],
  "Pastelaria e Sobremesas": [
    { name: "Brigadeiros", desc: "Vários sabores e combinações.", price: "1.30€", img: boloLava },
    { name: "Cookies Caseiras", desc: "Cookies, para quem ama cookies com mega sabores.", price: "1.60€", img: redVelvet },
    { name: "Croissants", desc: "Recheios de queijo, fiambre, compota, geleia e morangos.", price: "2.00€", img: pastelNata },
    { name: "Éclair", desc: "Vários sabores e recheios.", price: "1.80€", img: boloLava },
    { name: "Pastel Nata", desc: "Para acompanhar o café delicioso.", price: "1.20€", img: pastelNata },
    { name: "Verrines", desc: "Parfait de Iogurte grego, granola e frutos.", price: "3.90€", img: saboresHero },
  ],
};

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero image={menuHero} title="Menu" />

      <div className="container mx-auto px-4 py-16">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-16">
            <div className="flex justify-center mb-10">
              <span className="category-badge">{category}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              {items.map((item) => (
                <div key={item.name} className="flex items-center gap-4 group">
                  <img src={item.img} alt={item.name} className="menu-item-image flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-base font-semibold italic truncate">{item.name}</h3>
                      <span className="font-display text-primary font-bold text-sm flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reserve já */}
      <section className="relative py-20 overflow-hidden">
        <img src={garden} alt="Reserve" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-6xl italic font-bold text-primary-foreground mb-4">
            Reserve já!
          </h2>
          <p className="text-primary-foreground/70 text-sm max-w-md mx-auto mb-8">
            Saboreie momentos únicos! Reserve já a sua mesa e desfrute de uma refeição deliciosa num ambiente acolhedor.
          </p>
          <a
            href="tel:+351221176549"
            className="inline-flex items-center gap-3 text-primary-foreground/80 text-sm italic hover:text-primary-foreground transition-colors"
          >
            Reservar
            <span className="w-10 h-10 rounded-full border-2 border-primary-foreground flex items-center justify-center">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </section>

      <InstagramSection />
      <Footer />
    </div>
  );
};

export default MenuPage;
