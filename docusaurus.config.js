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
      links: [
        {
          label: "Modules",
          position: "left",
          items: [
            {
              to: "docs/fundamentals/index",
              label: "Fundamentals",
              position: "left",
            },
            {
              to: "docs/html-css/index",
              label: "HTML-CSS",
              position: "left",
            },
            {
              to: "docs/js-core-1/index",
              label: "JavaScript Core 1",
              position: "left",
            },
            {
              to: "docs/js-core-2/index",
              label: "JavaScript Core 2",
              position: "left",
            },
            {
              to: "docs/js-core-3/index",
              label: "JavaScript Core 3",
              position: "left",
            },
            {
              to: "docs/react/index",
              label: "React",
              position: "left",
            },
            {
              to: "docs/node/index",
              label: "Node",
              position: "left",
            },
            {
              to: "docs/db/index",
              label: "SQL",
              position: "left",
            },
            {
              to: "docs/mongodb/index",
              label: "MongoDB",
              position: "left",
            },
            {
              to: "docs/finalproject/intro",
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
              to: "docs/workshops/welcome-to-cyf",
              label: "Welcome to CYF",
              position: "left",
            },
            {
              to: "docs/workshops/aws-dynamodb",
              label: "AWS & DynamoDB Workshop",
              position: "left",
            },
            {
              to: "docs/workshops/git-desktop",
              label: "Github Desktop Workshop",
              position: "left",
            },
            {
              to: "docs/workshops/mongodb-101",
              label: "MongoDB 101 Workshop",
              position: "left",
            },
            {
              to: "docs/workshops/processing-js-workshop",
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
              to: "docs/guides/coding-standards",
              label: "Coding Standards",
              position: "left",
            },
            {
              to: "docs/guides/coding-101",
              label: "Coding 101",
              position: "left",
            },
            {
              to: "docs/guides/escalation-policy",
              label: "Escalation Policy",
              position: "left",
            },
            {
              to: "docs/guides/react-cheatsheet",
              label: "React Cheatsheet",
              position: "left",
            },
          ],
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "index",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/CodeYourFuture/Syllabus-V2/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
