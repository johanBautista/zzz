import Image from 'next/image'
import heroImage from '@images/hero.webp'

const HeroSection = () => {
  return (
    <>
      <section className="mx-auto px-4 sm:px-6 pt-32 md:pt-36 xl:pt-52 2xl:pt-64 min-h-screen max-w-[900px]">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="py-12 text-3xl sm:text-5xl mb-8">Hola!</h1>
            <h2 className="font-thin text-3xl sm:text-5xl leading-relaxed md:leading-tight">
              Soy <span className="font-light text-indigo-500">Johan Bautista</span>, <span className='block md:inline'>
                front-end Developer especializado en crear interfaces web modernas y eficientes.
              </span>
            </h2>
            <ul className="ml-1 mt-8 flex items-center">
              <li className="mr-5">
                <a
                  className="block hover:text-indigo-600"
                  href="https://www.linkedin.com/in/johanbautista/"
                  target="_blank" rel="noreferrer"
                >
                  <i className="text-4xl devicon-linkedin-plain" />
                </a>
              </li>
              <li className="mr-5">
                <a
                  className="block hover:text-indigo-600"
                  href="https://github.com/johanbautista/"
                  target="_blank" rel="noreferrer"
                >
                  <i className="text-4xl devicon-github-plain" />
                </a>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image src={heroImage} alt="Johan Bautista" height="300" width="300" priority />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
