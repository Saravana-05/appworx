import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import ContactUsDialog from "@/components/ContactUsDialog";
import ctaVideoFile from "../assets/cta-video.mp4";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { ref: parallaxBg, offset: bgOffset } = useParallax(0.3);
  const { ref: parallaxContent, offset: contentOffset } = useParallax(-0.12);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Video background */}
      <div
        ref={parallaxBg}
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${bgOffset * 0.5}px)` }}
      >
        <video
          src={ctaVideoFile}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[180px]" />

      <div
        ref={parallaxContent}
        className="container mx-auto px-6 relative will-change-transform"
        style={{ transform: `translateY(${contentOffset}px)` }}
      >
        <div
          className={`max-w-3xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-16 glow-primary relative overflow-hidden transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          {/* Animated border shimmer */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div
              className="absolute -inset-1 animate-[spin_8s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.3), transparent, hsl(var(--accent) / 0.3), transparent)",
              }}
            />
            <div className="absolute inset-[1px] rounded-3xl bg-card/90" />
          </div>

          <div className="relative">
            <div
              className={`transition-all duration-1000 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
                Partner with AppworX today. Let's move from data to decisions at scale.
              </p>

              {/* ✅ Address block */}
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-10 bg-muted/40 px-4 py-2 rounded-full border border-border/40">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>124 City Road, London, England, EC1V 2NX</span>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <ContactUsDialog>
                <button
                  type="button"
                  className="group bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </ContactUsDialog>
              <a
                href="mailto:contact@appworx.com?subject=Consultation"
                className="glass text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-card/60 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;