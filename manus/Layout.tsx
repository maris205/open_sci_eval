import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Terminal, 
  Activity, 
  Binary, 
  Network, 
  FileText, 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", icon: Terminal, label: "00_INDEX" },
    { href: "/theory", icon: Binary, label: "01_THEORY" },
    { href: "/simulation", icon: Activity, label: "02_SIMULATION" },
    { href: "/extension", icon: Network, label: "03_EXTENSION" },
    { href: "/report", icon: FileText, label: "04_REPORT" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur z-50 sticky top-0">
        <div className="font-mono font-bold text-primary">OPEN_SCI_EVAL</div>
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur md:static md:w-64 md:border-r md:border-border flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-border hidden md:block">
          <h1 className="font-mono font-bold text-xl text-primary tracking-tighter">
            OPEN_SCI_EVAL
            <span className="block text-xs text-muted-foreground mt-1 font-normal">v.2026.01.25</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-none font-mono text-sm transition-all border border-transparent hover:border-primary/20 hover:bg-primary/5 group cursor-pointer",
                location === item.href 
                  ? "bg-primary/10 border-primary/50 text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className={cn("w-4 h-4", location === item.href ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
              <span>{item.label}</span>
              {location === item.href && (
                <span className="ml-auto w-1.5 h-1.5 bg-primary animate-pulse" />
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SYSTEM ONLINE
          </div>
          <p>MEM: 64KB OK</p>
          <p>CPU: 100% OK</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen relative scroll-smooth">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05] pointer-events-none" />
        
        <div className="container py-8 md:py-12 max-w-5xl mx-auto relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
