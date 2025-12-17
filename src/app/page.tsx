"use client"
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useTheme } from "@/lib/theme";

function App(){
  return <ThemeProvider>
      <Page/>
  </ThemeProvider>
}
function Page() {
    const { theme, } = useTheme();

  return (
  <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className={`min-h-screen bg-background text-foreground ${theme}` } >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

