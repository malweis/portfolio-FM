import {
  SiBun,
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebgl,
  SiZig,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Banco Atlas",
    description:
      "Web banking application built with Vite, React, Tailwind CSS",
    technologies: [SiTypescript, SiReact, SiVite, SiTailwindcss, SiRedux],
    techNames: ["TypeScript", "React", "Vite", "Tailwind CSS", "Redux"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://vitejs.dev/",
      "https://tailwindcss.com/",
      "https://redux-toolkit.js.org/",
    ],
    github: "https://github.com/malweis",
    demo: "https://secure.atlas.com.py/atlasdigital",
    image: "/projects/atlas.png",
    available: true,
  },
  {
    id: 0,
    name: "Next.js blog",
    description:
      "A blog built with Next.js, Bun, and Tailwind CSS using a CMS to let the client handle the content.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiBun],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Bun"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://bun.sh/",
    ],
    github: "https://github.com/malweis/blog-shadcn",
    demo: "https://blog-shadcn-eh3m-dljvqkf1i-malweis.vercel.app/",
    image: "/projects/blog.png",
    available: true,
  },
  {
    id: 1,
    name: "Bussiness landing page",
    description:
      "A simple landing page built with React, Tailwind CSS as a fast and responsive solution for a small business.",
    technologies: [SiNextdotjs, SiTypescript, SiReact],
    techNames: ["Next.js", "Typescript", "React"],
    techLinks: [
      "https://nextjs.org/",
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
    ],
    github: "https://github.com/karthikmudunuri/VRMALL",
    demo: "https://mock-bussines.vercel.app/",
    image: "/projects/busines.png",
    available: true,
  },
];
