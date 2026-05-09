import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15,
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          entry.target.classList.remove('active')
        }
      })
    }, revealOptions)

    const elements = document.querySelectorAll('.reveal, .reveal-fade')
    elements.forEach((el) => revealObserver.observe(el))

    return () => {
      elements.forEach((el) => revealObserver.unobserve(el))
    }
  }, [])
}
