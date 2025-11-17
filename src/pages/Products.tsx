import { useState, useMemo } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, SortAsc } from "lucide-react";
import productsBanner from "@/assets/products-banner.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedApplication, setSelectedApplication] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const brands = useMemo(() => {
    const brandSet = new Set(products.map((p) => p.brand));
    return Array.from(brandSet).sort();
  }, []);

  const applications = useMemo(() => {
    const appSet = new Set(products.flatMap((p) => p.application));
    return Array.from(appSet).sort();
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory)
        return false;
      if (selectedBrand !== "all" && product.brand !== selectedBrand)
        return false;
      if (
        selectedApplication !== "all" &&
        !product.application.includes(selectedApplication)
      )
        return false;
      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "brand") return a.brand.localeCompare(b.brand);
      return 0;
    });

    return filtered;
  }, [selectedCategory, selectedBrand, selectedApplication, sortBy]);

  const FilterButton = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-pill text-sm font-medium transition-all ${
        active
          ? "bg-accent text-white"
          : "bg-white border border-line text-steel hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsBanner})` }}
        >
          <div className="absolute inset-0 bg-steel/75" />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="font-lora text-white mb-4 animate-fade-up">
            Notre Catalogue
          </h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-up">
            Découvrez notre gamme complète de produits pour tous vos besoins
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b border-line relative z-40">
        <div className="container-custom sticky top-[96px] bg-white/95 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Filter className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-ink">Type de produit</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={selectedCategory === "all"}
                  onClick={() => setSelectedCategory("all")}
                >
                  Tous
                </FilterButton>
                <FilterButton
                  active={selectedCategory === "huile"}
                  onClick={() => setSelectedCategory("huile")}
                >
                  Huiles
                </FilterButton>
                <FilterButton
                  active={selectedCategory === "filtre"}
                  onClick={() => setSelectedCategory("filtre")}
                >
                  Filtres
                </FilterButton>
                <FilterButton
                  active={selectedCategory === "graisse"}
                  onClick={() => setSelectedCategory("graisse")}
                >
                  Graisses
                </FilterButton>
              </div>
            </div>
            {/* Toggle filters on mobile */}
            <div className="md:hidden mb-6 text-center">
              <Button
                onClick={() => setShowFilters((prev) => !prev)}
                variant="outline"
                className="rounded-pill"
              >
                {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
              </Button>
            </div>
            {showFilters && (
              <div className="space-y-6 transition-all duration-200 ease-in-out">
                {/* Filtres ici */}
              </div>
            )}

            {/* Brand Filter */}
            <div>
              <h3 className="font-semibold text-ink mb-3">Marque</h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={selectedBrand === "all"}
                  onClick={() => setSelectedBrand("all")}
                >
                  Toutes
                </FilterButton>
                {brands.map((brand) => (
                  <FilterButton
                    key={brand}
                    active={selectedBrand === brand}
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Application Filter */}
            <div>
              <h3 className="font-semibold text-ink mb-3">Application</h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={selectedApplication === "all"}
                  onClick={() => setSelectedApplication("all")}
                >
                  Toutes
                </FilterButton>
                {applications.map((app) => (
                  <FilterButton
                    key={app}
                    active={selectedApplication === app}
                    onClick={() => setSelectedApplication(app)}
                  >
                    {app.charAt(0).toUpperCase() + app.slice(1)}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center justify-between border-t border-line pt-6">
              <div className="text-sm text-muted-foreground">
                {filteredProducts.length} produit
                {filteredProducts.length > 1 ? "s" : ""} trouvé
                {filteredProducts.length > 1 ? "s" : ""}
              </div>
              <div className="flex items-center space-x-3">
                <SortAsc className="w-5 h-5 text-accent" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-pill border border-line bg-white text-sm font-medium text-steel focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="name">Nom</option>
                  <option value="brand">Marque</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-bg">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-6">
                Aucun produit ne correspond à vos critères de recherche
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("all");
                  setSelectedApplication("all");
                }}
                variant="outline"
                className="rounded-pill"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
