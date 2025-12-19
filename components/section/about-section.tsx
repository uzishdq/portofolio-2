"use client";

import { MagicText } from "../magic-text";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center w-full bg-white dark:bg-neutral-950 md:px-10">
      <MagicText
        title="Hi, I'm Fauji"
        paragraph1="A Full-Stack Web Developer focused on building reliable and scalable web applications. I have hands-on experience developing real-world systems, including inventory management platforms and secure RESTful APIs."
        paragraph2="I enjoy learning by building practical solutions and continuously improving my skills through real project development."
        paragraph3="Outside of coding, I actively explore new technologies to continuously improve my skills and deliver better results."
      />
    </section>
  );
}
