import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gyürüs Homelab',
  tagline: 'Otthoni szolgáltatások használati útmutatója',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.gyurus.hu',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gyürüs Homelab',
      logo: {
        alt: 'Homelab Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'servicesSidebar',
          position: 'left',
          label: 'Szolgáltatások',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Szolgáltatások',
          items: [
            {
              label: 'Fotók (Immich)',
              href: 'https://photos.gyurus.hu',
            },
            {
              label: 'Fájlok (Seafile)',
              href: 'https://drive.gyurus.hu',
            },
            {
              label: 'TV/Film (Jellyfin)',
              href: 'https://tv.gyurus.hu',
            },
            {
              label: 'Sorozat/film kérés (Jellyseerr)',
              href: 'https://sorozat.gyurus.hu',
            },
          ],
        },
        {
          title: 'További szolgáltatások',
          items: [
            {
              label: 'Dokumentumok (Paperless)',
              href: 'https://paperles.gyurus.hu',
            },
            {
              label: 'E-mail (Maildrop)',
              href: 'https://maildrop.gyurus.hu',
            },
            {
              label: 'Okosotthon (Home Assistant)',
              href: 'https://home.gyurus.hu',
            },
          ],
        },
      ],
      copyright: `Gyürüs Homelab ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
