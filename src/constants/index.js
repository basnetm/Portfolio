import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-4.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate backend developer with a Bachelor's degree in Computer Science and Information Technology (BSc. CSIT) from NIST College. With practical experience gained through an internship at Mining Infosys, I have honed my skills in server-side development. My goal is to leverage my expertise in backend technologies to create robust and scalable applications that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated backend developer with a focus on creating efficient and scalable server-side applications. With a Bachelor's degree in Computer Science and Information Technology and hands-on experience in server-side development, I am committed to continuous learning and adapting to new technologies. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active.`;

export const EXPERIENCES = [
  {
    year: "2080/11/13 – 2081/3/19",
    role: " Full Stack Developer",
    company: "Mining Infosys Pvt. Ltd.",
    location: "Sallaghari-1, Bhaktapur",
    description: `Developed and maintained server-side logic, ensuring high performance and responsiveness to requests from the frontend. Collaborated with front-end developers to integrate user-facing elements with server-side logic. Managed database administration and optimization tasks.`,
    technologies: ["C#", "ASP.NET CORE", "MSSQL SERVER", "Python"],
  },
  {
    year: "2080/11/13 – 2081/3/19",
    role: "Software Testing",
    company: "Mining Infosys Pvt. Ltd.",
    description: `Participated in code reviews, debugging, and troubleshooting to enhance software performance and reliability. Conducted software testing to ensure the quality and functionality of applications, identifying and fixing bugs and performance issues.`,
    technologies: ["C#", "ASP.NET CORE", "MSSQL SERVER", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Developed an e-commerce site using the Django framework, providing a seamless shopping experience with a user-friendly interface, secure product management, user authentication, and payment processing.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Sky-Blade Companion",
    image: project2,
    description:
      "Developed a Unity 2D action platformer game with dynamic levels, engaging gameplay mechanics, and a visually appealing environment.",
    technologies: ["C#", "Unity"],
    link: "https://basnetmanoj.itch.io/skyblade-companion"
  },
];

export const CONTACT = {
  address: "Banepa- Nayabasti, Kavre",
  phoneNo: "9803298926",
  email: "basnetmanoj557@gmail.com",
};
