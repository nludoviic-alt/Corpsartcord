import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Heart, Sparkles, CheckCircle, ArrowRight, Star, Gift, Calendar, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-stage.webp";
import image28 from "@/assets/28.webp";
import image31 from "@/assets/31.webp";

const Adhesion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.motivation) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    toast.success("Votre demande d'adhésion a été envoyée ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", phone: "", address: "", motivation: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: Sparkles,
      title: "Accès prioritaire",
      description: "Réservez vos places en avant-première pour tous nos spectacles et événements exclusifs",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Tarifs réduits",
      description: "Bénéficiez de réductions jusqu'à 30% sur les spectacles, ateliers et événements",
      color: "accent"
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Rejoignez un réseau de passionnés d'art et de culture, échangez avec d'autres membres",
      color: "tertiary"
    },
    {
      icon: CheckCircle,
      title: "Ateliers réservés",
      description: "Accès exclusif à des ateliers privés et des masterclasses réservées aux membres",
      color: "primary"
    },
    {
      icon: Gift,
      title: "Cadeaux de bienvenue",
      description: "Recevez des goodies et des invitations spéciales pour les nouveaux membres",
      color: "accent"
    },
    {
      icon: Calendar,
      title: "Événements VIP",
      description: "Accès aux soirées de lancement, rencontres avec les artistes et événements privés",
      color: "tertiary"
    }
  ];

  const membershipInfo = [
    {
      icon: Star,
      title: "Engagement",
      description: "Soutenez notre mission culturelle et artistique en devenant membre actif"
    },
    {
      icon: Users,
      title: "Réseau",
      description: "Connectez-vous avec une communauté de 500+ membres passionnés"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Contribuez directement au développement de projets artistiques locaux"
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Adhésion"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Rejoignez notre communauté
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Devenez membre de la Cie Corpsartcord et participez activement à notre aventure artistique
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                Les avantages de l'adhésion
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                En tant que membre, vous bénéficiez de nombreux avantages exclusifs pour enrichir votre expérience culturelle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colorClass = {
                  primary: "bg-primary/10 text-primary border-primary/20",
                  tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
                  accent: "bg-accent/10 text-accent border-accent/20"
                }[benefit.color] || "bg-primary/10 text-primary";
                
                return (
                  <div
                    key={index}
                    className="group relative bg-card rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
                  >
                    <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-elegant group">
                <img 
                  src={image28}
                  alt="Communauté artistique"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Une communauté engagée</h3>
                  <p className="text-white/90">Rejoignez des passionnés qui partagent votre amour pour les arts</p>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-elegant group">
                <img 
                  src={image31}
                  alt="Événements exclusifs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expériences uniques</h3>
                  <p className="text-white/90">Accédez à des événements et rencontres exceptionnels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Info Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
                Pourquoi devenir membre ?
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {membershipInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-3xl p-6 sm:p-8 shadow-elegant text-center border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info Sidebar */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant">
                  <h3 className="text-2xl font-bold mb-6">Informations utiles</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">contact@corpsartcord.fr</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-tertiary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <p className="text-muted-foreground">+33 (0)1 23 45 67 89</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <h4 className="font-semibold mb-3">Réponse rapide garantie</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Nous répondons à toutes les demandes d'adhésion sous 48h.
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      asChild
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link to="/contact">Nous contacter</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant">
                  <h3 className="text-2xl font-bold mb-4">Modalités</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Adhésion annuelle renouvelable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tarif réduit pour les étudiants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Paiement sécurisé en ligne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Confirmation immédiate par email</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Formulaire d'adhésion
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Remplissez le formulaire ci-dessous pour faire partie de notre communauté. 
                    Tous les champs marqués d'un * sont obligatoires.
                  </p>
                </div>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <div>
                        <Label htmlFor="address" className="text-base font-semibold">Adresse</Label>
                        <Input
                          id="address"
                          name="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Votre adresse"
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="motivation" className="text-base font-semibold">Votre motivation *</Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        placeholder="Parlez-nous de votre intérêt pour l'art et la culture, de vos attentes et de ce qui vous motive à rejoindre notre communauté..."
                        rows={6}
                        required
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-lg py-6 group"
                    >
                      Envoyer ma demande d'adhésion
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
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
            Une question sur l'adhésion ?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-foreground/80">
            N'hésitez pas à nous contacter pour plus d'informations ou pour échanger sur notre communauté
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link to="/spectacles">Découvrir nos spectacles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Adhesion;
