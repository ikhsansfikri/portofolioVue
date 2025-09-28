
import cbt  from "@/assets/projects/cbt.png";
import mitraPema from "@/assets/projects/mitra-pema.png";
import umkmPema from "@/assets/projects/umkm-pema.png";
import indatu from "@/assets/projects/indatu.png";

const portfolioData = {
  name: "M. Ikhsan Fikri",
  description: "A fresh graduate in Computer Science with a strong interest in Full Stack Development and DevOps/Cloud. I love building modern, responsive, and user-friendly web applications. Let's create something amazing together!",
  github: "https://github.com/ikhsansfikri",
  instagram: "https://www.instagram.com/ikhsansfikri/",
  linkedin: "https://www.linkedin.com/in/ikhsanfikri/",
  twitter: "https://twitter.com/ikhsansfikri",
  projects: [
    {
      id: 1,
      title: "Computer Based Testing (CBT)",
      image: cbt,
      description: "A fully-featured Computer Based Test website with features for creating, managing, and administering online exams.",
      technologies: ["Django", "React", "Bootstrap", "MySQL"],
      link: "https://cbt.ikhsanfikri.xyz"
    },
    {
      id: 2,
      title: "Vendor Management System",
      image: mitraPema,
      description: "A simple and intuitive vendor management system to help users stay organized and productive.",
      technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
      link: "https://mitra.ptpema.co.id"
    },
    {
      id: 3,
      title: "UMKM Infomation System",
      image: umkmPema,
      description: "A system designed to help small and medium-sized enterprises (SMEs) streamline and optimize their business operations.",
      technologies: ["Laravel", "React", "Tailwind CSS", "MySQL"],
      link: "https://umkm.ptpema.co.id"
    },
    {
      id: 4,
      title: "Integrated Data Management System",
      image: indatu,
      description: "An Integrated Data Integration Website designed to centralize and streamline data management across multiple systems.",
      technologies: ["CodeIgniter", "Tailwind CSS", "MySQL"],
      link: "https://indatu.unsam.ac.id"
    }
  ],
  experiences: [
    {
      role  : "Software Engineer",
      company: "Syiah Kuala University • Fulltime",
      period: "Jan 2024 - Present",
      description: [
        "Developed and maintained a procurement application and scholarship information system using PHP, Laravel, and MySQL.",
        "Managed system integration to connect the procurement application with other systems, such as finance and reporting tools.",
        "Collaborated with cross-functional teams to identify user needs and develop software solutions that meet both functional and technical requirements.",
        "Ensured smooth system operation through regular maintenance, updates, and bug fixes to improve the user experience."
      ]
    },
    {
      role: "Software Engineer",
      company: "PT. Pembangunan Aceh • Internship",
      period: "Jan 2023 - Jul 2023",
      description: [
        "Developed a frontend and backend for client services using React as a frontend, PHP, Laravel, and MySQL.",
        "Designed and implemented a system for client data management, significantly improving data accuracy and accessibility.",
        "Digitalized client current transaction system from traditional paper form to digital form."
      ]
    },
    {
      role: "Software Engineer",
      company: "Samudra University • Freelance",
      period: "Jun 2022 - Oct 2022",
      description: [
        "Developed a frontend and backend for client services using  PHP, Codeigniter, TailwindCSS, and MySQL.",
        "Designed and implemented a system for client data management, significantly improving data accuracy and accessibility.",
        "Digitalized client current transaction system from traditional paper form to digital form."
      ]
    }
  ]
}

export default portfolioData;