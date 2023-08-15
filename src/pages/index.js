import Image from 'next/image'
import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Johan Bautista</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
      </Head>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-12 2xl:px-20'>
        <HeroSection />
        <AboutSection />
      </div>
    </>
  )
}