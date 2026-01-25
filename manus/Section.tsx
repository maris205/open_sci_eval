import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, subtitle, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("mb-16 md:mb-24 relative group", className)}>
      {/* Decorative left border line */}
      <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-px bg-border group-hover:bg-primary/30 transition-colors hidden md:block" />
      
      {(title || subtitle) && (
        <header className="mb-8 border-b border-border pb-4">
          {subtitle && (
            <span className="font-mono text-xs text-primary mb-2 block uppercase tracking-widest">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl font-mono font-bold uppercase tracking-tight text-foreground">
              {title}
            </h2>
          )}
        </header>
      )}
      
      <div className="prose prose-invert max-w-none prose-headings:font-mono prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-none">
        {children}
      </div>
    </section>
  );
}
