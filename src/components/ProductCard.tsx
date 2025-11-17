import { Button } from "./ui/button";
import { Product } from "@/data/products";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const categoryLabels = {
    huile: "Huile",
    filtre: "Filtre",
    graisse: "Graisse",
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {categoryLabels[product.category]}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">
            {product.reference}
          </span>
        </div>
        <h3 className="font-lora font-semibold text-lg mb-2 text-ink group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.viscosity && (
            <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
              {product.viscosity}
            </span>
          )}
          {product.capacity && (
            <span className="text-xs px-2 py-1 bg-steel/10 text-steel rounded-full">
              {product.capacity}
            </span>
          )}
        </div>
        <Button asChild className="w-full rounded-pill group-hover:bg-gold transition-colors">
          <Link to={`/contact?product=${product.name}`}>Demander un devis</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
