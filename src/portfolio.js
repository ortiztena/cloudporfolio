/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Pedro",
  logo_name: "{ ortiztena }",
  nickname: "ortiztena",
  full_name: "Pedro Ortiz",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1B6hayj4ksumF_A24QKCJxPdacg-JecVm/view?usp=sharing",
  mail: "mailto:ortiztena@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ortiztena",
  linkedin: "https://www.linkedin.com/in/ortiztena",
  gmail: "ortiztena@gmail.com",
  twitter: "https://twitter.com/peteorten",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React / Vue / Svelte and Typescript",
        "⚡ Creating application backend in Node / Express / MongoDB ",
        "⚡ Integration of third party services such as Heroku / AWS / Azure",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CE508F",
          },
        },

        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#3AAE7A",
          },
        },
        {
          skillName: "Svelte",
          fontAwesomeClassname: "simple-icons:svelte",
          style: {
            color: "#F73C00",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Multiple cloud platforms",
        "⚡ Hosting and deploying websites",
        "⚡ Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#2AB9E7",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lemoncode",
      subtitle: "Master degree in front end development",
      logo_path: "lemoncode.png",
      alt_name: "lemoncode",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ React - Angular - Vuejs - d3js - Flexbox - CSS Grid - Material Design - CSS in JS - Gatsby",
        "⚡ GraphQL - lodash/fp - Webpack - Parcel - ES6/ES7 - Typescript - Git",
        "⚡ Code quality and unit testing: TDD, Jest, React Testing Library, Jest + Typescript",
        "⚡ Security: cookies - headers - JWT.",
      ],
      website_link: "https://lemoncode.net/master-frontend#inicio-banner",
    },
    {
      title: "EADE",
      subtitle: "Master degree in golf course & sports turf management",
      logo_path: "eade.png",
      alt_name: "eade",
      duration: "2012 - 2013",
      descriptions: [
        "⚡ Construction, Design and Maintenance of Football Pitches.",
        "⚡ Management Skills, Emotional Intelligence and Leadership",
      ],
      website_link:
        "https://www.eade.es/titulos-propios/master-en-direccion-de-mantenimiento-de-campos-de-golf-y-futbol-greenkeeper-de-cespedes-deportivos/",
    },
    {
      title: "ETSIA College Of Engineering",
      subtitle: "Diploma in Agricultural Enginerring",
      logo_path: "usevilla.png",
      alt_name: "US",
      duration: "2007 - 2012",
      descriptions: [
        "⚡ I have studied core subjects like Maths, Physics, Chemistry, Biology, etc.",
        "⚡ Researched about effects of temperature on various crops inside a greenhouse.",
        "⚡ I have develop algorithms with Matlab to analyze data, and create models.",
      ],
      website_link: "https://etsia.us.es/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Bootcamp Javascript",
      subtitle: "Lemoncode",
      logo_path: "bcjavascript.png",
      certificate_link:
        "https://lemoncode.net/bootcamp-javascript#bootcamp-javascript/inicio",
      alt_name: "bcjavascript",
      color_code: "#AF0702",
    },
    {
      title: "Bootcamp Backend",
      subtitle: "Lemoncode",
      logo_path: "bcbackend.png",
      certificate_link:
        "https://lemoncode.net/bootcamp-backend#bootcamp-backend/banner",
      alt_name: "bcbackend",
      color_code: "#AFB301",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internship, one in Spain and one in the USA. I've mostly done projects around the world. I love to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Golf Course Superintendent",
          company: "Golfcity Puchheim",
          company_url: "www.golfcity.de/",
          logo_path: "golfcity.jpeg",
          duration: "Aug 2016 - Dec 2021",
          location: "München, Germany",
          description: ` Collaboration in the extension Project, from 32ha to 53ha (6 holes + 1 short course).\n Construction and grow-in supervision.\n Full maintenance (53ha) since Jun 1th, 2018.\n Agronomic consulting and maintenance supervision of Golfcity Pulheim, Cologne(9holes) in 2018. \n Human Resources management. \n Agronomic and yearly work planning. Budgetcontrol. \n Problemsolving,controlandmanagement.`,
          color: "#0071C5",
        },
        {
          title: "Assistant Superintendent",
          company: "ETC",
          company_url: "http://www.golfplatzpflege.com/",
          logo_path: "engelmann.png",
          duration: "Apr 2016 - Aug 2016",
          location: "München, Germany",
          description: `Helping in five differents courses with the regular maintenance tasks.`,
          color: "#3fd611",
        },
        {
          title: "Second Assistant Superintendent",
          company: "El Dorado Golf & Beach Club",
          company_url: "https://eldoradobeachclub.com/",
          logo_path: "eldorado.svg",
          duration: "Sep 2015 - Mar 2016",
          location: "Los Cabos, México",
          description: `Supervise and coordinate course setup daily.`,
          color: "#0071C5",
        },
        {
          title: "Assistant in training / Internship",
          company: "Shady Canyon Golf Club",
          company_url: "http://www.shadycanyongolfclub.com",
          logo_path: "shady.png",
          duration: "Mar 2014 - Mar 2015",
          location: "Irvine, California, USA",
          description: `Assign and supervise jobs for a team of up to 35 people. Small workgroups leadership. Supervise staff schedule`,
          color: "#3fd611",
        },
        {
          title: "Assistant in training / Internship",
          company: "Finca Cortesin Golf Resort & Spa",
          company_url: "http://www.fincacortesin.com",
          logo_path: "finca.png",
          duration: "Jan 2013 - Jan 2014",
          location: "Málaga, Spain",
          description: `Operating all machinery and tools. Irrigation control and management`,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Agronomy volunteer",
          company: "European Tour",
          company_url: "https://hassan2golftrophy.com/",
          logo_path: "hassan.png",
          duration: "May 2019",
          location: "Royal Golf Dar Essalam. Rabat. Morocco.",
          description: "Trophée Hassan II.",
          color: "#4285F4",
        },
        {
          title: "Agronomy volunteer",
          company: "European Tour",
          company_url: "https://www.golf-national.com/",
          logo_path: "national.png",
          duration: "Jun 2018",
          location: "Le Golf National, Paris, France",
          description: "HNA French Open.",
          color: "#196acf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects use a variety of different technology tools. My best experience is to create NodeJS Backend Projects, and React Project. Below are some of my projects. Note that i'm still working on adding some more projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description: "You can contact me at the places mentioned below. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I'm not a big fan of social media or bloggin. On my old golf-related job, i did try to document it, so it could be helpful to others.",
    link: "https://twitter.com/Peteorten",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Ricky & Morti API with GraphQL",
      url: "https://codesandbox.io/s/bold-thompson-ho2d92",
      description:
        "React and typescript app, showing Rick and Morty characters list. It allows you to insert a comment on a single character.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Typescritp",
          iconifyClass: "logos-typescript",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos-graphql",
        },
      ],
    },
    {
      id: "1",
      name: "React Git members List API",
      url:
        "https://codesandbox.io/s/focused-framework-0fzy3e?file=/src/index.tsx",
      description:
        "A React component that search and shows all the GitHub organization members.",
      languages: [
        {
          name: "Typescritp",
          iconifyClass: "logos-typescript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "Node server hotel DB",
      url:
        "https://github.com/ortiztena/deploy-cloud-demo/tree/automatic-deploy/",
      description:
        "Back and front deployed on Heroku, serving data from a cluster by Mongo, and the role images from AWS bucket.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Heroku",
          iconifyClass: "logos-heroku",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
      ],
    },
    {
      id: "3",
      name: "Vue Git members List API",
      url: "https://codesandbox.io/s/memberlist-api-8l7q57",
      description:
        "A Vue app that search and shows all the GitHub organization members.",
      languages: [
        {
          name: "Vue",
          iconifyClass: "logos-vue",
        },
        {
          name: "typescript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
