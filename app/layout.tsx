import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import { SITE_DESCRIPTION, SITE_LANGUAGE, SITE_NAME } from '../lib/site-config'
import { buildOrganizationSchema, buildWebSiteSchema } from '../lib/schema'

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = buildOrganizationSchema()
  const websiteSchema = buildWebSiteSchema()

  return (
    <html lang={SITE_LANGUAGE}>
      <body className={`${fontSerif.variable} ${fontSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
