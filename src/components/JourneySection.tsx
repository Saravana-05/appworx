import { useEffect, useRef, useState } from "react";
import { Rocket, Settings, Trophy } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";

const steps = [
  {
    num: "01",
    icon: Rocket,
    title: "Start Fast",
    desc: "Deploy a Pre-Built Solution to solve an immediate, industry-wide challenge and prove the value of AI to your stakeholders.",
    gradient: "from-primary to-accent",
  },
  {
    num: "02",
    icon: Settings,
    title: "Optimize Deeply",
    desc: "Integrate a focused Product to enhance a specific, high-impact function within your operations.",
    gradient: "from-accent to-primary",
  },
  {
    num: "03",
    icon: Trophy,
    title: "Differentiate Boldly",
    desc: "Invest in a Custom Solution to build your unique, defensible AI advantage that sets you apart.",
    gradient: "from-primary to-accent",
  },
];

const JourneySection = () => {
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
    <section id="journey" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div ref={parallaxBg} className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${bgOffset * 0.5}px)` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[200px]" />
      </div>

      <div ref={parallaxContent} className="container mx-auto px-6 relative will-change-transform" style={{ transform: `translateY(${contentOffset}px)` }}>
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-primary" />
            Your Journey
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Client Journey with <span className="text-gradient">AppworX</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A partnership that evolves with your needs, always focused on transforming business through intelligence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-px hidden md:block transition-all duration-[2000ms] ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "linear-gradient(180deg, hsl(var(--primary) / 0.6), hsl(var(--accent) / 0.6), transparent)",
            }}
          />

          {/* Glowing dot on the line */}
          <div
            className={`absolute left-[29px] w-3 h-3 rounded-full bg-primary glow-primary hidden md:block animate-float transition-all duration-1000 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ top: "20%" }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex items-start gap-8 transition-all duration-1000 ease-out ${
                  visible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-12 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 250 + 300}ms` }}
              >
                <div
                  className={`hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} items-center justify-center glow-primary group transition-all duration-500 hover:scale-110 hover:rotate-3`}
                >
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="group glass rounded-2xl p-8 flex-1 hover:border-primary/40 hover:glow-primary transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="md:hidden text-primary font-display font-bold text-sm">{step.num}</span>
                      <h3 className="font-display text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
