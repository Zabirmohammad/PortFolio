"use client";
import Link from "next/link";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
//import { link } from "fs";

type ProjectProps = (typeof projectsData)[number];

export default function Publication({
  title,
  authors,
  journal_name,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Link href={link} target="_blank">
        <section className="bg-gray-100 max-w-[56rem] max-h-[16rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[65%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className=" leading-relaxed font-serif text-gray-700 dark:text-white/70">
              {authors}
            </p>
            <p className=" leading-relaxed font-mono text-gray-700 dark:text-white/70">
              {journal_name}
            </p>
            <a className="font-small" href={link} target="_blank">
              <span className=" font-medium underline">See More</span>
            </a>

            {/* <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>  */}
          </div>

          <Image
            src={imageUrl}
            alt="Pubilocations I worked "
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Link>
    </motion.div>
  );
}
