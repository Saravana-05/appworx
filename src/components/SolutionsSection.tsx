import { useEffect, useRef, useState } from "react";
import { Zap, Shield, TrendingUp, Brain, Layers, Globe } from "lucide-react";
import solutionsVideo from "@/assets/solutions-video.mp4.asset.json";
import { useParallax } from "@/hooks/use-parallax";
import solutionsVideoFile from "../assets/solutions-video.mp4";

const solutions = [
  { icon: Zap, title: "Accelerated Time-to-Value", desc: "Deploy pre-built solutions in weeks, not years. Start seeing ROI almost immediately." },
  { icon: Shield, title: "Reduced Risk", desc: "Battle-tested solutions across multiple clients. No bleeding-edge experimentation risks." },
  { icon: TrendingUp, title: "Predictable Scaling", desc: "Defined licensing and infrastructure. Accurate budgeting and easy scaling as you grow." },
  { icon: Brain, title: "Industry Best-Practices", desc: "Encapsulated expertise with compliance and protocol knowledge built right in." },
  { icon: Layers, title: "Advanced AI Access", desc: "Computer vision, LLMs, and more — without hiring a team of PhDs." },
  { icon: Globe, title: "Vendor Independence", desc: "Open-source and cloud-agnostic. Your AI runs on your terms, in your environment." },
];

const SolutionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { ref: parallaxBg, offset: bgOffset } = useParallax(0.25);
  const { ref: parallaxContent, offset: contentOffset } = useParallax(-0.1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Video background */}
      <div ref={parallaxBg} className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${bgOffset * 0.5}px)` }}>
        <video
          src={solutionsVideoFile}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div ref={parallaxContent} className="container mx-auto px-6 relative will-change-transform" style={{ transform: `translateY(${contentOffset}px)` }}>
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            Solutions
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Strategic <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Speed and certainty for common, high-impact challenges. Years of industry-specific
            experience, packaged into deployable engines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-gradient-card glass rounded-2xl p-7 hover:border-primary/40 transition-all duration-700 hover:glow-primary hover:-translate-y-2 ${
                visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
