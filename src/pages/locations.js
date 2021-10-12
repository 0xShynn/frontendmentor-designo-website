import { Stack } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import LocationItem from '../components/LocationItem'
import PageContainer from '../components/PageContainer'
import { getLocationsPage } from '../lib/graphql/queries/pages/getLocationsPage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const { page } = await getLocationsPage()

  const offices = page?.content[0]?.blocks ?? []

  for (const office of offices) {
    const mdxAddress = await serialize(office.address)
    const mdxContact = await serialize(office.contact)
    office['mdxAddress'] = mdxAddress
    office['mdxContact'] = mdxContact
  }

  return {
    props: {
      data,
      offices,
    },
  }
}

const Locations = ({ data, offices }) => {
  return (
    <Layout data={data}>
      <NextSeo title="Locations" description="Designo office locations" />
      <PageContainer>
        <Stack
          spacing={{ base: 8, md: 28, lg: 8 }}
          w="full"
          mb={{ base: 24, xl: 36 }}
        >
          {offices.map((office, i) => (
            <LocationItem
              title={office.country}
              address={office.mdxAddress}
              contact={office.mdxContact}
              map={office.mapImage}
              mapLocation={office.mapLocation}
              slug={office.slug}
              index={i}
              key={i}
            />
          ))}
        </Stack>
      </PageContainer>
    </Layout>
  )
}

export default Locations
