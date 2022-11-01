import { LayoutPages } from "../components"

export default function Home() {
  return (
    <h1>Home</h1>
  )
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LayoutPages>
      {page}
    </LayoutPages>
  )
}