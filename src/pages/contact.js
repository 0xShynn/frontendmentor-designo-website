import { NextSeo } from 'next-seo'

import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import OfficeLogosContainer from '../components/OfficeLogosContainer'
import PageContainer from '../components/PageContainer'
import { themeMain } from '../constants/heroTheme'
import { getContactPage } from '../lib/graphql/queries/pages/getContactPage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const { page } = await getContactPage()

  return {
    props: {
      data,
      page,
    },
  }
}

const Contact = ({ data, page }) => {
  const officeLogos =
    page?.content?.find((item) => item.slug === 'office-logos')?.blocks ?? null
  const contactHero =
    page?.content?.find((item) => item.slug === 'contact-hero')?.blocks[0] ??
    null

  return (
    <Layout data={data}>
      <NextSeo title="Contact Us" description="Description" />
      <PageContainer>
        {contactHero && (
          <Hero
            title={contactHero.title}
            content={contactHero.description}
            theme={themeMain}
          >
            <ContactForm />
          </Hero>
        )}

        {officeLogos && (
          <OfficeLogosContainer data={officeLogos} pt={{ base: 28, md: 0 }} />
        )}
      </PageContainer>
    </Layout>
  )
}

export default Contact
