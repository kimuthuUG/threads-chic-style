import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">THREADS</h3>
            <p className="text-sm text-muted-foreground">
              Premium fashion for the modern lifestyle. Quality meets style.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link to="/products?category=Men" className="text-muted-foreground hover:text-foreground">Men</Link></li>
              <li><Link to="/products?category=Women" className="text-muted-foreground hover:text-foreground">Women</Link></li>
              <li><Link to="/products?category=Accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Size Guide</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Threads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
