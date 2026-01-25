import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Binary, Activity, Network } from "lucide-react";
import { useEffect, useRef } from "react";

// Generative background component
const ChaosBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Logistic map parameters
    let x = 0.5;
    let r = 3.5;
    const points: {x: number, y: number, age: number}[] = [];
    
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);

    const draw = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Update logistic map
      // We vary r slightly across the screen width
      for (let i = 0; i < 50; i++) {
        r = 2.8 + (Math.random() * 1.2); // Random r between 2.8 and 4.0
        x = Math.random();
        
        // Iterate to remove transient
        for(let j=0; j<20; j++) x = r * x * (1 - x);
        
        // Draw points
        const px = (r - 2.8) / 1.2 * width;
        const py = height - (x * height);
        
        ctx.fillStyle = `hsla(${200 + (x * 100)}, 70%, 50%, ${0.5 + Math.random() * 0.5})`;
        ctx.fillRect(px, py, 2, 2);
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />;
};

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center relative">
      <ChaosBackground />
      
      <div className="relative z-10 space-y-8 max-w-4xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-4">
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full"></span>
            SYSTEM STATUS: ANALYSIS COMPLETE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter leading-none glitch-hover">
            THE FINAL<br/>
            CONJECTURE
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light border-l-2 border-primary/50 pl-6 py-2 mt-6">
            Exploring the hidden link between <span className="text-foreground font-medium">Prime Distribution</span> and <span className="text-foreground font-medium">Deterministic Chaos</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-8">
          <Link href="/theory" className="group border border-border bg-card/50 p-6 hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col block">
            <Binary className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-primary transition-colors">01_THEORY</h3>
            <p className="text-sm text-muted-foreground flex-1">
              Mathematical framework linking the Sieve of Eratosthenes to Logistic Map dynamics.
            </p>
            <ArrowRight className="w-4 h-4 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0" />
          </Link>

          <Link href="/simulation" className="group border border-border bg-card/50 p-6 hover:border-destructive/50 transition-all cursor-pointer h-full flex flex-col block">
            <Activity className="w-8 h-8 text-destructive mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-destructive transition-colors">02_SIMULATION</h3>
            <p className="text-sm text-muted-foreground flex-1">
              Numerical verification of Lyapunov exponents, band merging, and parameter convergence.
            </p>
            <ArrowRight className="w-4 h-4 text-destructive mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0" />
          </Link>

          <Link href="/extension" className="group border border-border bg-card/50 p-6 hover:border-accent-foreground/50 transition-all cursor-pointer h-full flex flex-col block">
            <Network className="w-8 h-8 text-foreground mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-foreground transition-colors">03_EXTENSION</h3>
            <p className="text-sm text-muted-foreground flex-1">
              Non-autonomous systems, ergodicity, and new perspectives on the Twin Prime Conjecture.
            </p>
            <ArrowRight className="w-4 h-4 text-foreground mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0" />
          </Link>
        </div>

        <div className="pt-8">
          <Link href="/report">
            <Button asChild size="lg" className="font-mono text-lg px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
              <span>READ FULL REPORT <ArrowRight className="ml-2 w-5 h-5" /></span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
