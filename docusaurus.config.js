module.exports = {
  title: "CodeYourFuture Syllabus",
  url: "https://codeyourfuture.github.io",
  baseUrl: "/Syllabus-V2/",
  favicon: "img/favicon.png",
  organizationName: "codeyourfuture", // Usually your GitHub org/user name.
  projectName: "Syllabus-V2", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Home",
      hideOnScroll: true,
      logo: {
        alt: "CodeYourFuture Logo",
        src: "img/logo.png",
      },
      googleAnalytics: {
        trackingID: "UA-159979458-2",
        anonymizeIP: true,
      },
      links: [
        {
          label: "Modules",
          position: "left",
          items: [
            {
              href: "https://introtocoding.codeyourfuture.io",
              label: "Intro To Coding",
              position: "left",
            },
            {
              to: "fundamentals/index",
              label: "Fundamentals",
              position: "left",
            },
            {
              to: "html-css/index",
              label: "HTML-CSS",
              position: "left",
            },
            {
              to: "js-core-1/index",
              label: "JavaScript Core 1",
              position: "left",
            },
            {
              to: "js-core-2/index",
              label: "JavaScript Core 2",
              position: "left",
            },
            {
              to: "js-core-3/index",
              label: "JavaScript Core 3",
              position: "left",
            },
            {
              to: "react/index",
              label: "React",
              position: "left",
            },
            {
              to: "node/index",
              label: "Node",
              position: "left",
            },
            {
              to: "db/index",
              label: "SQL",
              position: "left",
            },
            {
              to: "mongodb/index",
              label: "MongoDB",
              position: "left",
            },
            {
              to: "finalproject/intro",
              label: "Final Projects",
              position: "left",
            },
          ],
        },
        {
          label: "Workshops",
          position: "left",
          items: [
            {
              to: "workshops/welcome-to-cyf",
              label: "Welcome to CYF",
              position: "left",
            },
            {
              to: "workshops/aws-dynamodb",
              label: "AWS & DynamoDB Workshop",
              position: "left",
            },
            {
              to: "workshops/git-desktop",
              label: "Github Desktop Workshop",
              position: "left",
            },
            {
              to: "workshops/mongodb-101",
              label: "MongoDB 101 Workshop",
              position: "left",
            },
            {
              to: "workshops/processing-js-workshop",
              label: "Processing.js Workshop",
              position: "left",
            },
            {
              to: "https://github.com/Thomas-Stewart/syllabus/tree/master/java",
              label: "Java Workshop",
              position: "left",
            },
          ],
        },
        {
          label: "Guides",
          position: "left",
          items: [
            {
              to: "guides/coding-standards",
              label: "Coding Standards",
              position: "left",
            },
            {
              to: "guides/coding-101",
              label: "Coding 101",
              position: "left",
            },
            {
              to: "guides/escalation-policy",
              label: "Escalation Policy",
              position: "left",
            },
            {
              to: "guides/react-cheatsheet",
              label: "React Cheatsheet",
              position: "left",
            },
          ],
        },
        {
          position: "right",
          href: "https://github.com/CodeYourFuture/syllabus",
          className: "github",
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
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/codeyourfuture/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeYourFuture`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "index",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/CodeYourFuture/Syllabus-V2/edit/master/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
