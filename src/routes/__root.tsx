import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Fahruraji · Software Developer',
      },
      {
        name: 'description',
        content: 'Frontend developer crafting clean, useful, and reliable web experiences. 200k+ rows unified, 12 hours eliminated, enterprise tools for 71 factories.',
      },
      {
        property: 'og:title',
        content: 'Fahruraji · Software Developer',
      },
      {
        property: 'og:description',
        content: 'I build tools that collapse months into hours. Frontend specialist, fullstack when needed.',
      },
      {
        property: 'og:image',
        content: 'https://waterflai.my.id/og.svg',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Fahruraji',
              alternateName: 'Fahrurrozy',
              jobTitle: 'Software Developer',
              url: 'https://waterflai.my.id',
              sameAs: [
                'https://github.com/fhrrrzy',
                'https://linkedin.com/in/fhrrrzy',
              ],
              knowsAbout: ['Vue.js', 'React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker'],
              worksFor: {
                '@type': 'Organization',
                name: 'PT Perkebunan Nusantara IV',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
