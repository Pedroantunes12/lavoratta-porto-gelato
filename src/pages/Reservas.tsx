import { useState } from "react";
import { ArrowRight, Phone, Clock, MapPin, Users, CalendarDays } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useParallax } from "@/hooks/useScrollAnimation";
import reservasExterior from "@/assets/reservas-exterior.jpg";
import reservasInterior from "@/assets/reservas-interior.jpg";
import reservasAmbiente from "@/assets/reservas-ambiente.jpg";

const Reservas = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "",
  });
  const parallaxRef = useParallax();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Reserva - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nData: ${formData.date}\nHora: ${formData.time}\nPessoas: ${formData.guests}\nMensagem: ${formData.message}`
    );
    window.location.href = `mailto:info@lavoratta.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero image={reservasExterior} title="Reservas" />

      {/* Intro */}
      <section className="relative py-20">
        <div className="sphere-yellow w-12 h-12 top-4 left-[8%]" />
        <div className="sphere-white w-8 h-8 top-20 right-[12%]" />
        <div className="sphere-burgundy w-10 h-10 bottom-16 left-[25%]" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection animation="fade-right">
              <h2 className="font-display text-4xl md:text-5xl italic font-bold text-foreground mb-4">
                Reserve a sua<br />
                <span className="text-primary">experiência</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Saboreie momentos únicos! Reserve já a sua mesa e desfrute de uma refeição deliciosa num ambiente acolhedor, no coração do Porto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <a href="tel:+351221176549" className="font-display font-semibold text-lg">+351 22 117 6549</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-display font-semibold">Rua de Santa Catarina 357, Porto</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="font-display font-semibold">08:30 - 22:30</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <img
                src={reservasInterior}
                alt="Interior Lavoratta"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Parallax divider */}
      <div ref={parallaxRef} className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <img src={reservasAmbiente} alt="Ambiente Lavoratta" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <AnimatedSection animation="scale">
            <p className="font-display text-3xl md:text-5xl italic font-bold text-primary-foreground max-w-2xl">
              "Life is like an ice cream, enjoy it before it melts."
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl italic font-bold text-center mb-2">Faça a sua Reserva</h2>
              <p className="text-muted-foreground text-center text-sm mb-10">
                Preencha o formulário abaixo ou ligue diretamente para nós.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-sm font-semibold mb-2">Nome *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-sm font-semibold mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                      placeholder="+351 ..."
                    />
                  </div>
                  <div>
                    <label className="block font-display text-sm font-semibold mb-2">
                      <Users size={14} className="inline mr-1" /> Pessoas *
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                        <option key={n} value={n}>{n} {Number(n) === 1 ? "pessoa" : "pessoas"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-sm font-semibold mb-2">
                      <CalendarDays size={14} className="inline mr-1" /> Data *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-sm font-semibold mb-2">Hora *</label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-display text-sm font-semibold mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm resize-none"
                    placeholder="Alguma informação adicional..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-display text-lg italic font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 group"
                >
                  Enviar Reserva
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservas;
