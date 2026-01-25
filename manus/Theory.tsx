import Section from "@/components/Section";
import { MathInline, MathBlock } from "@/components/Math";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Theory() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter text-primary">
          01_THEORY
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl border-l-2 border-primary pl-4">
          Establishing the mathematical isomorphism between the Sieve of Eratosthenes and the Symbolic Dynamics of the Logistic Map.
        </p>
      </div>

      <Section title="The Core Hypothesis" subtitle="FOUNDATION">
        <p className="text-lg mb-6">
          The central hypothesis posits that the <strong className="text-foreground">Sieve of Eratosthenes</strong>—an ancient algorithm for finding prime numbers—is essentially a dynamical process. By encoding the "survival" (prime) and "sieved" (composite) states as a symbol sequence, we can map this process onto the symbolic dynamics of a unimodal map.
        </p>
        
        <Card className="bg-secondary/20 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle className="font-mono text-primary">Key Proposition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="italic text-lg">
              "The chaotic orbit of the Logistic Map <MathInline math="x_{n+1} = 1 - ux_n^2" /> at the band-merging point <MathInline math="u \approx 1.5437" /> is topologically equivalent to the limit system of the infinite sieve process."
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="Symbolic Sequence Synthesis" subtitle="LEMMA 1">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="mb-4">
              We define the sieve operator <MathInline math="M_p" /> for each prime <MathInline math="p" /> as a periodic symbol sequence. The state of each integer position <MathInline math="n" /> is defined as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground">
              <li><strong className="text-primary">L (Left)</strong>: Survival (Potential Prime)</li>
              <li><strong className="text-destructive">R (Right)</strong>: Sieved (Composite)</li>
            </ul>
            <p>
              The cumulative dynamic sequence <MathInline math="D_i" /> is the result of the first <MathInline math="i" /> prime sieves acting together:
            </p>
            <MathBlock math="D_i = M_{p_1} \cdot M_{p_2} \cdot ... \cdot M_{p_i}" />
          </div>
          
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="font-mono text-sm text-muted-foreground">COMPOSITION RULES</CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-sm space-y-2">
              <div className="flex justify-between p-2 border border-border bg-secondary/10">
                <span>L · L</span>
                <span className="text-primary">= L (Survival)</span>
              </div>
              <div className="flex justify-between p-2 border border-border bg-secondary/10">
                <span>L · R</span>
                <span className="text-destructive">= R (Sieved)</span>
              </div>
              <div className="flex justify-between p-2 border border-border bg-secondary/10">
                <span>R · L</span>
                <span className="text-destructive">= R (Sieved)</span>
              </div>
              <div className="flex justify-between p-2 border border-border bg-secondary/10">
                <span>R · R</span>
                <span className="text-destructive">= R (Sieved)</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 pt-2 border-t border-border">
                * "Destruction Priority": Once a number is sieved (R), it remains sieved forever.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Critical Lemmas" subtitle="MATHEMATICAL PROOF">
        <Tabs defaultValue="lemma1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/20 rounded-none border border-border p-0 h-auto">
            <TabsTrigger value="lemma1" className="rounded-none border-r border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 font-mono">LEMMA 1</TabsTrigger>
            <TabsTrigger value="lemma2" className="rounded-none border-r border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 font-mono">LEMMA 2</TabsTrigger>
            <TabsTrigger value="lemma3" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 font-mono">LEMMA 3</TabsTrigger>
          </TabsList>
          
          <div className="border border-t-0 border-border p-6 bg-background/50 backdrop-blur-sm">
            <TabsContent value="lemma1" className="mt-0 space-y-4">
              <h3 className="text-xl font-bold font-mono text-foreground">Admissibility & Truncation</h3>
              <p>
                For the cumulative sieve sequence <MathInline math="D_i" />, its subsequence of length <MathInline math="p_i^2 + 1" /> constitutes a valid <strong>Kneading Sequence</strong>.
              </p>
              <p className="text-muted-foreground text-sm">
                This lemma ensures that the sequence generated by the sieve can actually be produced by a unimodal map. It relates to Legendre's conjecture regarding prime gaps.
              </p>
            </TabsContent>
            
            <TabsContent value="lemma2" className="mt-0 space-y-4">
              <h3 className="text-xl font-bold font-mono text-foreground">Monotonic Evolution</h3>
              <p>
                Under the specific symbolic ordering defined by Milnor & Thurston, the cumulative sequences are monotonically increasing:
              </p>
              <MathBlock math="D_1 < D_2 < D_3 < ... < D_i" />
              <p className="text-muted-foreground text-sm">
                This implies that as we introduce more primes into the sieve, the "complexity" or "chaos" of the system strictly increases.
              </p>
            </TabsContent>
            
            <TabsContent value="lemma3" className="mt-0 space-y-4">
              <h3 className="text-xl font-bold font-mono text-foreground">Parameter Convergence</h3>
              <p>
                If Lemmas 1 and 2 hold, the parameter <MathInline math="u" /> of the corresponding Logistic Map must also increase monotonically:
              </p>
              <MathBlock math="u(D_1) < u(D_2) < ... < u_{\infty}" />
              <p className="text-muted-foreground text-sm">
                This predicts that the system evolves towards a specific critical point—the band merging point.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </Section>
    </div>
  );
}
