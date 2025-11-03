import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin, Users, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-stage.webp";

const RendezVous = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    subject: "",
    message: "",
    type: "spectacle",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    toast.success("Votre demande de rendez-vous a été envoyée ! Nous vous contacterons pour confirmer.");
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      date: "", 
      time: "", 
      subject: "", 
      message: "",
      type: "spectacle"
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const rendezVousTypes = [
    {
      value: "spectacle",
      label: "Spectacle",
      icon: Calendar,
      description: "Réserver un spectacle ou obtenir des informations",
      color: "from-primary/20 to-primary/5"
    },
    {
      value: "atelier",
      label: "Atelier",
      icon: Users,
      description: "Participer à un atelier créatif",
      color: "from-tertiary/20 to-tertiary/5"
    },
    {
      value: "partenariat",
      label: "Partenariat",
      icon: MessageSquare,
      description: "Discuter d'un projet de collaboration",
      color: "from-accent/20 to-accent/5"
    },
    {
      value: "autre",
      label: "Autre",
      icon: Mail,
      description: "Autre demande ou question",
      color: "from-primary/20 to-tertiary/5"
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Prendre rendez-vous"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Overlay dégradé */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/70"></div>
        </div>
        
        {/* Contenu du hero */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Prendre rendez-vous
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Réservez un créneau pour échanger avec nous ou participer à nos activités
            </p>
          </div>
        </div>
      </section>

      {/* Types Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Pour quel type de rendez-vous ?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez le type de rendez-vous qui correspond à votre besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {rendezVousTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = formData.type === type.value;
              return (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: type.value })}
                  className={`group relative bg-card p-6 sm:p-8 rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left border-2 ${
                    isSelected 
                      ? "border-primary shadow-xl ring-4 ring-primary/20" 
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      isSelected 
                        ? "bg-gradient-soft scale-110 shadow-lg" 
                        : "bg-muted group-hover:bg-gradient-soft group-hover:scale-110"
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors ${isSelected ? "text-white" : "text-primary group-hover:text-white"}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {type.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                    {isSelected && (
                      <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Sélectionné</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Formulaire de rendez-vous
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Remplissez les informations ci-dessous et nous vous recontacterons rapidement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Formulaire */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-border/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date" className="text-base font-semibold">Date souhaitée *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="mt-2 h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="time" className="text-base font-semibold">Heure souhaitée *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-base font-semibold">Sujet</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre rendez-vous"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre demande ou vos questions..."
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl group h-14 text-lg font-semibold"
                    >
                      Envoyer ma demande de rendez-vous
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sidebar avec informations */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant">
                  <h3 className="text-2xl font-bold mb-6">Informations utiles</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Réponse rapide</h4>
                        <p className="text-sm text-muted-foreground">
                          Nous répondons sous 24-48h
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-tertiary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-tertiary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Sur place ou en ligne</h4>
                        <p className="text-sm text-muted-foreground">
                          RDV physique ou visioconférence
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Confirmation par email</h4>
                        <p className="text-sm text-muted-foreground">
                          Vous recevrez une confirmation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant">
                  <h3 className="text-xl font-bold mb-4">Besoin d'aide ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Une question avant de réserver ? Contactez-nous directement.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href="/contact">Nous contacter</a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="lg"
                      asChild
                      className="w-full bg-tertiary text-tertiary-foreground hover:bg-tertiary/90"
                    >
                      <a href="tel:+33123456789" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Appeler
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section améliorée */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Prêt à nous rencontrer ?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-foreground/80">
            Réservez votre créneau dès maintenant et découvrez comment nous pouvons collaborer ensemble
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <a href="#form">Réserver maintenant</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <a href="/contact">Plus d'informations</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RendezVous;
