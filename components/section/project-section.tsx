import Image from "next/image";
import { Timeline } from "../timeline";
import { projectData } from "@/lib/constant";

export type Project = {
  year: string;
  company: string;
  title: string;
  description: string;
  tech: string[];
  img: string;
  demo?: string;
  github?: string;
};

function projectToTimelineItem(project: Project) {
  return {
    title: project.title,
    content: (
      <div className="space-y-6" key={project.title}>
        {/* Meta */}
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {project.company} • {project.year}
        </p>

        {/* Description */}
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-neutral-200 dark:border-neutral-700 px-2 py-1 text-[10px] md:text-xs text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image */}
        <Image
          src={project.img}
          alt={`${project.title} preview`}
          width={800}
          height={500}
          className="rounded-lg object-cover w-full h-40 md:h-56 lg:h-64 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05)]"
        />

        {/* Links */}
        <div className="flex gap-4 text-xs md:text-sm">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-neutral-600 dark:text-neutral-400 hover:underline"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    ),
  };
}

export default function ProjectsSection() {
  const data = projectData.map(projectToTimelineItem);

  return (
    <section id="projects" className="py-20">
      <Timeline data={data} />
    </section>
  );
}
