import { Linkedin, Mail, MapPin, Github, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Fondo gris semi-transparente con blur sólo detrás del contenido */}
        <div className="bg-gray-500/30 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ponte en <span className="text-primary"> Contacto</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            ¿Tienes en mente algún proyecto, colaboración o alguna pregunta? No
            dudes en contactarme y revisar mis redes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:jfmartinez890@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jfmartinez890@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium"> Ubicación</h4>
                    <p className="text-muted-foreground hover:text-primary transition-colors">
                      Ciudad de Guatemala, Guatemala
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4"> Conecta Conmigo</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/juanfranciscomartinez890/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com/Cisco890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>

            {/* FORMULARIO CON FORM SUBMIT */}
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6"> Manda un Mensaje</h3>

              <form
                className="space-y-6"
                action="https://formsubmit.co/jfmartinez890@gmail.com"
                method="POST"
              >
                {/* Campos ocultos */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://portafolio-git-main-cisco890s-projects.vercel.app" //cambiar esto por tu URL de éxito
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Nombre..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="correo@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hola, me gustaría escribirte sobre..."
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  Enviar Mensaje
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
