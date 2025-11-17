import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Shield,
  Handshake,
  Zap,
  ChevronRight,
  Package,
  Wrench,
  Truck,
} from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-steel/95 via-steel/80 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="font-lora text-white mb-6 text-balance">
              Performance, Fiabilité et Lubrifiants de Qualité avec Super Filtre Tunisie
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Votre partenaire de confiance pour tous vos besoins en filtration,
              lubrification et solutions industrielles depuis plus de 20 ans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-pill bg-accent hover:bg-gold text-lg px-8"
              >
                <Link to="/products">
                  Découvrir nos produits <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-pill bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-steel text-lg px-8"
              >
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expertise",
                description: "Plus de 20 ans d'expérience dans l'industrie",
              },
              {
                icon: Shield,
                title: "Qualité",
                description: "Produits certifiés et conformes aux normes",
              },
              {
                icon: Handshake,
                title: "Partenariat Shell",
                description: "Distributeur officiel de marques premium",
              },
              {
                icon: Zap,
                title: "Fiabilité",
                description: "Service rapide et conseil personnalisé",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-lora font-semibold text-xl mb-2 text-ink">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-bg">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-lora text-ink mb-4">Nos Produits Phares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de produits premium pour tous vos besoins
              en filtration et lubrification
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-pill border-2 border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Link to="/products">
                Voir tout le catalogue <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-lora text-ink mb-4">Pourquoi Nous Choisir ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes et un service d'excellence pour tous vos
              besoins industriels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Stock Important",
                description:
                  "Large gamme de produits disponibles immédiatement pour une livraison rapide",
              },
              {
                icon: Wrench,
                title: "Conseil Technique",
                description:
                  "Une équipe d'experts à votre écoute pour vous guider dans vos choix",
              },
              {
                icon: Truck,
                title: "Livraison Rapide",
                description:
                  "Service de livraison efficace partout en Tunisie avec suivi de commande",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-2 border-line hover:border-accent transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-lora font-semibold text-xl mb-3 text-ink">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-steel text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="text-6xl mb-6 text-gold">"</div>
            <blockquote className="text-2xl md:text-3xl font-lora mb-8 leading-relaxed">
              Un partenaire fiable qui comprend nos besoins industriels. La qualité
              des produits et le service client sont exceptionnels.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gold rounded-full" />
              <div className="text-left">
                <div className="font-semibold">Mohamed Ben Ali</div>
                <div className="text-sm text-white/70">Directeur Technique, Tunisie Motors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container-custom text-center animate-fade-up">
          <h2 className="font-lora mb-6">Besoin d'un Devis Personnalisé ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et recevoir
            une offre adaptée à votre projet
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-pill bg-white text-accent hover:bg-gold hover:text-white text-lg px-8"
          >
            <Link to="/contact">
              Demander un devis <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
