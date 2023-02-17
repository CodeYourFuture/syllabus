module.exports = {
  title: "CodeYourFuture Syllabus",
  url: "https://syllabus.codeyourfuture.io/",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "codeyourfuture",
  projectName: "Syllabus",
  onBrokenLinks: "throw",
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/CodeYourFuture/Syllabus-V2/edit/master/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-159979458-2",
          anonymizeIP: true,
        },
      },
    ],
  ],
  scripts: [
    // See comments in static/js/fix-location.js
    {
      src: "/js/fix-location.js",
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "CodeYourFuture Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "Overview",
          label: "Overview",
        },
        {
          to: "Overview",
          label: "Modules",

          items: [
            {
              href: "https://introtocoding.codeyourfuture.io",
              label: "Intro To Coding",
            },
            {
              to: "fundamentals",
              label: "Fundamentals",
            },
            {
              href: "https://personal-development.codeyourfuture.io/em-modules/induction-week",
              label: "Induction",
            },
            {
              to: "git/overview",
              label: "Git and Github",
            },
            {
              to: "html-css/",
              label: "HTML-CSS",
            },
            {
              to: "js-core-1/",
              label: "JavaScript Core 1",
            },
            {
              to: "js-core-2/",
              label: "JavaScript Core 2",
            },
            {
              to: "js-core-3/",
              label: "JavaScript Core 3",
            },
            {
              to: "react/",
              label: "React",
            },
            {
              to: "node/",
              label: "Node",
            },
            {
              to: "db/",
              label: "SQL",
            },
            {
              to: "finalproject/intro",
              label: "Final Projects",
            },
          ],
        },
        {
          label: "Workshops",
          items: [
            {
              to: "workshops/accessibility/",
              label: "Accessibility Workshops",
            },
            {
              to: "workshops/aws-dynamodb",
              label: "AWS & DynamoDB Workshop",
            },
            {
              to: "workshops/processing-js-workshop",
              label: "Processing.js Workshop",
            },
            {
              to: "workshops/js-testing-workshop",
              label: "JavaScript Testing Workshop",
            },
            {
              to: "workshops/interviews/",
              label: "Interviews",
            },
            {
              href: "https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=Workshop&template=workshop-request.md&title=%5BWorkshop%5D",
              label: "Want to request a workshop?",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              to: "guides/paradigm",
              label: "Our Approach",
            },
            {
              to: "guides/asking-questions",
              label: "Asking Questions",
            },
            {
              to: "guides/marking-guide",
              label: "Marking Guide",
            },
            {
              to: "guides/code-style-guide",
              label: "Code Style Guide",
            },
            {
              to: "guides/deployment-netlify/",
              label: "Deploying to Netlify",
            },
            {
              to: "guides/deployment-render",
              label: "Deploying to Render",
            },
            {
              to: "guides/coding-101",
              label: "Coding 101",
            },
            {
              to: "guides/escalation-policy",
              label: "Escalation Policy",
            },
            {
              to: "guides/react-cheatsheet",
              label: "React Cheatsheet",
            },
            {
              to: "guides/useful-links",
              label: "Useful Links",
            },
            {
              to: "guides/creating-a-react-app",
              label: "Creating a React App",
            },
            {
              to: "guides/intro-to-tests",
              label: "Introduction to tests",
            },
          ],
        },
        {
          label: "Other",
          items: [
            {
              href: "https://teachertraining.codeyourfuture.io",
              label: "Teacher Training",
            },
            {
              href: "https://docs.codeyourfuture.io",
              label: "Organisation Documentation",
            },
            {
              href: "https://personal-development.codeyourfuture.io",
              label: "Personal Development",
            },
          ],
        },
        {
          to: "contributing/overview",
          label: "Want to contribute?",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Website",
              href: "https://www.codeyourfuture.io",
            },
            {
              label: "Documentation",
              href: "https://docs.codeyourfuture.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/codeyourfuture/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/codeyourfuture.io",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/codeyourfuture_",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/CodeYourFuture",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeYourFuture`,
    },
  },
};
