import React from 'react'
import Html5Icon from '@svgs/html5-plain.svg'
import Css3Icon from '@svgs/css3-plain.svg'
import JavascriptIcon from '@svgs/javascript-plain.svg'
import VuejsIcon from '@svgs/vuejs-plain.svg'
import NuxtjsIcon from '@svgs/nuxtjs-plain.svg'
import ReactIcon from '@svgs/react-original.svg'
import SassIcon from '@svgs/sass-original.svg'
import BootstrapIcon from '@svgs/bootstrap-plain.svg'
import TailwindcssIcon from '@svgs/tailwindcss-original.svg'
import NodejsIcon from '@svgs/nodejs-plain.svg'
import MongodbIcon from '@svgs/mongodb-plain.svg'
import TypescriptIcon from '@svgs/typescript-plain.svg'
import GitIcon from '@svgs/git-plain.svg'
import GithubIcon from '@svgs/github-original.svg'
import DockerIcon from '@svgs/docker-plain.svg'

const TechnologiesSection = () => {
  const technologies = [
    { icon: Html5Icon, name: 'HTML5' },
    { icon: Css3Icon, name: 'CSS3' },
    { icon: JavascriptIcon, name: 'JavaScript' },
    { icon: VuejsIcon, name: 'vuejs' },
    { icon: NuxtjsIcon, name: 'nuxtjs' },
    { icon: ReactIcon, name: 'React' },
    { icon: SassIcon, name: 'Sass' },
    { icon: BootstrapIcon, name: 'Bootstrap' },
    { icon: TailwindcssIcon, name: 'Tailwind CSS' },
    { icon: NodejsIcon, name: 'Node.js' },
    { icon: MongodbIcon, name: 'MongoDB' },
    { icon: TypescriptIcon, name: 'TypeScript' },
    { icon: GitIcon, name: 'Git' },
    { icon: GithubIcon, name: 'GitHub' },
    { icon: DockerIcon, name: 'Docker' }
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
            {/**
             *
            <i className={`${tech.icon} text-gray-400 text-6xl md:text-8xl transition-colors duration-300 ease-in-out hover:text-darkseagreen/50`} />
             */}
            <tech.icon className="w-16 h-16 md:w-20 md:h-20 mx-auto svg-icon" />
            <p className="mt-2 text-xs lg:text-base transition-colors duration-300 ease-in-out">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologiesSection
