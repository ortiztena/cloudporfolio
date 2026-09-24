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
  subTitle: "DevOps Engineer, Cloud Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1kz4LhF4MRdd-llM9w_8wt7JUzu51yweL/view?usp=sharing",
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
      title: "DevOps Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing, provisioning, and scaling highly available AWS cloud architectures (EKS, EC2, Lambda, DynamoDB)",
        "⚡ Implementing automated CI/CD deployment pipelines using Bamboo, Octopus Deploy, Docker, and Helm",
        "⚡ Managing secrets, zero-trust security, and API gateways with HashiCorp Vault, Kong, and WAF solutions",
        "⚡ End-to-end observability, log aggregation, and vulnerability posture remediation with New Relic, Splunk, and Wiz",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#0F1689",
          },
        },
        {
          skillName: "Octopus Deploy",
          fontAwesomeClassname: "simple-icons:octopusdeploy",
          style: {
            color: "#0D80D8",
          },
        },
        {
          skillName: "HashiCorp Vault",
          fontAwesomeClassname: "simple-icons:vault",
          style: {
            color: "#FFEC6E",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Splunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "New Relic",
          fontAwesomeClassname: "simple-icons:newrelic",
          style: {
            color: "#1CE783",
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
      subtitle: "Master's Degree in Full Stack Web Development",
      logo_path: "lemoncode.png",
      alt_name: "lemoncode",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Front End: Modern React, Angular, Vue.js, TypeScript, Next.js, responsive layouts (CSS Grid, Flexbox), and UI component libraries.",
        "⚡ Back End & Cloud: Node.js, Express, RESTful APIs, GraphQL, asynchronous architectures, and relational & NoSQL databases (MongoDB, PostgreSQL).",
        "⚡ Tooling & DevOps: Webpack, Vite, Docker basics, Git workflows, CI/CD pipeline integration, and cloud service deployments.",
        "⚡ Quality & Security: Unit and integration testing (Jest, React Testing Library, TDD), along with authentication and web security (JWT, cookies, OAuth, security headers).",
      ],
      website_link: "https://www.lemoncode.net/",
    },
    {
      title: "EADE",
      subtitle: "Master's Degree in Golf Course & Sports Turf Management",
      logo_path: "eade.png",
      alt_name: "eade",
      duration: "2012 - 2013",
      descriptions: [
        "⚡ Sports Surface Engineering: Specialized in the agronomic design, construction, and precision maintenance of high-performance turf facilities.",
        "⚡ Operations & Leadership: Project planning, team leadership, cross-functional communication, and resource/budget management.",
      ],
      website_link:
        "https://www.eade.es/titulos-propios/master-en-direccion-de-mantenimiento-de-campos-de-golf-y-futbol-greenkeeper-de-cespedes-deportivos/",
    },
    {
      title: "University of Seville (ETSIA)",
      subtitle: "Bachelor's Degree in Agricultural Engineering",
      logo_path: "usevilla.png",
      alt_name: "US",
      duration: "2007 - 2013",
      descriptions: [
        "⚡ Core Engineering & Quantitative Foundation: Rigorous grounding in applied mathematics, physics, statistics, and fluid mechanics.",
        "⚡ Modeling & Scientific Computing: Developed algorithms and data processing models using MATLAB to analyze microclimate and sensor datasets.",
        "⚡ Research & Systems Analysis: Conducted empirical studies on greenhouse thermal dynamics, sensor-driven data capture, and environmental control.",
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Having completed engineering internships in Spain and the United States, my career has been built on diverse international projects. Today, I work fully remotely with distributed teams across the US and India, driving seamless asynchronous operations to guarantee round-the-clock support while fostering cross-regional knowledge sharing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "DevOps Engineer",
          company: "Verisk",
          company_url: "https://www.verisk.com/",
          logo_path: "verisk.png",
          duration: "Aug 2022 - Present",
          location: "Málaga, Spain (Remote)",
          description: `• Managed, scaled, and optimized production AWS cloud infrastructure (EKS, EC2, Lambda, DynamoDB, CloudFormation).
• Automated CI/CD deployment pipelines utilizing Atlassian Bamboo, Octopus Deploy, Docker, and Helm.
• Led cloud migration projects from standalone EC2 instances to Amazon EKS containerized environments.
• Implemented zero-trust secrets management and API security using HashiCorp Vault, Kong API Gateway, and WAF rules.
• Built automated multi-region disaster recovery failover solutions between AWS regions.
• Monitored application health, security posture, and logging with New Relic, Splunk, and Wiz.`,
        },
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
    "full-stack applications and cloud workflows built with Node.js, React, and modern cloud primitives. These projects demonstrate clean code practices, API design, and automated deployments. Continuously shipping new repositories and infrastructure blueprints.",
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
      id: "4",
      name: "cloudporfolio",
      url: "https://github.com/ortiztena/cloudporfolio",
      description:
        "Personal cloud and software engineering portfolio site built with React and modern JavaScript, featuring modular component design and automated continuous deployment.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "logos:html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos:css-3",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "GitHub Actions",
          iconifyClass: "logos:github-actions",
        },
      ],
    },
    {
      id: "3",
      name: "hearthstone_app",
      url: "https://github.com/ortiztena/hearthstone_app",
      description:
        "Hearthstone card explorer and deck browser built with React, consuming external REST APIs with state management and dynamic filtering.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos:html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos:css-3",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs-icon",
        },
      ],
    },
    {
      id: "2",
      name: "airbnb-working-app",
      url: "https://github.com/ortiztena/airbnb-working-app",
      description:
        "Full-stack Airbnb clone featuring automated cloud deployment, MongoDB Atlas cluster integration, and S3-backed asset storage.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos:mongodb-icon",
        },
        {
          name: "AWS S3",
          iconifyClass: "logos:aws-s3",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
      ],
    },
    ,
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
