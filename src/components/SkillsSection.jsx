import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Social Media Management", level: 95, category: "Digital Marketing" },
  { name: "Meta Ads (Facebook & Instagram Ads)", level: 93, category: "Digital Marketing" },
  { name: "Google Ads", level: 80, category: "Digital Marketing" },
  { name: "Google Bussniss Profile Optimization", level: 91, category: "Digital Marketing" },
  { name: "Cotent Creation and Stragtegy", level: 94, category: "Digital Marketing" },
  { name: "Web Development", level: 96, category: "Digital Marketing" },

  // Backend
  { name: "Elementor Customization", level: 80, category: "Wordpress Development" },
  { name: "Themes & Plugins", level: 88, category: "Wordpress Development" },
  { name: "Basic HTML , CSS , JavaScript", level: 85, category: "Wordpress Development" },
  { name: "Responsive Web Design", level: 90, category: "Wordpress Development" },

  // Tools
  { name: "Canva", level: 90, category: "Tools" },
  { name: "Prompt Engineering", level: 70, category: "Tools" },
  { name: "CapCut", level: 85, category: "Tools" },
  { name: "ChatGpt", level: 95, category: "Tools" },
  { name: "Grok Ai", level: 93, category: "Tools" },
  { name: "Gemeni", level: 96, category: "Tools" },
  { name: "Element or Page builder ", level: 97, category: "Tools" },
  { name: "Budder / Hootsuite ", level: 91, category: "Tools" },
];

const categories = ["all", "Digital Marketing", "Wordpress Development", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 cursor-pointer py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
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
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
