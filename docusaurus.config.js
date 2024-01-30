// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blizzhackers Documentation',
  tagline: 'Home of the Dupe since 2001',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bhdocs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bhdocs', // Usually your GitHub org/user name.
  projectName: 'bhdocs.github.com', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bhdocs/bhdocs.github.io/blob/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Blizzhackers',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/bhdocs/bhdocs.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'D2BS',
                to: '/docs/intro',
              },
              {
                label: 'D2Bot#',
                to: '/docs/category/d2bot',
              },
              {
                label: 'Kolbot',
                to: '/docs/category/kolbot',
              },
              {
                label: 'SoloPlay',
                to: '/docs/category/soloplay',
              },
              {
                label: 'Limedrop',
                to: '/docs/category/limedrop',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blizzhackers Discord',
                href: "https://discord.gg/z844XRhxFC"
              },
              {
                label: 'theBGuy (Soloplay) Discord',
                href: 'https://discord.gg/5pjTC2zH6N',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bhdocs/bhdocs.github.io',
              },
              {
                label: 'Built with Docusaurus',
                href: 'https://docusaurus.io/'
              }
            ],
          },
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
