import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Data Analyst",
  "Web Developer",
  "Python Developer",
  "Power BI Expert",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleDownloadResume = () => {
    window.open("/Shivam_Singh_Resume.pdf", "_blank");
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 dark:from-purple-900/30 dark:via-background dark:to-pink-900/30" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg mb-4" data-testid="text-greeting">
              Hello, I'm
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              data-testid="text-name"
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Shivam Singh
              </span>
            </h1>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12 text-nowrap"
              data-testid="text-role"
            >
              And I'm a{" "}
              <span className="text-pink-500">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p
              className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed"
              data-testid="text-bio"
            >
              Aspiring Data Analyst with hands-on experience in Python, SQL, Excel,
              and Power BI. Skilled in data cleaning, exploratory data analysis,
              and dashboard development. Passionate about delivering data-driven
              insights and supporting business decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white border-0 px-8"
                data-testid="button-download-resume"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="hero-profile-image"
          >
            <div className="relative max-w-[280px] md:max-w-[320px] lg:max-w-[384px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-2xl opacity-30 dark:opacity-50 animate-pulse" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                   
                    <img src="/profile.jpeg" alt="Shivam Singh" className="w-full h-full object-cover rounded-full"/>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
