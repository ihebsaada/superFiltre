import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email invalide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Numéro de téléphone invalide" })
    .max(20, { message: "Le numéro ne peut pas dépasser 20 caractères" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(1000, { message: "Le message ne peut pas dépasser 1000 caractères" }),
});

const quoteSchema = contactSchema.extend({
  productName: z
    .string()
    .trim()
    .min(2, { message: "Le nom du produit est requis" })
    .max(200, {
      message: "Le nom du produit ne peut pas dépasser 200 caractères",
    }),
  quantity: z
    .string()
    .trim()
    .min(1, { message: "La quantité est requise" })
    .max(100, { message: "La quantité ne peut pas dépasser 100 caractères" }),
});

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [activeForm, setActiveForm] = useState<"contact" | "quote">(
    searchParams.get("product") ? "quote" : "contact"
  );

  // ==== INFOS RÉELLES ====
  const ADDRESS = "24 Avenue de France 2013 Ben Arous, Ben Arous";
  const PHONE_FIXE = "+216 79 391 964";
  const PHONE_FAX = "+216 71 383 017";
  const PHONE_MOBILE = "+216 20 322 289";
  const EMAIL = "superfiltre@gnet.tn";

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    productName: searchParams.get("product") || "",
    quantity: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(contactForm);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setContactForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      quoteSchema.parse(quoteForm);
      toast({
        title: "Demande de devis envoyée !",
        description:
          "Nous vous contacterons rapidement avec une offre personnalisée.",
      });
      setQuoteForm({
        name: "",
        email: "",
        phone: "",
        productName: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-steel text-white">
        <div className="container-custom text-center">
          <h1 className="font-lora mb-4 animate-fade-up">Contactez-Nous</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: (
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      ADDRESS
                    )}`}
                    className="hover:text-ink underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {ADDRESS}
                  </a>
                ),
              },
              {
                icon: Phone,
                title: "Téléphone",
                content: (
                  <div className="space-y-1">
                    <a href="tel:+21679391964" className="hover:text-ink">
                      Fixe : {PHONE_FIXE}
                    </a>
                    <br />
                    <a href="tel:+21671383017" className="hover:text-ink">
                      Fax : {PHONE_FAX}
                    </a>
                    <br />
                    <a href="tel:+21620322289" className="hover:text-ink">
                      Mobile : {PHONE_MOBILE}
                    </a>
                  </div>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a href={`mailto:${EMAIL}`} className="hover:text-ink">
                    {EMAIL}
                  </a>
                ),
              },
              {
                icon: Clock,
                title: "Horaires",
                content: "Lun - Ven: 8h - 17h, Sam: 8h - 12h",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact / Devis */}
            <div className="glass-card rounded-2xl p-8 animate-fade-up">
              <div className="flex space-x-4 mb-6 border-b border-line pb-4">
                <button
                  onClick={() => setActiveForm("contact")}
                  className={`pb-2 px-1 font-semibold transition-colors ${
                    activeForm === "contact"
                      ? "text-accent border-b-2 border-accent"
                      : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  Contact Général
                </button>
                <button
                  onClick={() => setActiveForm("quote")}
                  className={`pb-2 px-1 font-semibold transition-colors ${
                    activeForm === "quote"
                      ? "text-accent border-b-2 border-accent"
                      : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  Demande de Devis
                </button>
              </div>

              {activeForm === "contact" ? (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Nom complet *
                    </label>
                    <Input
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="Votre nom"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      placeholder="super@exemple.com"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Téléphone *
                    </label>
                    <Input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+216 20 322 289"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      placeholder="Votre message..."
                      rows={5}
                      className="rounded-lg resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-pill"
                  >
                    Envoyer le message
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Nom complet *
                    </label>
                    <Input
                      value={quoteForm.name}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, name: e.target.value })
                      }
                      placeholder="Votre nom"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={quoteForm.email}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, email: e.target.value })
                      }
                      placeholder="super@exemple.com"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Téléphone *
                    </label>
                    <Input
                      type="tel"
                      value={quoteForm.phone}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, phone: e.target.value })
                      }
                      placeholder="+216 79 391 964"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Nom du produit *
                    </label>
                    <Input
                      value={quoteForm.productName}
                      onChange={(e) =>
                        setQuoteForm({
                          ...quoteForm,
                          productName: e.target.value,
                        })
                      }
                      placeholder="Ex: Shell Helix Ultra 5W-40"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Quantité estimée *
                    </label>
                    <Input
                      value={quoteForm.quantity}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, quantity: e.target.value })
                      }
                      placeholder="Ex: 10 bidons de 5L"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">
                      Notes additionnelles
                    </label>
                    <Textarea
                      value={quoteForm.message}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, message: e.target.value })
                      }
                      placeholder="Informations complémentaires..."
                      rows={4}
                      className="rounded-lg resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-pill"
                  >
                    Demander un devis
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="glass-card rounded-2xl overflow-hidden animate-fade-up h-[600px]">
              {/* Embed simple sans clé API, basé sur l'adresse */}
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  ADDRESS
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Filtre Tunisie - Ben Arous"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
