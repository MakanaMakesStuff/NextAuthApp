import { DefaultLayout } from "@core/components"
import Head from "next/head"

export default function FourOFourPage() {
  return (
    <>
      <Head>
        <title>404 - MM</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </>
  )
}

FourOFourPage.getLayout = (page: JSX.Element) => {
  return DefaultLayout(page as any)
}
