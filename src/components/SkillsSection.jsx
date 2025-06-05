import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Lenguajes
  { name: "Python", category: "lenguajes" },
  { name: "JavaScript", category: "lenguajes" },
  { name: "Java", category: "lenguajes" },

  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Expo", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "herramientas" },
  { name: "Docker", category: "herramientas" },
  { name: "Figma", category: "herramientas" },
  { name: "VS Code", category: "herramientas" },
  { name: "Prisma", category: "herramientas" },
  { name: "Apis", category: "herramientas" },
];

const categories = [
  "todas",
  "lenguajes",
  "frontend",
  "backend",
  "herramientas",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "todas" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Fondo gris semi-transparente con blur solo detrás del contenido */}
        <div className="bg-gray-500/30 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mis <span className="text-primary"> Habilidades</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level || "80%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
