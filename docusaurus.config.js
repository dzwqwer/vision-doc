// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const yaml = require('js-yaml');
const fs = require('fs');
const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '汉得中台 aPaaS 前端团队',
  tagline: 'Hand aPaaS',
  url: 'https://hzm0321.github.io',
  baseUrl: '/vision-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  customFields: {
    authors: yaml.load(fs.readFileSync('./blog/authors.yml', 'utf8')), // 文章作者数据
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dzw', // Usually your GitHub org/user name.
  projectName: 'vision-doc', // Usually your repo name.
  trailingSlash: false, // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh', locales: ['zh'],
  },

  clientModules: [// require.resolve('choerodon-ui/dist/choerodon-ui.css'),
    // require.resolve('choerodon-ui/lib/configure'),
  ],

  themes: [// ... Your other themes.
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      // ... Your options.
      // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true, // For Docs using Chinese, The `language` is recommended to set to:
      // ```
      language: ["en", "zh"], // ```
    },],],

  presets: [['@docusaurus/preset-classic', /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/dzwqwer/vision-doc',
      }, blog: {
        showReadingTime: true, postsPerPage: 10, // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
      }, theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
      gtag: {
        trackingID: 'G-9WN9XYZ8XQ',
        anonymizeIP: true,
      },
    }),]],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '汉得中台 aPaaS 前端团队', logo: {
          alt: '汉得中台 aPaaS 前端团队', src: 'img/logo.svg',
        }, items: [{
          type: 'doc', docId: 'developStyle', position: 'left', label: '使用指南',
        },
        // { to: '/empty', label: 'react-vision', position: 'left' },
        {
          to: '/blog',
          label: '博客',
          position: 'left'
        },
        // {
        //   href: 'xx', label: 'GitHub', position: 'right',
        // },
      ],
      },
      footer: {
        style: 'dark', links: [{
          title: '文档资源', items: [{
            label: '项目开发规范', to: '/docs/developStyle',
          },],
        }, {
          title: '了解汉得', items: [{
            label: '汉得官网', href: 'https://www.hand-china.com/',
          }, {
            label: '招聘官网', href: 'http://career.hand-china.com/',
          }, {
            label: '汉得门户', href: 'http://eip.hand-china.com/',
          },],
        }, {
          title: '更多', items: [{
            label: 'GitHub', href: 'https://github.com/dzwqwer/vision-doc',
          },],
        },], copyright: `Copyright © ${new Date().getFullYear()} Hand aPaaS Team, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme, darkTheme: darkCodeTheme,
        magicComments: [
          // 要记得复制默认的高亮类！
          {
            className: 'code-block-right-line',
            line: 'This will right',
            block: { start: 'right-start', end: 'right-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
            block: { start: 'error-start', end: 'error-end' },
          },

        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // 告示条
      announcementBar: {
        id: '2022-09-16',
        content:
          '施工中。。。',
        backgroundColor: 'rgb(232,243,255)',
        textColor: '#012492',
        isCloseable: true,
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    ['docusaurus-plugin-less', { /* options */ lessOptions: {
        javascriptEnabled: true,
      }
    }],
  ],

  // webpack: {
  //   jsLoader: ()=> ({
  //     rules: [
  //       {
  //         test: /\.(eot)$/,//fonts目录下四个文件后缀名
  //         use: ["url-loader"],
  //       },
  //     ],
  //   })
  // }
};

module.exports = config;
