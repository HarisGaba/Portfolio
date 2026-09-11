import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setW(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, height: 3, zIndex: 200,
      background: 'linear-gradient(to right, #2563eb, #60a5fa)',
      width: w + '%', transition: 'width 0.1s linear' }} />
  )
}
