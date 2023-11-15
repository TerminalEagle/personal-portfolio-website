// Define an interface for project data
interface Screenshots {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  skills: string[];
  technologies: string[];
  visitWebsiteLink: string;
  projectBackground: string;
  thumbnail: Screenshots;
  staticPreview: {
    hero: Screenshots;
    previewOne: Screenshots;
    previewTwo: Screenshots;
  };
}

// Define an array of projects using the ProjectData interface
const projects: ProjectData[] = [
  {
    slug: "manage",
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    skills: ["Interaction Design", "Front End Development"],
    technologies: ["HTML", "CSS", "JS"],
    visitWebsiteLink: "https://example.com/manage",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    thumbnail: {
      desktop: "/portfolio/desktop/image-portfolio-manage@2x.jpg",
      mobile: "/portfolio/tablet/image-portfolio-manage@2x.jpg",
      tablet: "/portfolio/mobile/image-portfolio-manage@2x.jpg",
    },
    staticPreview: {
      hero: {
        desktop: "/detail/desktop/image-manage-hero@2x.jpg",
        tablet: "/detail/tablet/image-manage-hero@2x.jpg",
        mobile: "/detail/mobile/image-manage-hero@2x.jpg",
      },
      previewOne: {
        desktop: "/detail/desktop/image-manage-preview-1@2x.jpg",
        tablet: "/detail/tablet/image-manage-preview-1@2x.jpg",
        mobile: "/detail/mobile/image-manage-preview-1@2x.jpg",
      },
      previewTwo: {
        desktop: "/detail/desktop/image-manage-preview-2@2x.jpg",
        tablet: "/detail/tablet/image-manage-preview-2@2x.jpg",
        mobile: "/detail/mobile/image-manage-preview-2@2x.jpg",
      },
    },
  },
  {
    slug: "fylo",
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    skills: ["Interaction Design", "Front End Development"],
    technologies: ["HTML", "CSS"],
    visitWebsiteLink: "https://example.com/fylo",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    thumbnail: {
      desktop: "/portfolio/desktop/image-portfolio-fylo@2x.jpg",
      mobile: "/portfolio/tablet/image-portfolio-fylo@2x.jpg",
      tablet: "/portfolio/mobile/image-portfolio-fylo@2x.jpg",
    },
    staticPreview: {
      hero: {
        desktop: "/detail/desktop/image-fylo-hero@2x.jpg",
        tablet: "/detail/tablet/image-fylo-hero@2x.jpg",
        mobile: "/detail/mobile/image-fylo-hero@2x.jpg",
      },
      previewOne: {
        desktop: "/detail/desktop/image-fylo-preview-1@2x.jpg",
        tablet: "/detail/tablet/image-fylo-preview-1@2x.jpg",
        mobile: "/detail/mobile/image-fylo-preview-1@2x.jpg",
      },
      previewTwo: {
        desktop: "/detail/desktop/image-fylo-preview-2@2x.jpg",
        tablet: "/detail/tablet/image-fylo-preview-2@2x.jpg",
        mobile: "/detail/mobile/image-fylo-preview-2@2x.jpg",
      },
    },
  },
  {
    slug: "insure",
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    skills: ["Interaction Design", "Front End Development"],
    technologies: ["HTML", "CSS", "JS"],
    visitWebsiteLink: "https://example.com/insure",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    thumbnail: {
      desktop: "/portfolio/desktop/image-portfolio-insure@2x.jpg",
      mobile: "/portfolio/tablet/image-portfolio-insure@2x.jpg",
      tablet: "/portfolio/mobile/image-portfolio-insure@2x.jpg",
    },
    staticPreview: {
      hero: {
        desktop: "/detail/desktop/image-insure-hero@2x.jpg",
        tablet: "/detail/tablet/image-insure-hero@2x.jpg",
        mobile: "/detail/mobile/image-insure-hero@2x.jpg",
      },
      previewOne: {
        desktop: "/detail/desktop/image-insure-preview-1@2x.jpg",
        tablet: "/detail/tablet/image-insure-preview-1@2x.jpg",
        mobile: "/detail/mobile/image-insure-preview-1@2x.jpg",
      },
      previewTwo: {
        desktop: "/detail/desktop/image-insure-preview-2@2x.jpg",
        tablet: "/detail/tablet/image-insure-preview-2@2x.jpg",
        mobile: "/detail/mobile/image-insure-preview-2@2x.jpg",
      },
    },
  },

  {
    slug: "bookmark",
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    skills: ["Interaction Design", "Front End Development"],
    technologies: ["HTML", "CSS", "JS"],
    visitWebsiteLink: "https://example.com/bookmark",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    thumbnail: {
      desktop: "/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
      mobile: "/portfolio/tablet/image-portfolio-bookmark@2x.jpg",
      tablet: "/portfolio/mobile/image-portfolio-bookmark@2x.jpg",
    },
    staticPreview: {
      hero: {
        desktop: "/detail/desktop/image-bookmark-hero@2x.jpg",
        tablet: "/detail/tablet/image-bookmark-hero@2x.jpg",
        mobile: "/detail/mobile/image-bookmark-hero@2x.jpg",
      },
      previewOne: {
        desktop: "/detail/desktop/image-bookmark-preview-1@2x.jpg",
        tablet: "/detail/tablet/image-bookmark-preview-1@2x.jpg",
        mobile: "/detail/mobile/image-bookmark-preview-1@2x.jpg",
      },
      previewTwo: {
        desktop: "/detail/desktop/image-bookmark-preview-2@2x.jpg",
        tablet: "/detail/tablet/image-bookmark-preview-2@2x.jpg",
        mobile: "/detail/mobile/image-bookmark-preview-2@2x.jpg",
      },
    },
  },
];

export default projects;
