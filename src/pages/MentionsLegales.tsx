import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <main className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-4xl">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-8"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </Button>

        <div className="bg-card rounded-xl shadow-elegant p-8 sm:p-10 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Mentions légales</h1>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
              <p>
                <strong className="text-foreground">Raison sociale :</strong> Cie Corpsartcord<br />
                <strong className="text-foreground">Forme juridique :</strong> Association loi 1901<br />
                <strong className="text-foreground">Siège social :</strong> 123 Rue de la Culture, 75001 Paris, France<br />
                <strong className="text-foreground">Téléphone :</strong> +33 (0)1 23 45 67 89<br />
                <strong className="text-foreground">Email :</strong> contact@corpsartcord.fr<br />
                <strong className="text-foreground">Directeur de publication :</strong> Alice Dubois
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">2. Hébergement</h2>
              <p>
                Le site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de la Cie Corpsartcord, 
                sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">4. Protection des données</h2>
              <p>
                Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données vous concernant. Pour exercer ce droit, contactez-nous à : contact@corpsartcord.fr
              </p>
              <p className="mt-2">
                Pour plus d'informations, consultez notre <Link to="/confidentialite" className="text-primary hover:underline">Politique de confidentialité</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">5. Responsabilité</h2>
              <p>
                La Cie Corpsartcord s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. 
                Toutefois, elle ne peut garantir que ces informations sont complètes, exactes et à jour. 
                L'association ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">6. Liens externes</h2>
              <p>
                Le site peut contenir des liens vers des sites externes. La Cie Corpsartcord n'exerce aucun contrôle sur ces sites 
                et décline toute responsabilité quant à leur contenu ou leur accessibilité.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">7. Contact</h2>
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
                <strong className="text-foreground">Email :</strong> contact@corpsartcord.fr<br />
                <strong className="text-foreground">Téléphone :</strong> +33 (0)1 23 45 67 89
              </p>
            </section>

            <div className="pt-8 border-t border-border mt-8">
              <p className="text-xs text-muted-foreground">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MentionsLegales;




