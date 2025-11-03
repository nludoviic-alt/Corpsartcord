import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";

const Confidentialite = () => {
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
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Politique de confidentialité</h1>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                La Cie Corpsartcord attache une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons 
                vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">2. Données collectées</h2>
              <p className="mb-3">Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Données d'identification :</strong> Nom, prénom, email, téléphone, adresse postale</li>
                <li><strong className="text-foreground">Données de connexion :</strong> Adresse IP, cookies (avec votre consentement)</li>
                <li><strong className="text-foreground">Données de navigation :</strong> Pages visitées, durée de visite</li>
                <li><strong className="text-foreground">Données de communication :</strong> Messages envoyés via nos formulaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">3. Utilisation des données</h2>
              <p className="mb-3">Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traiter vos demandes de contact, d'adhésion, de rendez-vous</li>
                <li>Gérer vos inscriptions aux spectacles et ateliers</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">4. Base légale du traitement</h2>
              <p>
                Le traitement de vos données personnelles est basé sur :<br />
                • Votre consentement (newsletter, cookies)<br />
                • L'exécution d'un contrat (inscription à un événement)<br />
                • L'intérêt légitime (amélioration du site)<br />
                • Le respect d'obligations légales
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">5. Conservation des données</h2>
              <p>
                Vos données sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong className="text-foreground">Données de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong className="text-foreground">Newsletter :</strong> Jusqu'à désinscription</li>
                <li><strong className="text-foreground">Données comptables :</strong> 10 ans (obligation légale)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">6. Partage des données</h2>
              <p>
                Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Nos prestataires techniques (hébergement, emailing) sous contrat strict</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">7. Vos droits</h2>
              <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                <li><strong className="text-foreground">Droit de rectification :</strong> Corriger vos données inexactes</li>
                <li><strong className="text-foreground">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong className="text-foreground">Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong className="text-foreground">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong className="text-foreground">Droit à la limitation :</strong> Limiter l'utilisation de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <strong className="text-foreground">contact@corpsartcord.fr</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies 
                via notre bandeau de consentement. Pour plus d'informations, consultez notre politique de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">9. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                contre tout accès non autorisé, perte, destruction ou altération.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">10. Modifications</h2>
              <p>
                Cette politique peut être modifiée à tout moment. La version mise à jour sera toujours disponible sur cette page 
                avec indication de la date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">11. Réclamation</h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de 
                la Commission Nationale de l'Informatique et des Libertés (CNIL) :<br />
                <strong className="text-foreground">Site web :</strong> www.cnil.fr<br />
                <strong className="text-foreground">Téléphone :</strong> 01 53 73 22 22
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">12. Contact</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité :<br />
                <strong className="text-foreground">Email :</strong> contact@corpsartcord.fr<br />
                <strong className="text-foreground">Téléphone :</strong> +33 (0)1 23 45 67 89<br />
                <strong className="text-foreground">Adresse :</strong> 123 Rue de la Culture, 75001 Paris, France
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

export default Confidentialite;




