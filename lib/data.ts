import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { SiNextdotjs } from 'react-icons/si';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Analyst Programmer",
    location: "Teknomatrik Sdn Bhd",
    description:
      "After serve as interns they take as permenanet employee. They assigned me as Analyst Programmer",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Software Engineer",
    location: "Dynisco",
    description:
      "I worked as a software engineer almost 3 years in Dynisco my task mostly as fullstack developer. I learned web development here and the stack is React, .Net Core, Microsoft Azure and Azure SQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Senior System Engineer",
    location: "Fujitsu System Global Solution ",
    description:
      "Joined few project in Fujitsu from banking, ERP and Power BI. Guide junior, perform code reviews.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Fullstack Developer",
    location: "ABOD Technology Services ",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),
    date: "May 2023 - Mar 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Ship Handling Simulator",
    description:
      "Allow navy to train handling ship ",
    tags: ["WinForm", ".Net", "C#", "MSSQL", "Unity"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Dynisco Cloud Connect",
    description:
      "Cloud-based system designed to gather and manage real-time data from various manufacturing devices, helping companies improve production efficiency and product quality.",
    tags: ["React", "Javascript", ".Net Core", "C#", "Azure Cloud Service"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mitsubishi Next Banking System",
    description:
      "The system want to migrate to the new operating system. My task is to fix all the bugs and issue",
    tags: ["C++", "VB", "WinForm"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "SAP Fiori",
    description:
      "Production planning system allow to track raw material in Inhose or from supplier.",
    tags: ["SAP UI5", "BAPI", "SAP S4", "SAP Hana"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "TeamStore DX",
    description:
      "Point Of Sales Sytem.",
    tags: ["HTML", ".NET", "C#", "Batch Scripting","MSSQL"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Anaplan Power BI",
    description:
      "A public web app for data analytic, worked as model builder in this project",
    tags: ["Anaplan"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Lonpac Insurance ",
    description:
      "Maintain and support new feature for all Loanpac insurance system from backoffice, customer-site and cms.",
    tags: ["Angular", ".Net Core", "C#", "MSSQL", "DNN CMS", "Knockout JS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "KerjaBaikBaik ",
    description:
      "A public web app that allow user to add review for employee. If a company want to hire someone they can use that platform to make backgroudn checking.",
    tags: ["React", "Next.js","TypeScript", ".Net Core", "Tailwind", "Docker", "C#", "MSSQL"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Git",
  "Tailwind",
  "Redux",
  ".Net",
  "C#",
  "VB",
  "Java",
  "SAP",
] as const;
