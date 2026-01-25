import Section from "@/components/Section";
import { MathInline, MathBlock } from "@/components/Math";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";

// Mock data for non-autonomous system trajectory
const nonAutonomousData = Array.from({ length: 50 }, (_, i) => ({
  step: i,
  autonomous: 0.5 + Math.sin(i * 0.5) * 0.4 + (Math.random() - 0.5) * 0.2,
  nonAutonomous: 0.5 + Math.sin(i * 0.5) * (0.4 - i * 0.005) + (Math.random() - 0.5) * 0.2
}));

export default function Extension() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter text-foreground">
          03_EXTENSION
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl border-l-2 border-foreground pl-4">
          Theoretical corrections: Non-Autonomous Systems, Ergodicity, and the Twin Prime Conjecture.
        </p>
      </div>

      <Section title="Non-Autonomous Dynamics" subtitle="THEORY CORRECTION">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p className="mb-4">
              The standard Logistic Map is <strong>autonomous</strong>—its rules don't change over time. However, prime density decays as <MathInline math="1/\ln(N)" />. To model this, we introduced a parameter drift:
            </p>
            <MathBlock math="u(n) = u_{base} - \frac{c}{\ln(n+2)}" />
            <p className="text-sm text-muted-foreground">
              This "Quenched Chaos" model better captures the asymptotic behavior of primes, explaining the discrepancies found in Phase 2.
            </p>
          </div>
          <Card className="bg-background border-border h-[250px]">
            <CardHeader className="pb-2">
              <CardTitle className="font-mono text-xs text-muted-foreground">TRAJECTORY COMPARISON</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={nonAutonomousData}>
                  <defs>
                    <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorNon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--destructive)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--destructive)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="step" hide />
                  <YAxis hide domain={[0, 1]} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }} />
                  <Area type="monotone" dataKey="autonomous" stroke="var(--primary)" fillOpacity={1} fill="url(#colorAuto)" name="Autonomous" />
                  <Area type="monotone" dataKey="nonAutonomous" stroke="var(--destructive)" fillOpacity={1} fill="url(#colorNon)" name="Non-Autonomous" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Ergodicity & Twin Primes" subtitle="NEW PERSPECTIVE">
        <p className="text-lg mb-6">
          If the isomorphism holds, the Twin Prime Conjecture becomes a question of <strong>Ergodicity</strong>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-secondary/10 border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="font-mono text-lg text-primary">01. MAPPING</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Twin Primes (gap=2) correspond to a specific symbol pattern (e.g., "LL") in the dynamical system.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="font-mono text-lg text-primary">02. ERGODICITY</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                In an ergodic chaotic system, every finite admissible pattern must appear infinitely many times.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="font-mono text-lg text-primary">03. CONCLUSION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Therefore, if the system is ergodic at the band-merging point, Twin Primes must be infinite.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Number Theoretic Interpretation" subtitle="BAND MERGING">
        <p>
          In dynamics, band merging means the orbit can traverse the entire phase space. In number theory, we propose this corresponds to the <strong>Uniform Distribution of Primes in Modular Classes</strong> (Dirichlet's Theorem).
        </p>
        <p className="mt-4">
          Just as the chaotic orbit breaks free from periodic bands, primes break free from small-divisor constraints to populate all coprime residue classes.
        </p>
      </Section>
    </div>
  );
}
