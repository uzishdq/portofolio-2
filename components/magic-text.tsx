"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface MagicTextProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

// Komponen Word tetap sama
interface WordProps {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block align-baseline text-2xl font-semibold">
      {/* ghost text */}
      <span className="absolute inset-0 opacity-0 select-none">{children}</span>

      {/* animated text */}
      <motion.span
        style={{ opacity }}
        className="relative inline-block will-change-opacity"
      >
        {children}
      </motion.span>
    </span>
  );
};

// Komponen utama yang baru
export const MagicText: React.FC<MagicTextProps> = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start 0.25"], // efek mulai muncul dari bawah viewport
  });

  // Membagi teks menjadi array kata
  const titleWords = title.split(" ");
  const p1Words = paragraph1.split(" ");
  const p2Words = paragraph2.split(" ");
  const p3Words = paragraph3.split(" ");

  // Total kata keseluruhan untuk menghitung range yang proporsional
  const totalWords =
    titleWords.length + p1Words.length + p2Words.length + p3Words.length;

  let wordIndex = 0;

  const calculateRange = () => {
    const start = wordIndex / totalWords;
    // eslint-disable-next-line react-hooks/immutability
    wordIndex += 1;
    const end = wordIndex / totalWords;
    return [start, end];
  };

  return (
    <div ref={container} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
      {/* Title - biasanya lebih besar */}
      <h1 className="leading-relaxed mb-5">
        <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
          {titleWords.map((word, i) => {
            const range = calculateRange();
            return (
              <Word key={`title-${i}`} progress={scrollYProgress} range={range}>
                {word}
              </Word>
            );
          })}
        </span>
      </h1>

      {/* Paragraf 1 */}
      <p className="leading-relaxed mb-8">
        <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
          {p1Words.map((word, i) => {
            const range = calculateRange();
            return (
              <Word key={`p1-${i}`} progress={scrollYProgress} range={range}>
                {word}
              </Word>
            );
          })}
        </span>
      </p>

      {/* Paragraf 2 */}
      <p className="leading-relaxed mb-8">
        <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
          {p2Words.map((word, i) => {
            const range = calculateRange();
            return (
              <Word key={`p2-${i}`} progress={scrollYProgress} range={range}>
                {word}
              </Word>
            );
          })}
        </span>
      </p>

      {/* Paragraf 3 */}
      <p className="leading-relaxed mb-8">
        <span className="inline-flex flex-wrap gap-x-2 gap-y-1">
          {p3Words.map((word, i) => {
            const range = calculateRange();
            return (
              <Word key={`p3-${i}`} progress={scrollYProgress} range={range}>
                {word}
              </Word>
            );
          })}
        </span>
      </p>
    </div>
  );
};
