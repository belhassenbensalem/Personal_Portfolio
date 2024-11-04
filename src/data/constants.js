import AddixoImg from "../assets/Addixo.png";
import AiesecImg from "../assets/Aiesec.png";
import AssadImg from "../assets/Assad.jpg";
import IsimaImg from "../assets/Isima.jpg";
import aromalineImg from "../assets/aromaline.svg";
import boutiqueImg from "../assets/boutique.png";
import esp32Img from "../assets/esp32.png";
import jumanImg from "../assets/juman.svg";
import PortfolioImg from "../assets/PortfolioImg.png";
import tabagosImg from "../assets/tabagos.png";
import todoListImg from "../assets/todoList.png";
import AdobexdImg from "../assets/adobe-xd-1.svg";




export const Bio = {
    name: "Belhassen Ben Salem",
    roles: [
      "Front-End Developer",
      "Graphic Designer",
      "Iot Developer",
    ],
    description:
    "I am a dedicated IoT and embedded systems student, frontend developer, and graphic designer, always eager to take on new challenges and pursue self-development. With a blend of technical expertise and creativity, I bring ideas to life through smart solutions, intuitive interfaces, and visually engaging designs, constantly pushing my boundaries to make a meaningful impact in the world of technology and design.",
    github: "https://github.com/belhassenbensalem",
    resume:
      "https://drive.google.com/file/d/1pNhwY-V07iegml5iCcyv8XGPncVQQKpj/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/belhassen-ben-salem-793643176/",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        
        {
          name: "Angular",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
      ],
    },
    
    
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:
            "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },

        {
          name: "Adobe XD",
          image:AdobexdImg,
        },
        {
          name: "Figma",
          image:
            "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
        },
      ],
    },

    {
        title: "Graphic Design",
        skills: [
          {
            name: "Adobe Photophop",
            image:
            "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
          },
          
          {
            name: "Adobe Illustrator",
            image:
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg?uselang=fr"
          },

        ],
      
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: AddixoImg,
      role: "Python Developer Intern",
      company: "Addixo",
      date: "June 2024 - july 2024",
      desc: " Developed real-time communication systems using Python and MQTT protocol , Gained proficiency in Object-Oriented Programming (OOP)principles ,Collaborated on IoT projects, contributing to system design and implementation ,Enhanced problem-solving skills through debugging and optimizing code .",
      skills: [
        "Python",
        "OOP",
        "MQTT",
        
      ],
      doc: AddixoImg,
    },
    {
      id: 1,
      img: AiesecImg,
      role: "Project & Brand Manager",
      company: "AIESEC",
      date: "Feb 2023 - Oct 2024",
      desc: "Created Business Model Canvas (BMC) and managed project timelines ,Designed logos, marketing materials, and social media posts ,Tracked and coordinated the Organizing Committee (OC) team to ensure project milestones were me .",
      skills: [
        "Business Development",
        "Project Management",
        "Design",
        "Team Management",
      ],
      doc:AiesecImg,
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: AssadImg,
      school: "Assad ibn fourat",
      date: "2018 - 2022",
      desc: "",
      degree: "Mathematics Baccalaureate",
    },
    {
      id: 1,
      img: IsimaImg,
      school: "higher institute of computer science | Mahdia",
      date: "2012 - 2025",
      desc: "Licensed in IoT and Embedded Systems, with a focus on integrating hardware and software to create innovative solutions.",
      degree: "license in Iot & Embaded system ",
    },
  ];
  
  export const projects = [
    {
      id: 11,
      title: "ToDo List",
      date: "Jan 2024",
      description:
        "A dynamic To-Do List application developed with Angular, featuring a responsive UI and structured components. The app enables users to create, edit, and delete tasks with ease. Leveraging Angular's component-based architecture, it includes efficient data binding, modular organization, and interactive features.",
      image:
      todoListImg,
      tags: [
        "Angular",
      ],
      category: "web app",

    },
    
    
    {
      id: 9,
      title: "Personal Portfolio",
      date: "Jul 2023",
      description:
      "A custom-built personal portfolio showcasing my skills, projects, and experiences, designed entirely with HTML and CSS. The portfolio features a clean, minimalist layout with responsive design, ensuring an optimal experience across all devices.",
      image:PortfolioImg,
      tags: [
        "Html",
        "Css",
        "javaScript",
      ],
      category: "web app",

    },
    {
      id: 4,
      title: "ESP32_CAM project",
      date: "Jan 2023",
      description:
        "Developed a real-time monitoring dashboard using ESP32-CAM to visualize sensor data, including temperature, humidity, gas, and fire levels, with live updates. Integrated the MQTT protocol to ensure efficient, low-latency data communication, allowing sensor updates in real time. Additionally, enabled live camera streaming on the dashboard for real-time visual monitoring alongside sensor readings. The dashboard is designed to support simultaneous data visualization for over four sensors, enhancing system oversight and enabling quick response .",
      image:
      esp32Img,
      tags: [
        "C",
        "MQTT",
        "ReactJs",
      ],
      category: "Iot",

    },
    {
      id: 0,
      title: "Agricultural Company Logo",
      date: "Oct 2024",
      description:
        "A logo crafted for an agricultural company, designed to reflect nature, growth, and sustainability. Using Adobe Illustrator, the logo combines organic shapes and earthy color palettes to evoke a sense of freshness and vitality.",
      image:
      jumanImg,
      tags: ["Adobe Illustrator",],
      category: "Graphic Design",

    },
    {
      id: 1,
      title: "Oil Company Logo",
      date: "Sept 2024",
      description:
        "A logo created for an oil company, designed to convey strength, reliability.Using Adobe Illustrator, the logo may incorporate shapes inspired by oil droplets, drilling rigs, or pipelines to visually connect with the industry. ",
      image:
      aromalineImg,
      tags: [
        "Adobe Illustrator",
      ],
      category: "Graphic Design",
    },
    {
      id: 2,
      title: "Restaurant Logo",
      date: "Jan 2023",
      description:
        "A visually appetizing logo crafted for a restaurant, combining elements of warmth and hospitality. Using Adobe Illustrator for crisp vector graphics and Photoshop for additional texture and depth, the logo blends iconic elements like plates, utensils, or food items to represent the cuisine and ambiance of the restaurant.",
      image:
      tabagosImg,
      tags: ["Adobe Illustrator", "Adobe Photoshop",],
      category: "Graphic Design",
    },
    {
      id: 3,
      title: "storefront facade ",
      date: "Apr 2023",
      description:
        "A modern storefront facade concept created with Adobe Photoshop and Illustrator, merging brand identity with eye-catching aesthetics. Illustrator is used to design vector elements like the logo, signage, and any custom typography, ensuring scalability and sharpness. Photoshop adds realistic textures, lighting effects, and shadow details, bringing depth and atmosphere to the facade concept.",
      image:
      boutiqueImg,
      tags: ["Adobe Illustrator", "Adobe Photoshop",],
      category: "Graphic Design",

    },
  ];
  
  