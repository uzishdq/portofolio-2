import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Connect01() {
  return (
    <section className="py-20 flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-6">
        <div className="relative z-10 space-y-3 text-center">
          <h2 className="text-3xl font-semibold lg:text-5xl">Contacts</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl font-light text-sm md:text-md">
            Feel free to reach out through any of the platforms below.
          </p>
        </div>
        <div className="px-4 mx-auto max-w-4xl mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="bg-background gap-x-6 grid md:grid-cols-2 dark:bg-muted/50 rounded-xl border px-6 pb-10 pt-3 shadow-xl">
            <Integration
              icon={<Linkedin />}
              name="LinkedIn"
              links="https://www.linkedin.com/in/fauji-shiddiq/"
              description="Connect with me professionally and explore my career journey."
            />
            <Integration
              icon={<Github />}
              name="Github"
              links="https://github.com/uzishdq/"
              description="Explore my open-source projects and code repositories."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Integration = ({
  icon,
  name,
  links,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  links: string;
  description: string;
}) => {
  return (
    <Link
      target="_blank"
      href={links}
      className="grid hover:bg-secondary hover:rounded-xl grid-cols-[auto_1fr_auto] items-center rounded-b-none gap-3 border-b border-dashed p-3 last:border-b-0"
    >
      <div className="bg-muted border-foreground/5 flex size-12 items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};
