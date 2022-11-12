import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/_styles.scss'
import Header from '@metrogas/layout/header';
import Footer from '@metrogas/layout/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="(c) Full Conectados Limitada" />
      <meta name="copyright" content="Metrogas S.A." />
      <meta name="robots" content="index,follow" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <title>Metrogas</title>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
