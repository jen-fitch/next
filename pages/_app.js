import '../styles/globals.css'

const Layout = ({ children }) => <div className="page">{children}</div>

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
