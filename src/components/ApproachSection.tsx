import { useEffect, useRef, useState } from "react";
import approachVideo from "@/assets/approach-video.mp4.asset.json";
import { Cpu, Puzzle, Wrench } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import approachVideoFile from "../assets/approach-video.mp4";

const tiers = [
  { icon: Cpu, title: "Products", desc: "Best-in-class AI engines for critical functions", delay: 0 },
  { icon: Puzzle, title: "Pre-Built Solutions", desc: "Deploy industry-specific AI in weeks", delay: 150 },
  { icon: Wrench, title: "Custom Builds", desc: "Tailored cognitive systems for unique challenges", delay: 300 },
];

const ApproachSection = () => {
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
    <section id="approach" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div ref={parallaxBg} className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${bgOffset * 0.5}px)` }}>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[180px]" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div ref={parallaxContent} className="container mx-auto px-6 relative will-change-transform" style={{ transform: `translateY(${contentOffset}px)` }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video side */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              visible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-16 scale-95"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden glow-accent group">
              <video
                src={approachVideoFile}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className={`absolute -bottom-4 -right-4 glass-strong rounded-2xl p-5 glow-primary transition-all duration-1000 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="font-display text-2xl font-bold text-gradient">AI + Business</div>
              <div className="text-sm text-muted-foreground">Pragmatic Intelligence</div>
            </div>

            {/* Animated ring */}
            <div className="absolute -top-3 -left-3 w-20 h-20 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              We Speak Two Languages:{" "}
              <span className="text-gradient">Business & AI</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Digital transformation isn't just about moving to the cloud; it's about moving to intelligence.
              We bridge the gap between complex AI research and real-world business outcomes with our
              pragmatic three-tiered model.
            </p>

            <div className="space-y-4">
              {tiers.map((item) => (
                <div
                  key={item.title}
                  className={`group flex items-start gap-4 glass rounded-xl p-5 hover:border-primary/40 hover:glow-primary transition-all duration-500 hover:-translate-y-0.5 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${item.delay + 400}ms` }}
                >
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
