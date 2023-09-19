import type { Preview } from "@storybook/react"
import "../src/app/[locale]/globals.scss"
import { inter } from "../styles/fonts"
import { NextIntlClientProvider } from "next-intl"

const newViewports = {
  desktop4k: {
    name: 'Desktop-4k',
    styles: {
      width: '3840px',
      height: '2160px',
    },
  },
  desktop1440p: {
    name: 'Desktop-1440p',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
  desktop1080p: {
    name: 'Desktop-1080p',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  desktop720p: {
    name: 'Desktop-720p',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  ipad14: {
    name: 'iPad-14',
    styles: {
      width: '810px',
      height: '1080px',
    },
  },
  galaxyFold: {
    name: 'Galaxy-Fold',
    styles: {
      width: '280px',
      height: '653px',
    },
  },
  iphone13ProMax: {
    name: 'iPhone-13-Pro-Max',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
  iphoneSE: {
    name: 'iPhone-SE-2nd',
    styles: {
      width: '375px',
      height: '667px',
    },
  }
}

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: ['en', 'es'],
        dynamicTitle: true,
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: newViewports,
    }
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale
      const messages = require(`../messages/${locale}.json`)
      return (
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className={inter.variable}>
            <div style={{fontFamily: 'var(--font-inter)'}}>
              <Story />
            </div>
          </div>
        </NextIntlClientProvider>
      )
    }
  ]
}

export default preview
