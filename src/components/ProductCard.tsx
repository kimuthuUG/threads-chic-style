import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {hasDiscount && (
            <Badge className="absolute top-2 right-2 bg-accent">
              -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
            </Badge>
          )}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <Button size="icon" variant="secondary" onClick={(e) => {
              e.preventDefault();
              onAddToCart?.();
            }}>
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium hover:text-accent transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <p className="font-semibold">${product.price.toFixed(2)}</p>
          {hasDiscount && (
            <p className="text-sm text-muted-foreground line-through">
              ${product.originalPrice!.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
