import React from 'react'

const TechnologiesSection = () => {
  const technologies = [
    { icon: 'devicon-html5-plain', name: 'HTML5' },
    { icon: 'devicon-css3-plain', name: 'CSS3' },
    { icon: 'devicon-javascript-plain', name: 'JavaScript' },
    { icon: 'devicon-vuejs-plain', name: 'vuejs' },
    { icon: 'devicon-nuxtjs-plain', name: 'nuxtjs' },
    { icon: 'devicon-react-original', name: 'React' },
    { icon: 'devicon-sass-original', name: 'Sass' },
    { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },
    { icon: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
    { icon: 'devicon-nodejs-plain', name: 'Node.js' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'devicon-git-plain', name: 'Git' },
    { icon: 'devicon-github-plain', name: 'GitHub' },
    { icon: 'devicon-docker-plain', name: 'Docker' }
  ]

  return (
    <div className="container mx-auto my-48 lg:my-24">
      <div className='w-full md:flex md:justify-center'>
        <div className="flex w-full sm:w-1/4 items-center md:justify-center mb-8">
          <span>
            📗
          </span>
          <h2 className='text-primary font-semibold tracking-wider sm:text-end px-1'>
            TECNOLOGÍAS
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-5">
        {technologies.map((tech, index) => (
          <div key={index} className="text-center transition-colors duration-300 ease-in-out hover:text-darkseagreen">
            <i className={`${tech.icon} text-gray-400 text-6xl md:text-8xl transition-colors duration-300 ease-in-out hover:text-darkseagreen/50`} />
            <p className="mt-2 text-xs lg:text-base transition-colors duration-300 ease-in-out">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologiesSection
