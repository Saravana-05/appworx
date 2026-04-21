import logo from "@/assets/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-12 pb-6">
      <div className="container mx-auto px-6">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AppworX" className="w-8 h-8 rounded-lg" />
              <span className="font-display text-lg font-bold text-foreground">
                Appwor<span className="text-gradient">X</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Dedicated to Transforming Business Through Intelligence. AI-driven
              products, pre-built solutions, and custom development.
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground mb-1">Address</p>
            <p className="text-sm text-muted-foreground">124 City Road,</p>
            <p className="text-sm text-muted-foreground">London, England,</p>
            <p className="text-sm text-muted-foreground">EC1V 2NX</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground mb-1">Legal</p>
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Company Info */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-foreground mb-1">Company Info</p>
            <p className="text-sm text-muted-foreground">
              Registration No: <span className="text-foreground">10178166</span>
            </p>
            <p className="text-sm text-muted-foreground">
              VAT No: <span className="text-foreground">GB401192642</span>
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} TechMate360 Ltd trading as AppWorX. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;