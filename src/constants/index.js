import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    tripguide,
    threejs,
    visual,
    boot,
    calcage,
    paws,
    hh,
    vit,
    narayana,
    dps,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"visual",
      icon: visual,
    },
    {
      name:"bootstrap",
      icon: boot,
    },
  ];
  
  const experiences = [
    {
      title: "Btech Computer Science and Engineering",
      company_name: "Vellore Institute of Technology",
      icon: vit,
      iconBg: "#383E56",
      date: "Sep 2021 - 2025 (Ongoing)",
      points: [
        "CGPA: 9.40",
        "Coursework: Data Structures and Algorithm, Operating Systems, DBMS, Computer Networks, etc."
        
      ],
    },
    {
      title: "Class XII",
      company_name: "Narayana Junior College",
      icon: narayana,
      iconBg: "#E6DEDD",
      date: "May 2019 - Apr 2021",
      points: [
        "Scored 98.4%",
        "100% in Mathematics",
      ],
    },
    {
      title: "Class X",
      company_name: "Delhi Public School Nacharam",
      icon: dps,
      iconBg: "#383E56",
      date: "May 2019",
      points: [
        "Scored 95.5%",
        "100% in Foundation of IT",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hungry Hive",
      description:
        "A full stack food delivery web application with various functionalities like login, signup, add to cart, authenication ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: hh,
      source_code_link: "https://github.com/rudra1ghosh/Hungry-Hive",
    },
    {
      name: "Calc Age",
      description:
        "Web application that enables users to calculate their age",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: calcage,
      source_code_link: "https://rudra1ghosh.github.io/CalcAge/",
    },
    {
      name: "Paws and Hearts",
      description:
        "A fun dating website made for pets : )",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: paws,
      source_code_link: "https://rudra1ghosh.github.io/Paws-and-Hearts/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };