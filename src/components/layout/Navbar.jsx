import { useEffect, useState } from 'react'
import cl from './Layout.module.css'

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
    <header className='flex justify-end p-4'>
      <div className={cl.logo}>
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
