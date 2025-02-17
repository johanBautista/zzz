import Link from 'next/link'
import { useState } from 'react'

const AboutSection = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadClick = (e) => {
    e.preventDefault()
    setIsDownloading(true)
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/1ON_Tl7D6KVI2DaiqCG0TzgRdh4U7gTVC/view?usp=sharing', '_blank')
      setIsDownloading(false)
    }, 2000)
  }
  return (
    <div className='md:mb-40 text-lg sm:mt-20 lg:mt-1 mx-auto max-w-[900px]'>
      <section className="md:flex md:justify-around">
        <div className="flex w-4/4 md:w-1/4  items-center md:items-start mb-4">
          <span>
            👨🏻‍💻
          </span>
          <h2 className='text-primary font-semibold tracking-wider sm:text-end px-1'>
            ACERCA DE
          </h2>
        </div>

        <div className='sm:w-3/4'>
          <p className="mb-6 mt-12 sm:mt-0">
            Me gusta crear interfaces web modernas y optimizadas, soy un apasionado del <span className='text-indigo-500/75 font-medium'>diseño web</span> y las buenas prácticas, habitualmente trabajo con <span className='text-indigo-500/75 font-medium'>Vue</span>, <span className='text-indigo-500/75 font-medium'>JavaScript</span>, <span className='text-indigo-500/75 font-medium'>HTML</span>, y <span className='text-indigo-500/75 font-medium'>CSS</span>, pero también tengo experiencia en otros frameworks de Frontend como <span className='text-indigo-500/75 font-medium'>React</span> y <span className='text-indigo-500/75 font-medium'>Nextjs</span>.
          </p>
          <p className="mb-6">
            En estos más de 3 años como desarrollador me he enfocado en mejorar el <span className="text-indigo-500/75 font-medium">rendimiento</span> y apariencia de las interfaces generando un impacto positivo en los usuarios.
          </p>
          <p className="mb-6">
            Destaco mi capacidad de trabajar en <span className='text-indigo-500/75 font-medium'>entornos ágiles</span>, así como mi compromiso con el aprendizaje continuo y la adaptación a tecnologías emergentes. Valoro la oportunidad de transformar ideas en <span className='text-indigo-500/75 font-medium'>experiencias digitales</span> que cumplan con las necesidades del cliente.
          </p>
        </div>
      </section >

      <div className="font-semibold mb-2 w-full text-end">
        <Link href='https://drive.google.com/file/d/1ON_Tl7D6KVI2DaiqCG0TzgRdh4U7gTVC/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='linkAnimat relative inline-block'
          onClick={handleDownloadClick}>
          DESCARGAR CV
          {isDownloading && (
            <span className="absolute left-0 bottom-0 h-1 bg-indigo-500 animate-download-bar"></span>
          )}
        </Link>
      </div>

    </div >
  )
}

export default AboutSection
