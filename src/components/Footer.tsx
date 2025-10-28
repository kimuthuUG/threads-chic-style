import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Tiktok } from "lucide-react";

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
              <a href="https://www.instagram.com/_threads.lk_?igsh=MWxubGFtdzd0bnZsOA==" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="facebook.com/share/14JV5Mqxifx/?mibextid=wwXIfr" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
               <a href="https://www.tiktok.com/@threads3080?_t=ZS-90uy7SQMX5U&_r=1" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M210 80a64 64 0 0 1-38-12v58a74 74 0 1 1-74-74h6v30a44 44 0 1 0 44 44V24h28a64 64 0 0 0 34 56Z" />
                </svg>
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
