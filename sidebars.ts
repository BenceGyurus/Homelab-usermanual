import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  servicesSidebar: [
    'intro',
    'kezdo-tippek',
    {
      type: 'category',
      label: 'Szolgáltatások',
      collapsed: false,
      items: [
        'szolgaltatasok/immich',
        'szolgaltatasok/seafile',
        'szolgaltatasok/jellyfin',
        'szolgaltatasok/jellyseerr',
        'szolgaltatasok/paperless',
        'szolgaltatasok/maildrop',
        'szolgaltatasok/homeassistant',
        'szolgaltatasok/authentik',
        'szolgaltatasok/nyomtato',
      ],
    },
  ],
};

export default sidebars;
