import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobile, setMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setMobile(window.innerWidth <= 768)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 62,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #e4e8f0',
          transition: 'background 0.3s ease',
          display: 'flex', alignItems: 'center',
          padding: '0 2rem',
        }}
      >
        <div style={{
          maxWidth: 1100, margin: '0 auto', width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: '#2563eb',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: '#fff',
            }}>HG</div>
            <span style={{ fontWeight: 600, fontSize: 15, color: '#111827' }}>Haris Gaba</span>
          </a>

          {/* Desktop nav */}
          {!mobile && (
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {links.map(l => (
                <a key={l.href} href={l.href} style={{
                  color: '#6b7280', textDecoration: 'none', fontSize: 14, fontWeight: 500,
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#111827'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                >{l.label}</a>
              ))}
            </nav>
          )}

          {/* Desktop CTA */}
          {!mobile && (
            <a href="mailto:fahimgaba9@gmail.com" style={{
              background: '#2563eb', color: '#fff', textDecoration: 'none',
              padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
              transition: 'background 0.15s', flexShrink: 0,
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
              onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
            >Get in touch</a>
          )}

          {/* Hamburger */}
          {mobile && (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: 5, padding: 6,
              }}
            >
              <span style={{
                display: 'block', width: 22, height: 2, background: '#374151', borderRadius: 2,
                transition: 'transform 0.22s, opacity 0.22s',
                transform: open ? 'rotate(45deg) translateY(7px)' : 'none',
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, background: '#374151', borderRadius: 2,
                transition: 'opacity 0.22s',
                opacity: open ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, background: '#374151', borderRadius: 2,
                transition: 'transform 0.22s',
                transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }} />
            </button>
          )}
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && mobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed', top: 62, left: 0, right: 0, zIndex: 99,
              background: '#fff', borderBottom: '1px solid #e4e8f0',
              padding: '1.25rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                color: '#374151', textDecoration: 'none', fontSize: 15, fontWeight: 500,
                padding: '4px 0', borderBottom: '1px solid #f3f4f6',
              }}>{l.label}</a>
            ))}
            <a href="mailto:fahimgaba9@gmail.com" style={{
              color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 600,
              background: '#2563eb', padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', marginTop: '0.25rem',
            }}>Get in touch</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
