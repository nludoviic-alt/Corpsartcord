import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Sparkles, Gift, HandHeart, ArrowRight, CheckCircle, Shield, Lock, Euro, Mail, Phone, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-stage.webp";
import image28 from "@/assets/28.webp";
import image31 from "@/assets/31.webp";

const Don = () => {
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    anonymous: false,
    message: "",
  });

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    if (!amount || (!formData.name && !formData.anonymous) || !formData.email) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    toast.success(`Merci pour votre don de ${amount}€ ! Votre générosité fait la différence.`);
    setFormData({ name: "", email: "", anonymous: false, message: "" });
    setDonationAmount("");
    setCustomAmount("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const impacts = [
    {
      icon: Sparkles,
      amount: "25€",
      title: "Atelier découverte",
      description: "Financez la participation d'un jeune à un atelier artistique découverte",
      color: "primary"
    },
    {
      icon: Gift,
      amount: "50€",
      title: "Équipement créatif",
      description: "Aidez-nous à acquérir du matériel et des fournitures pour nos ateliers",
      color: "accent"
    },
    {
      icon: HandHeart,
      amount: "100€",
      title: "Spectacle inclusif",
      description: "Rendez accessible un spectacle à des personnes en situation de précarité",
      color: "tertiary"
    },
    {
      icon: Users,
      amount: "250€",
      title: "Programme éducatif",
      description: "Financez un programme éducatif complet pour une école ou un groupe",
      color: "primary"
    },
    {
      icon: Sparkles,
      amount: "500€",
      title: "Production artistique",
      description: "Participez au financement d'une nouvelle création artistique",
      color: "accent"
    }
  ];

  const whyDonate = [
    {
      icon: CheckCircle,
      title: "Inclusion culturelle",
      description: "Nous rendons l'art accessible à tous, sans barrière financière ou sociale"
    },
    {
      icon: CheckCircle,
      title: "Développement local",
      description: "Vos dons soutiennent directement les artistes et créateurs de notre région"
    },
    {
      icon: CheckCircle,
      title: "Éducation artistique",
      description: "Financez des ateliers et programmes éducatifs pour tous les âges"
    },
    {
      icon: CheckCircle,
      title: "Diversité culturelle",
      description: "Promouvez la richesse et la diversité des expressions artistiques"
    }
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "Paiement sécurisé",
      description: "Vos informations sont protégées par un système de paiement sécurisé"
    },
    {
      icon: Lock,
      title: "Reçu fiscal",
      description: "Recevez automatiquement un reçu fiscal pour vos dons (66% de réduction d'impôt)"
    },
    {
      icon: Heart,
      title: "100% dédié",
      description: "100% de votre don est directement utilisé pour nos projets artistiques"
    },
    {
      icon: Mail,
      title: "Suivi transparent",
      description: "Recevez des nouvelles régulières sur l'impact de votre don"
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Faire un don"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Faites un don
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Votre générosité nous permet de créer, partager et rendre l'art accessible à tous
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                L'impact de votre don
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Chaque contribution, même modeste, fait la différence pour notre mission. 
                Découvrez comment votre générosité transforme des vies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                const colorClass = {
                  primary: "bg-primary/10 text-primary border-primary/20",
                  tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
                  accent: "bg-accent/10 text-accent border-accent/20"
                }[impact.color] || "bg-primary/10 text-primary";
                
                return (
                  <div
                    key={index}
                    className="group relative bg-card rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
                  >
                    <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{impact.amount}</div>
                    <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {impact.description}
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
                  alt="Impact de votre don"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Un impact réel</h3>
                  <p className="text-white/90">Votre don permet de financer des projets concrets qui changent des vies</p>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-elegant group">
                <img 
                  src={image31}
                  alt="Communauté engagée"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ensemble, on va plus loin</h3>
                  <p className="text-white/90">Rejoignez une communauté de généreux donateurs engagés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
                Pourquoi nous soutenir ?
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {whyDonate.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-3xl p-6 sm:p-8 shadow-elegant border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info Sidebar */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-elegant">
                  <h3 className="text-2xl font-bold mb-6">Transparence et confiance</h3>
                  
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {trustFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">
                      Une question sur les dons ? Contactez-nous directement.
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

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-elegant">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Avantage fiscal</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Vos dons ouvrent droit à une réduction d'impôt de 66% du montant versé, 
                    dans la limite de 20% du revenu imposable.
                  </p>
                </div>
              </div>

              {/* Donation Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Formulaire de don
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Choisissez le montant de votre don et remplissez le formulaire ci-dessous. 
                    Chaque euro compte et fait la différence !
                  </p>
                </div>

                <div className="bg-card rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-border/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount Selection */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">
                        Montant du don *
                      </Label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setDonationAmount(amount.toString());
                              setCustomAmount("");
                            }}
                            className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105 ${
                              donationAmount === amount.toString()
                                ? "border-primary bg-primary/10 text-primary scale-105 shadow-lg"
                                : "border-border hover:border-primary text-foreground hover:bg-primary/5"
                            }`}
                          >
                            {amount}€
                          </button>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="customAmount" className="text-sm text-muted-foreground mb-2 block">
                          Ou saisissez un montant personnalisé
                        </Label>
                        <Input
                          id="customAmount"
                          name="customAmount"
                          type="number"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setDonationAmount("");
                          }}
                          placeholder="Montant en euros"
                          min="1"
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Donor Info */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                        <input
                          id="anonymous"
                          name="anonymous"
                          type="checkbox"
                          checked={formData.anonymous}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-border text-primary focus:ring-primary cursor-pointer"
                        />
                        <Label htmlFor="anonymous" className="cursor-pointer text-sm">
                          Je souhaite faire un don anonyme
                        </Label>
                      </div>

                      {!formData.anonymous && (
                        <div>
                          <Label htmlFor="name" className="text-base font-semibold">Nom complet *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required={!formData.anonymous}
                            className="mt-2 h-12"
                          />
                        </div>
                      )}

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
                        <p className="text-xs text-muted-foreground mt-2">
                          Nous vous enverrons un reçu fiscal par email
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-base font-semibold">Message (optionnel)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Un mot d'encouragement ou de motivation..."
                          rows={4}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-lg py-6 group"
                    >
                      <Heart className="mr-2 w-5 h-5 fill-current" />
                      Faire un don
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
            Merci pour votre générosité
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-foreground/80">
            Chaque don, quel que soit son montant, nous aide à réaliser notre mission : 
            rendre l'art et la culture accessibles à tous.
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

export default Don;
