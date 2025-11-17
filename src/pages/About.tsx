import { Award, Target, Users, Leaf } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        >
          <div className="absolute inset-0 bg-steel/75" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="font-lora text-white mb-4 animate-fade-up">À Propos</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-up">
            Plus de 20 ans d'expertise au service de l'industrie tunisienne
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="font-lora text-ink mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2003, <strong className="text-ink">Super Filtre Tunisie</strong> est
                  devenue une référence incontournable dans le domaine de la filtration
                  et de la lubrification industrielle en Tunisie.
                </p>
                <p>
                  Notre engagement envers l'excellence nous a permis de développer des
                  partenariats solides avec les plus grandes marques internationales comme
                  Shell, Perkins et Mann Filter. Nous distribuons des produits de qualité
                  supérieure qui répondent aux normes les plus strictes de l'industrie.
                </p>
                <p>
                  Au fil des années, nous avons accompagné des centaines d'entreprises
                  dans leurs besoins en maintenance industrielle, en leur offrant non
                  seulement des produits fiables mais aussi un conseil technique
                  personnalisé et un service après-vente réactif.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-up">
              {[
                { number: "20+", label: "Années d'expérience" },
                { number: "500+", label: "Clients satisfaits" },
                { number: "1000+", label: "Références produits" },
                { number: "24/7", label: "Support technique" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-accent mb-2 font-lora">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-bg">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-lora text-ink mb-4">Nos Partenaires</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous travaillons avec les leaders mondiaux de l'industrie
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Shell", "Perkins", "Mann Filter", "Total"].map((partner, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 flex items-center justify-center hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl font-bold text-steel">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-lora text-ink mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Nous visons la perfection dans chaque produit et service que nous proposons",
              },
              {
                icon: Target,
                title: "Performance",
                description:
                  "Des solutions qui optimisent vos opérations et maximisent votre productivité",
              },
              {
                icon: Users,
                title: "Service Client",
                description:
                  "Une équipe dévouée à votre satisfaction et disponible pour vous accompagner",
              },
              {
                icon: Leaf,
                title: "Durabilité",
                description:
                  "Engagement envers des pratiques responsables et des produits durables",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-2 border-line hover:border-accent transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-lora font-semibold text-xl mb-3 text-ink">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & RSE */}
      <section className="py-20 bg-steel text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-up">
              <h2 className="font-lora mb-6">Certifications</h2>
              <p className="text-white/90 leading-relaxed mb-6">
                Notre engagement envers la qualité se reflète dans nos certifications
                internationales qui garantissent la conformité de nos produits aux
                normes les plus exigeantes.
              </p>
              <ul className="space-y-3">
                {[
                  "Certification ISO 9001:2015",
                  "Norme API (American Petroleum Institute)",
                  "Certification ACEA pour huiles moteur",
                  "Conformité CE pour produits importés",
                ].map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-up">
              <h2 className="font-lora mb-6">Responsabilité Sociale</h2>
              <p className="text-white/90 leading-relaxed mb-6">
                Nous croyons en un développement durable et responsable. Notre
                engagement RSE se traduit par des actions concrètes au quotidien.
              </p>
              <ul className="space-y-3">
                {[
                  "Recyclage des emballages et bidons usagés",
                  "Formation continue de nos équipes",
                  "Partenariats avec des fournisseurs responsables",
                  "Soutien aux initiatives locales d'éducation",
                ].map((action, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
