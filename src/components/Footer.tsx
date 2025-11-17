import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Printer } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
               <img
                src="/logo_SP.png"
                alt="Logo Super Filtre"
                className="w-10 h-10 object-contain"
              />
              </div>
              <div>
                <div className="font-lora font-bold text-lg leading-none">
                  Super Filtre
                </div>
                <div className="text-xs text-white/70">Tunisie</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en filtration
              et lubrification industrielle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-lora font-semibold text-lg mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", path: "/" },
                { name: "À propos", path: "/about" },
                { name: "Produits", path: "/products" },
                { name: "Services", path: "/services" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-lora font-semibold text-lg mb-4">
              Nos Produits
            </h3>
            <ul className="space-y-2">
              {[
                "Huiles moteur",
                "Filtres à huile",
                "Filtres à air",
                "Graisses industrielles",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (réelles) */}
          <div>
            <h3 className="font-lora font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                 24 Avenue de France, 2013 Ben Arous, Tunisie
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:superfiltre@gnet.tn"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  superfiltre@gnet.tn
                </a>
              </li>

              {/* Mobile */}
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+21620322289"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  +216 20 322 289
                </a>
              </li>

              {/* Téléphone fixe */}
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+21679391964"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  +216 79 391 964
                </a>
              </li>

              {/* Fax */}
              <li className="flex items-center space-x-3">
                <Printer className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+21671383017"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                  aria-label="Fax"
                >
                  +216 71 383 017
                </a>
              </li>
            </ul>

            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/60">
            © {currentYear} Super Filtre Tunisie. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              className="text-sm text-white/60 hover:text-gold transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to="#"
              className="text-sm text-white/60 hover:text-gold transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
