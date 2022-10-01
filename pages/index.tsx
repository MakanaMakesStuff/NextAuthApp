import { DefaultLayout } from "@core/components"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - MM</title>
      </Head>
      <>
        <h1>Hello World!!</h1>
      </>
    </>
  )
}

HomePage.getLayout = (page: JSX.Element) => {
  return DefaultLayout(page as any)
}
