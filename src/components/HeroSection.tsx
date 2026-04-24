import { useEffect, useRef, useCallback } from "react";
import { useParallax } from "@/hooks/use-parallax";
import heroVideoFile from "../assets/hero-video.mp4";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 140;

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { ref: parallaxRef, offset: bgOffset } = useParallax(0.4);
  const { ref: contentParallaxRef, offset: contentOffset } = useParallax(-0.15);

  const initParticles = useCallback((w: number, h: number) => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      if (particlesRef.current.length === 0) initParticles(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMouse);

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.02;
          p.vx += dx * force;
          p.vy += dy * force;
        }
        p.vx *= 0.99;
        p.vy *= 0.99;

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(270, 80%, 65%, ${alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(250, 90%, 70%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouse);
    };
  }, [initParticles]);

  return (
    <section
      ref={parallaxRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background video */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${bgOffset * 0.5}px)` }}
      >
        <video
          src={heroVideoFile}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-auto" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div
        ref={contentParallaxRef}
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-5xl will-change-transform pt-20 sm:pt-24 md:pt-0"
        style={{ transform: `translateY(${contentOffset}px)` }}
      >
        {/* ✅ Badge — nowrap fixed, smaller text on mobile */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 animate-fade-in max-w-[90vw] mt-2 sm:mt-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-gradient whitespace-nowrap">
            AI-Powered Enterprise Solutions
          </span>
        </div>

        {/* ✅ Heading — smaller on mobile, scales up */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8 animate-slide-up">
          Transforming Business
          <br />
          Through{" "}
          <span className="text-gradient">Intelligence</span>
        </h1>

        {/* ✅ Subtext — tighter on mobile */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 animate-slide-up stagger-2 opacity-0 px-2">
          We build the intelligence layer for your enterprise. From pre-built AI
          solutions that deploy in weeks to fully custom cognitive systems.
        </p>

        {/* ✅ Buttons — full width on mobile, side by side on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up stagger-3 opacity-0 px-4 sm:px-0">
          <a
            href="#approach"
            className="w-full sm:w-auto bg-gradient-primary text-primary-foreground px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold glow-primary hover:opacity-90 transition-all duration-300 hover:scale-105 text-center"
          >
            Explore Our Approach
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto glass text-foreground px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-card/60 transition-all duration-300 text-center"
          >
            Discuss Your Vision
          </a>
        </div>

        {/* ✅ Stats — 3 cols on all sizes but compact on mobile */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-14 sm:mt-20 animate-slide-up stagger-4 opacity-0">
          {[
            { value: "3x",  label: "Faster Deployment" },
            { value: "95%", label: "Client Retention" },
            { value: "50+", label: "Enterprise Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;