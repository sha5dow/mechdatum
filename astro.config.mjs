import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import sidebarGenerated from './sidebar.generated.json' with { type: 'json' };

export default defineConfig({
  site: 'https://mechdatum.com',
  integrations: [
    starlight({
      title: 'MechDatum',
      description: 'Base de datos técnica de referencia para ingenieros mecánicos en español.',
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },

  sidebar: [
  ...sidebarGenerated,
],

      head: [
        {
          tag: 'script',
          attrs: {
            'data-cfasync': 'false',
            src: 'https://cmp.gatekeeperconsent.com/min.js',
          },
        },
        {
          tag: 'script',
          attrs: {
            'data-cfasync': 'false',
            src: 'https://the.gatekeeperconsent.com/cmp.min.js',
          },
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: '//www.ezojs.com/ezoic/sa.min.js',
          },
        },
        {
          tag: 'script',
          content: `
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `,
        },
        {
          tag: 'script',
          attrs: {
            src: '//ezoicanalytics.com/analytics.js',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'google-site-verification',
            content: 'PENDING',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'google-adsense-account',
            content: 'ca-pub-4927890967456381',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-CLYH2C3ER6',
            async: true,
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLYH2C3ER6');
          `,
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
        PageSidebar: './src/components/PageSidebar.astro',
      },
    }),
    sitemap(),
  ],
});
