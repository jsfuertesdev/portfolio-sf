import React from "react";
import {
  SiAmazonaws,
  SiArduino,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { TbBackground } from "react-icons/tb";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Chat with pdf",
      tech: [SiNextdotjs, SiTailwindcss, SiAmazonaws],
      link: "https://github.com/jsfuertesdev/chatwithpdf-bedrock-aws",
      cover: "/user-interface-bedrock.png",
      Background: "bg-red-500",
    },
    {
      title: "The Coach",
      tech: [SiNextdotjs, SiTailwindcss],
      link: "https://the-coach.vercel.app/",
      cover: "/TheCoach.jpg",
      Background: "bg-yellow-500",
    },
    {
      title: "expense tracker",
      tech: [SiNextdotjs, SiTailwindcss, SiFirebase],
      link: "https://expese-tracker.vercel.app/",
      cover: "/expense-tracker.jpg",
      Background: "bg-red-500",
    },
    {
      title: "Polimery project",
      tech: [SiHtml5, SiCss3, SiArduino],
      link: "https://jsfuertesdev.github.io/polymer-project/",
      cover: "/polimey-project.jpg",
      Background: "bg-red-500",
    },
    {
      title: "Piedra, papel, tijera",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://heigus.github.io/PiedraPapelTijera/",
      cover: "/PiedraPapelTijera.jpg",
      Background: "bg-yellow-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn(
                "p-2 rounded-md",
                project.Background)}
                >
                    <DirectionAwareHover imageUrl={project.cover}
                        className="w-full space-y-5 cursor-pointer"
                    >
                      <div className="space-y-5">
                        <h1 className="text-2xl font-bold">{project.title}</h1>
                        <div className="flex items-center gap-5">
                            {project.tech.map((Icon, index)=>{
                                return <Icon className="w-8 h-5" key={index}/>
                            })}
                        </div>
                      </div>
                    </DirectionAwareHover>
                </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
