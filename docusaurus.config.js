module.exports = {
  title: "CodeYourFuture Syllabus",
  url: "https://syllabus.codeyourfuture.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "codeyourfuture",
  projectName: "Syllabus",
  plugins: [
    require.resolve("@docusaurus/plugin-google-analytics"),
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        docsBasePath: "/",
      },
    ],
    [
      require.resolve("@docusaurus/plugin-sitemap"),
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-159979458-2",
      anonymizeIP: true,
    },
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
              href: "https://introtocoding.codeyourfuture.io",
              label: "Intro To Coding",
              position: "left",
              className: "outside-link",
            },
            {
              href: "https://fundamentals.codeyourfuture.io/",
              label: "Fundamentals",
              position: "left",
              className: "outside-link",
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
              to: "workshops/js-testing-workshop",
              label: "JavaScript Testing Workshop",
              position: "left",
            },
            {
              href:
                "https://github.com/Thomas-Stewart/syllabus/tree/master/java",
              label: "Java Workshop",
              position: "left",
              className: "outside-link",
            },
            {
              to: "workshops/deployment/index",
              label: "Deploying Your Code Workshop",
              position: "left",
            },
            {
              label: "-----------",
              position: "left",
            },
            {
              href:
                "https://github.com/CodeYourFuture/syllabus/issues/new?assignees=&labels=Workshop&template=workshop-request.md&title=%5BWorkshop%5D",
              label: "Want to request a workshop?",
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
          to: "contributing/overview",
          label: "Want to contribute?",
        },
        /*
        {
          position: "right",
          href: "https://github.com/CodeYourFuture/syllabus",
          className: "github",
        },
        */
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
