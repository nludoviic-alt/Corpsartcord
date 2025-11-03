import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import image2 from "@/assets/2.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    toast.success("Message envoyé ! Nous vous répondrons bientôt.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfos = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@corpsartcord.fr",
      link: "mailto:contact@corpsartcord.fr",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 (0)1 23 45 67 89",
      link: "tel:+33123456789",
      color: "tertiary"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "123 Rue de la Culture, 75001 Paris, France",
      link: "#",
      color: "accent"
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image2}
            alt="Contact"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Contactez-nous
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Une question ? Envie de nous rejoindre ? N'hésitez pas à nous contacter
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfos.map((info, index) => {
                const Icon = info.icon;
                const colorClass = {
                  primary: "bg-primary/10 text-primary border-primary/20",
                  tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
                  accent: "bg-accent/10 text-accent border-accent/20"
                }[info.color] || "bg-primary/10 text-primary";
                
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="group bg-card rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 text-center"
                  >
                    <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </a>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-card rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-border/50">
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Envoyez-nous un message</h2>
                    <p className="text-muted-foreground">
                      Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.fr"
                        required
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-base font-semibold">Sujet</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="À propos de..."
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        rows={6}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg py-5 sm:py-6 group"
                    >
                      Envoyer le message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-6">
                {/* Horaires */}
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Horaires d'ouverture</h3>
                  </div>
                  <div className="space-y-3 text-base">
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="font-semibold">Lundi - Vendredi</span>
                      <span className="text-muted-foreground">10h - 20h</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="font-semibold">Samedi</span>
                      <span className="text-muted-foreground">14h - 19h</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-semibold">Dimanche</span>
                      <span className="text-muted-foreground">Fermé</span>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant overflow-hidden">
                  <h3 className="text-2xl font-bold mb-4">Notre localisation</h3>
                  <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border/50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937606!2d2.292292515674392!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation de la Cie Corpsartcord"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=123+Rue+de+la+Culture,+75001+Paris" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      Ouvrir dans Google Maps →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Rejoignez notre communauté
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-foreground/80">
            Suivez-nous sur nos réseaux sociaux pour découvrir toutes nos actualités et créations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link to="/spectacles">Voir nos spectacles</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link to="/ateliers">Découvrir nos ateliers</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
