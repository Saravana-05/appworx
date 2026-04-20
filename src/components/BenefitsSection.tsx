import { useEffect, useRef, useState } from "react";
import benefitsVideo from "@/assets/benefits-video.mp4.asset.json";
import { Clock, RefreshCw, Users, DollarSign } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import benefitsVideoFile from "../assets/benefits-video.mp4";

const benefits = [
  { icon: Clock, title: "Faster Time-to-Value", desc: "Pre-built solutions deploy in weeks. Custom builds via agile iterations deliver progress from day one." },
  { icon: RefreshCw, title: "Future-Proof Architecture", desc: "Built with modern MLOps practices — solutions improve over time and are easy to update." },
  { icon: Users, title: "Talent Augmentation", desc: "We transfer knowledge to your internal teams, upskilling your workforce beyond just delivering code." },
  { icon: DollarSign, title: "Lower Total Cost", desc: "Shared investment across many clients makes advanced tech accessible without internal build costs." },
];

const BenefitsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { ref: parallaxBg, offset: bgOffset } = useParallax(0.2);
  const { ref: parallaxContent, offset: contentOffset } = useParallax(-0.1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Video background */}
      <div ref={parallaxBg} className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${bgOffset * 0.5}px)` }}>
        <video
          src={benefitsVideoFile}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/8 blur-[120px] animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/6 blur-[140px] animate-float" style={{ animationDelay: "3s" }} />

      <div ref={parallaxContent} className="container mx-auto px-6 relative will-change-transform" style={{ transform: `translateY(${contentOffset}px)` }}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            Benefits
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Cross-Cutting <span className="text-gradient">Benefits</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group relative glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 hover:glow-primary ${
                visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <b.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
