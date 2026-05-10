import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const observerRef = useRef(null)

  useEffect(() => {
    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          // Once revealed, stop observing (one-time animation)
          observerRef.current.unobserve(entry.target)
        }
      })
    }, revealOptions)

    const elements = document.querySelectorAll('.reveal, .reveal-fade')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])
}
