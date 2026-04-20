import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AppworX" className="w-8 h-8 rounded-lg" />
            <span className="font-display text-lg font-bold text-foreground">
              Appwor<span className="text-gradient">X</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Dedicated to Transforming Business Through Intelligence. AI-driven products,
            pre-built solutions, and custom development.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AppworX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
