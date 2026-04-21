import type { Metadata } from 'next'
import '../styles/globals.css'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import { SITE_DESCRIPTION, SITE_LANGUAGE, SITE_NAME } from '../lib/site-config'
import { buildOrganizationSchema, buildWebSiteSchema } from '../lib/schema'

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
      <body>
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
