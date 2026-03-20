import './style.css'

/**
 * Returns a greeting string for the given name.
 * @param {string} name
 * @returns {string}
 */
export const greet = (name) => {
  return `Hello, ${name}! Welcome to your new website.`
}

/**
 * Toggles the mobile navigation menu.
 */
const initMobileNav = () => {
  const toggle = document.getElementById('nav-toggle')
  const menu = document.getElementById('mobile-menu')

  if (!toggle || !menu) return

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('hidden')
    toggle.setAttribute('aria-expanded', String(!isOpen))
  })
}

/**
 * Initialize the app when the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav()
  console.log(greet('developer'))
})
