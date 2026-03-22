import { MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import galleryGarden from "@/assets/gallery-garden.webp";
import contactGarden from "@/assets/contact-garden.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero image={galleryGarden} title="Contacto" />

      {/* Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Location */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-primary italic text-lg mb-3">Localização</h3>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-display text-lg font-semibold">
                    Rua de Santa Catarina 357,<br />4000-446 Porto
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rua+de+Santa+Catarina+357+Porto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm underline hover:text-primary transition-colors mt-2 inline-block"
                  >
                    View On Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Reservations */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-primary italic text-lg mb-3">Reservas</h3>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Phone className="text-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-display text-xl font-semibold">+351 22 117 6549</p>
                  <a
                    href="mailto:info@lavoratta.com"
                    className="text-muted-foreground text-sm underline hover:text-primary transition-colors mt-1 inline-block"
                  >
                    info@lavoratta.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-primary italic text-lg mb-3">Horário</h3>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <Clock className="text-primary flex-shrink-0 mt-1" size={18} />
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Dias Semana: 08:30 - 20:00</p>
                  <p>Sexta-feira: 08:30 - 22:30</p>
                  <p>Sábado: 08:30 - 22:30</p>
                  <p>Domingo: 08:30 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Image */}
      <section className="relative h-[50vh] min-h-[300px]">
        <img src={contactGarden} alt="Jardim Lavoratta" className="w-full h-full object-cover" />
      </section>

      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Contact;
