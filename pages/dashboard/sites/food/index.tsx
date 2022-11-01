
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { Fragment, useMemo } from 'react'
import { HeadingDashboard, LayoutDashboard, Sites } from '../../../../components'
import { findSitesWear, useSitesWear,findSitesFood, useSitesFood } from '../../../../src/hooks'



export default function Index() {
  const { data:sitesFood } = useSitesFood()

  const listFood = useMemo(() => sitesFood,
    [sitesFood])

  return (
    <Fragment>
      <HeadingDashboard title={"Food"} />
      <Sites sites={listFood!} />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["find-sites-food"], findSitesFood)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}


Index.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}
