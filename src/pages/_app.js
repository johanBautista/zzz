import Layout from '@components/layout/Layout'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function App ({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Johan Bautista</title>
        <meta
          name="description"
          content="Protfolio personal Johan Bautista frontend developer, javascript, web"
        />
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <meta name="description" content="I hope this tutorial is helpful for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <Layout>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
    </>
  )
}
