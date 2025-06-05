import { ArrowRight, ExternalLink, Github } from "lucide-react";
import pokestoreImg from "../assets/pokestore.png";
import IterativosImg from "../assets/iterativos.png";
import TutoresImg from "../assets/tutores.png";

const projects = [
  {
    id: 1,
    title: "PokeStore",
    description:
      "Un e-commerce de Pokémon que consume la PokeAPI. Tiene funcionalides de carrito, autenticación de precios, likes y estrellas.",
    image: pokestoreImg,
    tags: ["React", "Vite", "Api", "JavaScript", "TypeScript"],
    demoUrl:
      "https://pokestore-frontend-cisco890-cisco890s-projects.vercel.app/",
    githubUrl: "https://github.com/Cisco890/Ecommerce",
  },
  {
    id: 2,
    title: "Métodos Numéricos Iterativos ",
    description:
      "Programa que realiza los métodos numéricos iterativos RK4 y Adams-Bashforth-Moulton para resolver ed de primer y segundo orden al igual que un sistema de ecuaciones.",
    image: IterativosImg,
    tags: ["Python", "Matplotlib", "mp.math"],
    demoUrl: "#",
    githubUrl: "https://github.com/Cisco890/ecaus",
  },
  {
    id: 3,
    title: "TutoresUvg",
    description:
      "Aplicación móvil y web para la Universidad del Valle de Guatemala que permite a los estudiantes encontrar tutores para materias específicas. Incluye funcionalidades de autenticación, búsqueda y gestión de perfiles.",
    image: TutoresImg,
    tags: [
      "React",
      "Expo",
      "Api",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Cisco890/Proyecto_Software",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Fondo gris semi-transparente con blur solo detrás del contenido */}
        <div className="bg-gray-500/30 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary"> Proyectos </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estos son algunos de los proyectos en los que he trabajado, cada uno
            fue un reto distinto que me permitió aprender y mejorar mis
            habilidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground hover:underline"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/Cisco890"
            >
              Mira más en mi GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
