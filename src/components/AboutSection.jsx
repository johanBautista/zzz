// import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className='md:mb-40 text-lg sm:mt-20 lg:mt-1 mx-auto max-w-[900px]'>
      <section className="sm:flex sm:justify-around">
        <div className="flex w-4/4 sm:w-1/4  items-center md:items-start">
          <span>
            👨🏻‍💻
          </span>
          <h2 className='text-indigo-500/75 font-semibold tracking-wider sm:text-end px-1'>
            ACERCA DE
          </h2>
        </div>

        <div className='sm:w-3/4'>
          <p className="mb-6 mt-12 sm:mt-0">
            Me gusta crear interfaces web modernas y optimizadas para los usuarios, soy un apasionado del <span className='text-indigo-500/75 font-medium'>diseño web</span> y las buenas prácticas, habitualmente trabajo con <span className='text-indigo-500/75 font-medium'>Vue</span>, <span className='text-indigo-500/75 font-medium'>JavaScript</span>, <span className='text-indigo-500/75 font-medium'>HTML</span>, y <span className='text-indigo-500/75 font-medium'>CSS</span>, pero también tengo experiencia en otros frameworks de Frontend como <span className='text-indigo-500/75 font-medium'>React</span> y <span className='text-indigo-500/75 font-medium'>Nextjs</span>.
          </p>
          <p className="mb-6">
            En estos más de 3 años como desarrollador me he enfocado en dar soluciones a productos que optimicen el <span className="text-indigo-500/75 font-medium">rendimiento</span> de la interfaz y generen un impacto positivo en negocio.
          </p>
          <p className="mb-6">
            Destaco mi capacidad de trabajar en <span className='text-indigo-500/75 font-medium'>entornos ágiles</span>, así como mi compromiso con el aprendizaje continuo y la adaptación a tecnologías emergentes. Valoro la oportunidad de transformar ideas en <span className='text-indigo-500/75 font-medium'>experiencias digitales</span> que cumplan con las necesidades del cliente.
          </p>
        </div>
      </section >
      {/***
 *
      <section className="sm:flex sm:justify-around mb-40">
        <h2 className="w-1/4 text-indigo-600 font-semibold tracking-wider text-end">HABILIDADES</h2>
        <div className='mt-4 sm:mt-0 sm:w-3/4 sm:ml-12'>
          <div className="flex flex-wrap md:flex-no-wrap">
            <div className="w-1/2 md:w-1/4 mb-4">
              <h2 className="text-lg font-semibold">LENGUAJES</h2>
              <ul className='text-sm'>
                <li>JavaScript ES6</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS/Sass</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-4">
              <h2 className="text-lg font-semibold">FRAMEWORKS</h2>
              <ul className='text-sm'>
                <li>React</li>
                <li>Next</li>
                <li>Vue</li>
                <li>Nuxt</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-4">
              <h2 className="text-lg font-semibold">TOOLS</h2>
              <ul className='text-sm'>
                <li>Bash - Zsh</li>
                <li>Git & Github</li>
                <li>Postman</li>
                <li>Chrome DevTools</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 mb-4">
              <h2 className="text-lg font-semibold">DESIGN</h2>
              <ul className='text-sm'>
                <li>Figma</li>
                <li>AdobeXD</li>
                <li>Illustrator</li>
                <li>Item</li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      <div className="font-semibold mb-2 w-100 text-end">
        <Link href='https://drive.google.com/file/d/1ADOq4YYqyPmOWy09N533gvyL9BhbFt_b/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='linkAnimat'>
          DESCARGA EL CV
        </Link>
      </div>
 */}

    </div >
  )
}

export default AboutSection
