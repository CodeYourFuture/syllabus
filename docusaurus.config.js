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
          position: "left", // or 'right'
          items: [
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
