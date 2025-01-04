import { useEffect, useState } from 'react'
import cl from './Layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@icons/favicon.ico'

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked)
  }

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
        window.localStorage.setItem('theme', 'light')
      }
    }
  }, [darkTheme])

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode')
    setDarkTheme(initialColorValue === 'dark')
  }, [])

  return (
    <header className='fixed top-[-1px] left-0 w-full z-[1000] bg-[var(--color-background)] shadow-md lg:flex lg:justify-center lg:items-center'>
      <div className='flex justify-between px-4 py-2 items-center w-full lg:max-w-[1040px] lg:w-[80%]'>
        <Link href="/" className={cl.navbar__logo}>
          <Image src={logoImage} alt="Logo" width={40} height={40} />
        </Link>
        <form action="#">
          <label className={cl.switch}>
            <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
            <span className={cl.slider}></span>
          </label>
        </form>
      </div>
    </header>
  )
}

export default Navbar
