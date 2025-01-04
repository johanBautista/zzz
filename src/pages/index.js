import HeroSection from '@components/HeroSection'
import AboutSection from '@components/AboutSection'
import ExperiencesSection from '@components/ExperiencesSection'

export default function Home () {
  return (
    <div className="mx-4 sm:px-6 md:px-8 lg:px-6 xl:px-12 2xl:px-20 font-light">
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
    </div>
  )
}
