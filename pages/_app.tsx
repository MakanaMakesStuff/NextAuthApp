import "@styles/globals.scss"

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || Component

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
