/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jeffrey Sutherland's Portfolio",
  description:
    "A driven and resourceful Full Stack Developer who thrives on crafting end-to-end solutions, leveraging Infrastructure as Code to design sustainable, scalable systems, with a passion for building seamless data orchestration, monitoring tools, and empowering collaborative development environments.",
  og: {
    title: "Jeffrey Sutherland Portfolio",
    type: "website",
    url: "http://jeffreysutherland.click/",
  },
};

//Home Page
const greeting = {
  title: "Jeffrey Sutherland",
  logo_name: "JeffreySutherland",
  nickname: "Jeff-Suth",
  subTitle:
    "A driven and resourceful Full Stack Developer who thrives on crafting end-to-end solutions, leveraging Infrastructure as Code to design sustainable, scalable systems, with a passion for building seamless data orchestration, monitoring tools, and empowering collaborative development environments.",
  resumeLink:
    "https://docs.google.com/document/d/13lGmWEbAw7iFV8A-LBO8oqzoUyZcpGVt/edit?usp=sharing&ouid=105495318508224372032&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/Jeff-Suth/masterPortfolio",
  githubProfile: "https://github.com/Jeff-Suth",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Jeff-Suth",
  // linkedin: "https://www.linkedin.com/in/jeffrey-sutherland/",
  // gmail: "jeff.a.suth@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/Jeff-Suth",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jeffrey-sutherland/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
//  {
//    name: "YouTube",
//    link: "",
//    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
//    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
//  },
  {
    name: "Gmail",
    link: "mailto:jeff.a.suth@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
//  {
//    name: "X-Twitter",
//    link: "",
//    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
//    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
//  },
//  {
//    name: "Facebook",
//    link: "",
//    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
//    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
//  },
//  {
//    name: "Instagram",
//    link: "",
//    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
//    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
//  },
];

const skills = {
  data: [
    {
        title: "Cloud Infra-Architecture",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Experience working with multiple cloud platforms, primarily AWS",
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
          "⚡ Data Orchestration and Content Exchange constructs that safely move data between regions and can transform data as needed",
          "⚡ Created and implemented WAF construct for FedRAMP for use with CloudFront Distributions and regional resources like ALBs and APIGWs",
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
            skillName: "Azure",
            fontAwesomeClassname: "simple-icons:microsoftazure",
            style: {
              color: "#0089D6",
            },
          },
          {
            skillName: "S3",
            fontAwesomeClassname: "logos:aws-s3",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "Shield",
            fontAwesomeClassname: "logos:aws-shield",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "RDS",
            fontAwesomeClassname: "logos:aws-rds",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "Glue",
            fontAwesomeClassname: "logos:aws-glue",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: {
              color: "#336791",
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
            skillName: "Docker",
            fontAwesomeClassname: "simple-icons:docker",
            style: {
              color: "#1488C6",
            },
          },
//          {
//            skillName: "Kubernetes",
//            fontAwesomeClassname: "simple-icons:kubernetes",
//            style: {
//              color: "#326CE5",
//            },
//          },
        ],
    },
    {
          title: "Full Stack Development",
          fileName: "FullStackImg",
          skills: [
            "⚡ Designing and developing robust frontend interfaces using JavaScript and TypeScript frameworks",
            "⚡ Orchestrating cloud-based backend solutions with AWS services, leveraging Lambda functions, RDS, and DynamoDB for scalable and efficient applications",
            "⚡ Building and deploying infrastructure using CDK to automate and manage services like Glue, VPCs, and CloudWatch for data orchestration, monitoring, and migration",
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
              skillName: "TypeScript",
              fontAwesomeClassname: "logos:typescript-icon-round",
              style: {
                color: "#CC6699",
              },
            },
            {
              skillName: "JavaScript",
              fontAwesomeClassname: "simple-icons:javascript",
              style: {
                backgroundColor: "#000000",
                color: "#F7DF1E",
              },
            },
            {
              skillName: "ReactJS",
              fontAwesomeClassname: "simple-icons:react",
              style: {
                color: "#61DAFB",
              },
            },
            {
              skillName: "NodeJS",
              fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
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
              skillName: "Yarn",
              fontAwesomeClassname: "simple-icons:yarn",
              style: {
                color: "#2C8EBB",
              },
            },
            {
              skillName: "Github",
              fontAwesomeClassname: "ion:logo-github",
              style: {
                color: "black",
              },
            },
          ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience working on generative AI detection tools to minimize students' cheating on assignments",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "AWS Bedrock",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
              color: "#FF9900",
            },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "ChatGPT",
          fontAwesomeClassname: "arcticons:openai-chatgpt",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Claude",
          fontAwesomeClassname: "logos:claude",
          style: {
            backgroundColor: "transparent",
            color: "#D97757",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch and generative AI tools",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Jeff_Suth/",
    },
//    {
//      siteName: "HackerRank",
//      iconifyClassname: "simple-icons:hackerrank",
//      style: {
//        color: "#2EC866",
//      },
//      profileLink: "https://www.hackerrank.com/_",
//    },
//    {
//      siteName: "Codechef",
//      iconifyClassname: "simple-icons:codechef",
//      style: {
//        color: "#5B4638",
//      },
//      profileLink: "https://www.codechef.com/users/",
//    },
//    {
//      siteName: "Codeforces",
//      iconifyClassname: "simple-icons:codeforces",
//      style: {
//        color: "#1F8ACB",
//      },
//      profileLink: "http://codeforces.com/profile/_",
//    },
//    {
//      siteName: "Hackerearth",
//      iconifyClassname: "simple-icons:hackerearth",
//      style: {
//        color: "#323754",
//      },
//      profileLink: "https://www.hackerearth.com/",
//    },
//    {
//      siteName: "Kaggle",
//      iconifyClassname: "simple-icons:kaggle",
//      style: {
//        color: "#20BEFF",
//      },
//      profileLink: "https://www.kaggle.com/",
//    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Willamette University",
      subtitle: "BA Computer Science",
      logo_path: "Willamette_Bearcats_logo.png",
      alt_name: "Willamette University",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing,  and Full Stack Development.",
        "⚡ Outside of Computer Science, I played basketball for the collegiate team all four years and got a minor in Religious Studies",
        "⚡ In my last two years I founded and competed in the Esports Club playing League of Legends, Hearthstone, and Overwatch against some of the largest schools in the NCAA.",
      ],
      website_link: "https://willamette.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Cloud Developer Associate",
      subtitle: "- AWS Certification",
      logo_path: "aws-icon.png",
      certificate_link:
        "https://www.credly.com/badges/34c9c999-3c25-4775-a899-1221d58469e8",
      alt_name: "AWS Certification",
      color_code: "#8C151599",
    },
    {
      title: "CompTIA A+",
      subtitle: "- CompTIA",
      logo_path: "comptia.png",
      certificate_link:
        "https://www.linkedin.com/in/jeffrey-sutherland/overlay/1635464197410/single-media-viewer/?type=DOCUMENT&profileId=ACoAACGCkgUBbIBGWSinyWr6A_xzeuwsO_TvsJ4",
      alt_name: "CompTIA A+",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have contributed to dynamic organizations as a Full Stack Developer, focusing on Infrastructure as Code, cloud solutions, and software development. My experience spans creating data orchestration constructs and monitoring systems using AWS tools like CDK, Glue, and CloudWatch for large companies. I’ve also supported complex financial and EDI systems at smaller companies, mentoring developers and troubleshooting critical incidents. Beyond coding, I enjoy fostering collaboration, continuously refining processes, and sharing knowledge to empower teams and projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Accounting Intern",
          company: "Lynden Inc.",
          company_url: "https://www.lynden.com/",
          logo_path: "lynden-logistics-logo.png",
          duration: "May 2017 - Aug 2017",
          location: "SeaTac, WA",
          description:
            "",
          color: "#000000",
        },
        {
          title: "Financial Research Software Development Intern",
          company: "Costco Wholesale",
          company_url: "https://www.costco.com/",
          logo_path: "Costco-Logo.wine.png",
          duration: "May 2016 - Aug 2016",
          location: "Issaquah, WA",
          description:
            "",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Only have a few projects outside of work on my Github, but most of them are little games I make on the side for fun!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "No publications to share at the moment but will update in the future when relevant!",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
//    {
//      id: "neuro-symbolic-sudoku-solver",
//      name: "Neuro-Symbolic Sudoku Solver",
//      createdAt: "2023-07-02T00:00:00Z",
//      description: "Paper published in KDD KiML 2023",
//      url: "https://arxiv.org/abs/2307.00653",
//    },
//    {
//      id: "mdp-diffusion",
//      name: "MDP-Diffusion",
//      createdAt: "2023-09-19T00:00:00Z",
//      description: "Blog published in Paperspace",
//      url: "https://blog.paperspace.com/mdp-diffusion/",
//    },
//    {
//      id: "consistency-models",
//      name: "Consistency Models",
//      createdAt: "2023-10-12T00:00:00Z",
//      description: "Blog published in Paperspace",
//      url: "https://blog.paperspace.com/consistency-models/",
//    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "headshot.jpg",
    description:
      "I am available on any of my listed social media. You can message me, I will reply within 24 hours. I can help you with AWS, Infrastructure as Code, ML, AI, Data Science, and anything else you might need!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I currently don't have a blog or anything of that sort but if I end up adding one I'll put it here!",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Vancouver, WA 98683",
    locality: "Vancouver",
    country: "USA",
    region: "Washington",
    postalCode: "98683",
    streetAddress: "Redacted",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/bwdFXnnPvAYWN2uY6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
