import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className='md:min-h-screen text-lg mb-40 sm:mt-20 lg:mt-1 mx-auto max-w-[900px]'>
      <section className="sm:flex sm:justify-around mb-40">
        <div className="flex md:justify-end w-4/4 sm:w-1/4  items-center md:items-start">
          <span>
            👨🏻‍💻
          </span>
          <h2 className='text-indigo-500/75 font-semibold tracking-wider sm:text-end px-1'>
            ACERCA DE
          </h2>
        </div>
        <div className='sm:w-3/4 sm:ml-12'>

          <p className="mb-6 mt-12 sm:mt-0">
            Me gusta crear interfaces web modernas y optimizadas para los usuario, soy un apasionado del <span className='text-indigo-500/75 font-medium'>diseño web</span> y las buenas prácticas, habitualmente trabajo con <span className='text-indigo-500/75 font-medium'>Vue</span>, <span className='text-indigo-500/75 font-medium'>JavaScript</span>, <span className='text-indigo-500/75 font-medium'>HTML</span>, y <span className='text-indigo-500/75 font-medium'>CSS</span>, pero también tengo experiencia en otros frameworks de Frontend como React y Nextjs.
          </p>
          <p className="mb-6">
            En estos más de 3 años como desarrollador me he enfocado en dar soluciones a productos que optimicen el rendimiento de la interfaz y generen impacto positivo en el negocio.
          </p>
          <p className="mb-6">
            Destaco mi capacidad de trabajar en <span className='text-indigo-500/75 font-medium'>entornos ágiles</span>, así como mi compromiso con el aprendizaje continuo y la adaptación a tecnologías emergentes. Valoro la oportunidad de transformar ideas en experiencias digitales que cumplan con las necesidades del cliente.
          </p>
        </div>
      </section >

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

      <section className="sm:flex justify-around mb-32">
        <h2 className="w-1/4 text-indigo-600 font-semibold tracking-wider text-end">EXPERIENCIA</h2>
        <div className='w-4/4 sm:w-3/4 sm:ml-12'>
          <div className='sm:flex justify-between mb-20 mt-12 sm:mt-0'>
            <div className='w-4/4 sm:w-3/4'>
              <div className="font-semibold">
                <Link href='https://www.indicator.es/' target="_blank" rel="noopener noreferrer" >
                  Indicator
                </Link>
              </div>
              <p className="text-sm font-thin mb-2">Front-end developer</p>
              <div>
                <div className="text-sm mb-2 sm:hidden">Jun 2023 - Actualmente</div>
              </div>
              <p className="mb-4">
                Creación de componentes para la construcción de páginas web por medio de un backoffice,
                en mi dia a dia se encuentran las siguientes tecnologías.
              </p>
              <ul className='text-sm leading-6 sm:flex'>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Vue</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">JavaScript (ES6)</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">CSS/Sass</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Twig</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Docker</li>
              </ul>
            </div>
            <div>
              <div className="text-sm mb-2 hidden sm:block">Jun 2023 - Actualmente</div>
            </div>
          </div>
          {/* OTRA LABORAL */}
          <div className='sm:flex justify-between mb-20 mt-12 sm:mt-0'>
            <div className='w-4/4 sm:w-3/4'>
              <div className="font-semibold">
                <Link href='https://www.siriondev.com/' target="_blank" rel="noopener noreferrer" >
                  Sirion Developers
                </Link>
              </div>
              <p className="text-sm font-thin mb-2">Front-end developer</p>
              <div>
                <div className="text-sm mb-2 sm:hidden">Mar 2021 - Mar 2023</div>
              </div>
              <p className="mb-4">
                Participación en diferentes proyectos enfocados en el sector inmobiliario, transporte y hosteleria.
                Maquetación web <small> <strong className='text-indigo-600'>píxel perfect</strong></small> con mockups hechos en AdobeXD y Figma.
                Desarollo con metodologías agile e implementación de tests unitarios y e2e.
              </p>
              <ul className='text-sm leading-6 sm:flex'>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">React</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">React Native</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Vue</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Nuxt</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Jest</li>
                <li className="self-baseline list-disc	mx-12 sm:list-none sm:mx-2 sm:rounded sm:border-2 sm:border-indigo-200 px-3">Cypress</li>
              </ul>
            </div>
            <div>
              <div className="text-sm mb-2 hidden sm:block">Mar 2021 - Mar 2023</div>
            </div>
          </div>
        </div>
      </section>
      <div className="font-semibold mb-2 w-100 text-end">
        <Link href='https://drive.google.com/file/d/1ADOq4YYqyPmOWy09N533gvyL9BhbFt_b/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='linkAnimat'>
          DESCARGA EL CV
        </Link>
      </div>
    </div >
  )
}

export default AboutSection
