import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Precision Health and Dentistry",
    description: "Delivering modern,reliable, and effective healthcare solutions.",
    image: "/projects/project1.png",
    tags: ["wordpress", "theme"],
    demoUrl: "https://phdc.pk/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Social Media Management ",
    description:
      "A Project where i Manage the Whole Social Media account for a company ",
    image: "/projects/project2.png",
    tags: ["Social Media", "Social Media" , "Meta" , "Facebook"],
    // demoUrl: "https://nbctraders.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Pakwanghar",
    description:
      "pakwanghar.online.pk is an initiative of Deen Foods and Catering, a well known and famous name in catering.",
    image: "/projects/project3.png",
    tags: ["wordpress", "theme"],
    demoUrl: "https://pakwanghar.online/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "GULFLAND Developers and Builders",
    description:
      "Gulf Land Developers, is synonymous with providing an excellent antidote, to mass-produced automotive manufacturing in Pakistan",
    image: "/projects/project4.png",
    tags: ["wordpress", "theme"],
    demoUrl: "https://gulflanddevelopers.com/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "PRIME INSTA",
    description:
      "PRIME INSTA comprehensive support for international nurses who are interested in establishing a career in the United States.",
    image: "/projects/project5.png",
    tags: ["wordpress", "theme"],
    demoUrl: "https://primeinsta.com/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Plastine Ads",
    description:
      "HighKies Technology Discover our global presence and learn more about our leadership.Optimized audience reach and engagement using data-driven strategies and performance tracking.",
    image: "/projects/project6.png",
    tags: ["Ads", "digital Marketing"],
    // demoUrl: "https://highkies.com/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Eesa Organics",
    description:
      "A project where they bring you pure, chemical-free, and naturally fresh products — carefully sourced, hygienically packed, and delivered with guaranteed freshness and taste",
    image: "/projects/project7.png",
    tags: ["wordpress", "theme"],
    demoUrl: "https://eesaorganica.com/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
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
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a> */}
        </div>
      </div>
    </section>
  );
};
