import { Briefcase, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Envuelve el contenido en un bloque con fondo semi-opaco y blur */}
        <div className="bg-gray-500/30 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            ¿Quién <span className="text-primary"> Soy?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Desarrollador Full Stack en formación
              </h3>

              <p className="text-muted-foreground">
                Estudiante de Ciencias de la Computación con habilidades en
                aprendizaje rápido, enfoque en resultados e iniciativa. Me
                destaco por ser preciso, disciplinado y por mantener altos
                estándares de calidad, asegurando la entrega de soluciones bien
                elaboradas y efectivas.
              </p>

              <p className="text-muted-foreground">
                Me involucro activamente en cada etapa del proceso de
                desarrollo, desde la concepción de ideas hasta la implementación
                fina. Mi objetivo es crecer como profesional en un entorno que
                valore la mejora continua y el trabajo colaborativo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  ¡Escríbeme!
                </a>

                {/* Enlace para descargar el CV */}
                <a
                  href="/CV_JuanFranciscoMartinez.pdf"
                  download="CV_JuanFranciscoMartinez.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Descarga mi CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Desarrollo Full Stack
                    </h4>
                    <p className="text-muted-foreground">
                      Construcción de aplicaciones web utilizando tecnologías
                      modernas como React, Node.js, PostgreSQL y Prisma
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Coordinación</h4>
                    <p className="text-muted-foreground">
                      Gestión de equipos pequeños y tareas mediante frameworks
                      ágiles como Scrum, manteniendo el enfoque en entregables
                      funcionales y mejora continua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
