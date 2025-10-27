import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Truck, Shield, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
      >
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
          {hasDiscount && (
            <Badge className="absolute top-4 right-4 bg-accent text-lg px-4 py-2">
              -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
              {hasDiscount && (
                <p className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice!.toFixed(2)}
                </p>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block font-semibold mb-3">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className="min-w-[60px]"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block font-semibold mb-3">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                  onClick={() => setSelectedColor(color)}
                  className="min-w-[80px]"
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => {
                if (!selectedSize || !selectedColor) {
                  alert("Please select size and color");
                  return;
                }
                addToCart(product, selectedSize, selectedColor);
              }}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">30-Day Returns</p>
                <p className="text-sm text-muted-foreground">Easy returns and exchanges</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={() => addToCart(relatedProduct, relatedProduct.sizes[0], relatedProduct.colors[0])}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
