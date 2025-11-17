import {
  Lightbulb,
  Settings,
  HeadphonesIcon,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicesBanner from "@/assets/services-banner.jpg";

const Services = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        >
          <div className="absolute inset-0 bg-steel/75" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="font-lora text-white mb-4 animate-fade-up">
            Nos Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-up">
            Des solutions complètes pour optimiser vos opérations industrielles
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: Lightbulb,
                title: "Recommandations Techniques",
                description:
                  "Notre équipe d'experts analyse vos besoins spécifiques et vous guide vers les solutions les plus adaptées. Nous prenons en compte vos contraintes opérationnelles, votre environnement de travail et vos objectifs de performance pour vous recommander les produits optimaux.",
                features: [
                  "Audit technique gratuit",
                  "Analyse des besoins",
                  "Recommandations personnalisées",
                  "Suivi de performance",
                ],
              },
              {
                icon: Settings,
                title: "Solutions de Filtration Complètes",
                description:
                  "De la sélection des filtres à leur installation, nous vous accompagnons à chaque étape. Nos solutions de filtration garantissent la protection optimale de vos équipements et prolongent leur durée de vie tout en réduisant vos coûts de maintenance.",
                features: [
                  "Diagnostic complet",
                  "Installation professionnelle",
                  "Programme de maintenance",
                  "Pièces de rechange garanties",
                ],
              },
              {
                icon: HeadphonesIcon,
                title: "Assistance et Conseil Maintenance",
                description:
                  "Notre service technique est disponible pour vous conseiller sur les meilleures pratiques de maintenance. Nous vous aidons à établir des calendriers d'entretien préventif et résolvons rapidement vos problématiques techniques pour minimiser les temps d'arrêt.",
                features: [
                  "Hotline technique 24/7",
                  "Formation du personnel",
                  "Documentation technique",
                  "Support à distance",
                ],
              },
              {
                icon: Truck,
                title: "Livraison Rapide & Produits Certifiés",
                description:
                  "Bénéficiez d'une logistique efficace avec notre service de livraison rapide partout en Tunisie. Tous nos produits sont certifiés et conformes aux normes internationales, garantissant la qualité et la fiabilité de votre approvisionnement.",
                features: [
                  "Livraison express disponible",
                  "Traçabilité des commandes",
                  "Produits certifiés ISO",
                  "Stock permanent",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-lora font-semibold text-2xl text-ink mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-bg">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-lora text-ink mb-4">Nos Engagements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ce qui nous distingue et garantit votre satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualité Garantie",
                description:
                  "Tous nos produits sont certifiés et conformes aux normes internationales les plus strictes",
              },
              {
                title: "Prix Compétitifs",
                description:
                  "Grâce à nos partenariats directs avec les fabricants, nous vous proposons les meilleurs tarifs",
              },
              {
                title: "Réactivité",
                description:
                  "Notre équipe est à votre écoute et répond rapidement à toutes vos demandes",
              },
              {
                title: "Expertise Technique",
                description:
                  "Plus de 20 ans d'expérience pour vous conseiller et résoudre vos problématiques",
              },
              {
                title: "Stock Permanent",
                description:
                  "Un large inventaire disponible immédiatement pour éviter les ruptures de stock",
              },
              {
                title: "Suivi Personnalisé",
                description:
                  "Un interlocuteur dédié pour suivre vos commandes et anticiper vos besoins",
              },
            ].map((commitment, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-line hover:border-accent transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-lora font-semibold text-xl mb-3 text-ink">
                  {commitment.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Visual Section */}
      <section className="py-20 bg-steel text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="font-lora mb-6">Une Équipe à Votre Service</h2>
              <p className="text-white/90 leading-relaxed mb-6">
                Notre équipe technique qualifiée est composée d'experts
                passionnés par leur métier. Formés en continu aux dernières
                technologies et normes de l'industrie, ils sont là pour vous
                accompagner dans tous vos projets.
              </p>
              <p className="text-white/90 leading-relaxed mb-8">
                Que vous ayez besoin d'un conseil technique, d'une assistance
                d'urgence ou d'un accompagnement sur le long terme, nous mettons
                notre expertise à votre disposition pour garantir le succès de
                vos opérations.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-pill bg-gold hover:bg-gold/90 text-steel"
              >
                <Link to="/contact">
                  Contactez notre équipe <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-up">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-white/10 backdrop-blur-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container-custom text-center animate-fade-up">
          <h2 className="font-lora mb-6">Prêt à Optimiser Vos Opérations ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Discutons de vos besoins et trouvons ensemble les solutions adaptées
            à votre entreprise
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-pill bg-white text-accent hover:bg-gold hover:text-white"
            >
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-pill bg-white text-accent hover:bg-gold hover:text-white"
            >
              <Link to="/products">Voir nos produits</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
