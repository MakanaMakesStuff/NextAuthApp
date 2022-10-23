import "@scss/globals.scss"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || Component

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
