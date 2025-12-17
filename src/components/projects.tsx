import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Super Store Sales Dashboard",
    description:
      "Built interactive sales dashboard analyzing revenue, profit by region, category, and time period. Cleaned data with Power Query, designed star schema data model with fact/dimension tables. Created DAX measures for KPIs (Total Sales, Profit Margin).",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    link: "https://github.com/initShivam/Super-Store-Sales-Dashboard",
    github: "https://github.com/initShivam",
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    description:
      "Cleaned and preprocessed passenger data using pandas/NumPy, handling missing values and categorical encoding. Performed EDA to analyze survival patterns by age, gender, class; trained classification models.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy"],
    link: "https://github.com/initShivam/CODESOFT/tree/main/Task%201",
    github: "https://github.com/initShivam",
  },
  
  {
    id: 3,
    title: "To - Do - List",
    description:
      "This is a Flask-based To-Do List web application that allows users to register, log in, and manage tasks securely. The project demonstrates the use of Flask Blueprints, SQLAlchemy ORM, user authentication, and Jinja2 templates",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap","Flask","Python"],
    link: "https://github.com/initShivam/To-Do-List",
    github: "https://github.com/initShivam",
  },
  {
    id: 4,
    title: "Django Expense Tracker Application",
    description:
      "A Django-based Expense Tracker web application that helps users track income, expenses, and current balance with secure authentication. The project demonstrates Django fundamentals such as models, views, authentication, admin customization, and ORM aggregation.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap","Django"],
    link: "https://github.com/initShivam/Expense-Tracker/tree/main",
    github: "https://github.com/initShivam",
  },
  {
    id: 5,
    title: "Snake Game",
    description:
      "Developed Python game with collision detection and scoring system. Implemented smooth gameplay mechanics and responsive controls for an engaging user experience.",
    tech: ["Python", "Pygame", "OOP"],
    link: "https://github.com/initShivam/snake-game",
    github: "https://github.com/initShivam",
  },
  {
    id: 6,
    title: "Currency Converter",
    description:
      "Built a currency converter application with real-time exchange rate fetching. Clean UI with support for multiple currencies and conversion history.",
    tech: ["HTML", "CSS","API Integration", "Javascript"],
    link: "https://github.com/initShivam/Currency-Converter",
    github: "https://github.com/initShivam",
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-muted/30"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-projects-title">
            My{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A collection of projects showcasing my skills in data analysis,
            machine learning, and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="group h-full overflow-visible transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-testid={`card-project-${project.id}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-pink-500 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          data-testid={`link-github-${project.id}`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          data-testid={`link-external-${project.id}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-pink-500/30 text-pink-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-pink-500/50 hover:bg-pink-500/10"
          >
            <a
              href="https://github.com/initShivam"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github-profile"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
