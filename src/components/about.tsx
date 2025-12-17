import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const tabs = ["Skills", "Experience", "Education"] as const;
type TabType = (typeof tabs)[number];

const skillsData = [
  {
    category: "Data & Analytics",
    items: [
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "SQL Queries",
      "Power BI Dashboards",
      "DAX Measures",
    ],
  },
  {
    category: "Programming & Tools",
    items: [
      "Python",
      "pandas",
      "NumPy",
      "SQL",
      "Power BI",
      "Power Query",
      "Excel",
    ],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Bootstrap","Flask","Django",],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Problem-Solving", "Teamwork", "Leadership"],
  },
];

const experienceData = [
  {
    title: "Data Analysis and Machine Learning Intern",
    company: "National Institute of Electronics & Information Technology",
    period: "Sep 2022 - Sep 2022",
    description:
      "Applied Python, pandas, NumPy for data cleaning, manipulation, and visualization. Conducted EDA to identify trends and supported ML model development using scikit-learn.",
  },
  {
    title: "Networking Intern",
    company: "National Institute of Electronics & Information Technology",
    period: "Jul 2023 - Sep 2023",
    description:
      "Gained foundational networking knowledge and hands-on experience with Cisco technologies. Configured and troubleshot network devices using routing, switching protocols.",
  },
];

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    period: "Sep 2024 - Oct 2027 (Pursuing)",
    details: "",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Gujarat Technological University",
    period: "Oct 2021 - Aug 2024",
    details: "CGPA: 8.00",
  },
  {
    degree: "SSC",
    institution: "School Boon Max English Medium School",
    period: "2021",
    details: "Percentage: 61%",
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState<TabType>("Skills");

  return (
    <section
      id="about"
      className="py-20 relative"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-about-title">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Aspiring Data Analyst with Diploma in Information Technology and
            hands-on experience in Python, SQL, Excel, and Power BI. Currently
            pursuing B.Tech in Computer Science and Engineering.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start translate-x-[110px]  ">
          <motion.div
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    <img src="/about.jpeg" alt="Shivam Singh" className="w-full h-full object-cover "/>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/3 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`button-tab-${tab.toLowerCase()}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                {activeTab === "Skills" && (
                  <div className="space-y-6" data-testid="content-skills">
                    {skillsData.map((category) => (
                      <div key={category.category}>
                        <h4 className="text-lg font-semibold mb-3 text-foreground">
                          {category.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="px-3 py-1 dark:bg-[grey] bg-[#e6e6e6]"
                              data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Experience" && (
                  <div className="space-y-6" data-testid="content-experience">
                    {experienceData.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-pink-500/50"
                      >
                        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-pink-500" />
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-pink-500 text-sm mb-1">{exp.company}</p>
                        <p className="text-muted-foreground text-sm mb-2">
                          {exp.period}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Education" && (
                  <div className="space-y-6" data-testid="content-education">
                    {educationData.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 border-l-2 border-purple-500/50"
                      >
                        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-purple-500" />
                        <h4 className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-purple-500 text-sm mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground text-sm mb-1">
                          {edu.period}
                        </p>
                        {edu.details && (
                          <p className="text-muted-foreground text-sm">
                            {edu.details}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}