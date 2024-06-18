"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/card-hover-effect'
import { SiAmazonaws, SiDjango, SiFlask, SiGit, SiJavascript, SiMicrosoftazure, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPython, SiReact, SiRobotframework, SiSelenium, SiSqlalchemy, SiSupabase, SiSvelte, SiTailwindcss } from 'react-icons/si'

export default function skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "Flask",
      Icon: SiFlask,
    },
    {
      text: "Django",
      Icon: SiDjango,
    },
    {
      text: "Postgresql",
      Icon: SiPostgresql,
    },
    {
      text: "SQLalchemy",
      Icon: SiSqlalchemy,
    },
    {
      text: "Mongodb",
      Icon: SiMongodb,
    },
    {
      text: "Selenium",
      Icon: SiSelenium,
    },
    {
      text: "Openai API",
      Icon: SiOpenai,
    },
    {
      text: "Cloud",
      Icon: SiAmazonaws,
    },
    {
      text: "Robotframework",
      Icon: SiRobotframework,
    },
  ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills 🪓" className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={skills}/>
    </div>
  )
}
