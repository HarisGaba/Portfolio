import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    id: 'cms',
    label: 'CMS / Shopify & E-Commerce',
    description: 'Storefront and business websites built and customized for real-world brands.',
    projects: [
      {
        title: 'National Dry Cleaners',
        url: 'https://nationaldrycleaners.ca/',
        img: '/assets/national-drycleaners.jpg',
        desc: 'Cleaning and laundry services website with service-led content and conversion-focused booking paths.',
        tags: ['WordPress', 'E-Commerce', 'Business Website'],
      },
      {
        title: 'Bait Al Misk',
        url: 'https://baitalmisk.com/',
        img: '/assets/baitalmisk.jpg',
        desc: 'Premium attar and fragrance storefront showcasing handcrafted halal products delivered across Pakistan.',
        tags: ['Shopify', 'E-Commerce', 'Responsive UI'],
      },
      {
        title: 'Nakhal Foods',
        url: 'https://nakhalfoods.com/',
        img: '/assets/nakhalfoods.jpg',
        desc: 'Authentic spice brand website presenting products, deals, and farm-to-table brand story clearly.',
        tags: ['CMS', 'E-Commerce', 'Responsive UI'],
      },
    ],
  },
  {
    id: 'html',
    label: 'HTML & CSS Development',
    description: 'Responsive frontend work with clean layouts and business-first presentation.',
    projects: [
      {
        title: 'All Season Driving School',
        url: 'https://allseasondrivingschool.ca/',
        img: '/assets/allseason.jpg',
        desc: 'Driving school website with service pages, pricing, packages, testimonials, and lead-generation flows.',
        tags: ['HTML5', 'CSS3', 'Responsive Design'],
      },
      {
        title: 'Hilton Printers',
        url: 'https://hiltonprinters.com/',
        img: '/assets/hiltonprinters.jpg',
        desc: 'Printing and packaging solutions website covering services, portfolio, and client contact.',
        tags: ['HTML5', 'CSS3', 'Business UI'],
      },
      {
        title: 'Appsware Technologies',
        url: 'https://appswaretech.com/',
        img: '/assets/appswaretech.jpg',
        desc: 'Top-ranked Android app engineering firm presenting services, team, vision, and client portfolio.',
        tags: ['HTML5', 'CSS3', 'Business Website'],
      },
    ],
  },
  {
    id: 'react',
    label: 'React & Tailwind',
    description: 'Modern component-based frontend development using React and Tailwind CSS.',
    projects: [
      {
        title: 'Usmania Jewellers',
        url: 'https://usmaniajewellers.com/',
        img: '/assets/usmaniajewellers.jpg',
        desc: 'Premium jewellery storefront built with React and Tailwind, focused on timeless craftsmanship and product discovery.',
        tags: ['React', 'Tailwind CSS', 'E-Commerce'],
      },
      {
        title: 'MERN Stack Project',
        url: '#',
        img: null,
        desc: 'Full-stack web application using MongoDB, Express, React, and Node.js. Coming soon.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        comingSoon: true,
      },
      {
        title: 'React + More',
        url: '#',
        img: null,
        desc: 'Additional React projects in progress. Will be added soon.',
        tags: ['React', 'Tailwind CSS', 'Frontend'],
        comingSoon: true,
      },
    ],
  },
  {
    id: 'dotnet',
    label: '.NET & SQL Server',
    description: 'Backend applications and data-driven systems built with ASP.NET Core and SQL Server.',
    projects: [
      {
        title: '.NET Project',
        url: '#',
        img: null,
        desc: 'ASP.NET Core web application with Entity Framework Core and SQL Server Management Studio. Coming soon.',
        tags: ['ASP.NET Core', 'C#', 'SQL Server', 'EF Core'],
        comingSoon: true,
      },
      {
        title: 'Another .NET App',
        url: '#',
        img: null,
        desc: 'Backend system with REST APIs, database-first architecture, and admin dashboard. Coming soon.',
        tags: ['ASP.NET Core', 'SSMS', 'REST API'],
        comingSoon: true,
      },
      {
        title: 'More Projects',
        url: '#',
        img: null,
        desc: 'Additional .NET projects will be added here soon.',
        tags: ['C#', '.NET', 'SQL Server'],
        comingSoon: true,
      },
    ],
  },
  {
    id: 'php',
    label: 'PHP / Laravel & MySQL',
    description: 'Server-side web applications and REST APIs built with Laravel and MySQL.',
    projects: [
      {
        title: 'Laravel Project',
        url: '#',
        img: null,
        desc: 'Laravel web application with MySQL database, Blade templating, and authentication system. Coming soon.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
        comingSoon: true,
      },
      {
        title: 'PHP REST API',
        url: '#',
        img: null,
        desc: 'RESTful API built in PHP with Laravel, serving a frontend client and mobile app. Coming soon.',
        tags: ['PHP', 'Laravel', 'REST API', 'MySQL'],
        comingSoon: true,
      },
      {
        title: 'More Projects',
        url: '#',
        img: null,
        desc: 'Additional PHP and Laravel projects will be added here soon.',
        tags: ['PHP', 'Laravel', 'MySQL'],
        comingSoon: true,
      },
    ],
  },
  {
    id: 'aso',
    label: 'ASO Work Example',
    description: 'App discovery research using Google Play top-chart ranking signals.',
    projects: [
      {
        title: 'Google Play Top Charts',
        url: 'https://play.google.com/store/apps?hl=en-us',
        img: '/assets/aso-google-play.jpg',
        desc: 'Live Google Play top-chart view used for ranking analysis, category visibility, and competitor keyword research.',
        tags: ['ASO', 'Google Play', 'Keyword Research'],
      },
      {
        title: 'ASO Research — Coming Soon',
        url: '#',
        img: null,
        desc: 'Detailed case study on keyword ranking improvements and metadata optimization results. Coming soon.',
        tags: ['ASO', 'Competitor Research', 'App Growth'],
        comingSoon: true,
      },
      {
        title: 'App Performance Analysis',
        url: '#',
        img: null,
        desc: 'App store performance tracking, visibility metrics, and install conversion analysis. Coming soon.',
        tags: ['ASO', 'Analytics', 'App Store'],
        comingSoon: true,
      },
    ],
  },
]

// Inject scroll keyframe once
function injectScrollAnim() {
  if (document.getElementById('img-scroll-anim')) return
  const s = document.createElement('style')
  s.id = 'img-scroll-anim'
  s.textContent = `
    @keyframes imgScrollDown {
      0%   { object-position: top center; }
      45%  { object-position: bottom center; }
      55%  { object-position: bottom center; }
      100% { object-position: top center; }
    }
  `
  document.head.appendChild(s)
}

function Card({ p, inView, i }) {
  const [hov, setHov] = useState(false)
  useEffect(() => { injectScrollAnim() }, [])

  const domain = p.url.replace(/^https?:\/\//, '').replace(/\/$/, '')

  // Coming Soon card
  if (p.comingSoon) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: i * 0.07 }}
        style={{
          background: '#f8f9fc',
          border: '1.5px dashed #d1d5db',
          borderRadius: 14,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 340,
        }}
      >
        {/* Placeholder image area */}
        <div style={{
          height: 210, background: '#f0f4ff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 10, flexShrink: 0,
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: '#dbeafe',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22,
          }}>🔧</div>
          <span style={{
            fontSize: 11, fontWeight: 600, color: '#93c5fd',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>Coming Soon</span>
        </div>

        <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#9ca3af', margin: '0 0 0.45rem' }}>{p.title}</h3>
          <p style={{ fontSize: 13, color: '#c4c9d4', lineHeight: 1.6, margin: '0 0 1rem', flex: 1 }}>{p.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {p.tags.map(t => (
              <span key={t} style={{
                fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 5,
                background: '#f3f4f6', border: '1px solid #e5e7eb', color: '#9ca3af',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.article>
    )
  }

  // Real project card
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff',
        border: `1.5px solid ${hov ? '#93c5fd' : '#e4e8f0'}`,
        borderRadius: 14,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s, transform 0.22s, box-shadow 0.22s',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hov ? '0 14px 44px rgba(37,99,235,0.12)' : '0 2px 8px rgba(0,0,0,0.05)',
        cursor: 'default',
      }}
    >
      {/* Screenshot — full tall image, scrolls on hover */}
      <a href={p.url} target="_blank" rel="noreferrer"
        style={{ display: 'block', textDecoration: 'none', flexShrink: 0 }}>
        <div style={{ height: 210, overflow: 'hidden', position: 'relative', background: '#e8f0fe' }}>
          <img
            src={p.img}
            alt={p.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              animation: hov ? 'imgScrollDown 7s ease-in-out infinite' : 'none',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: hov ? 'rgba(37,99,235,0.03)' : 'transparent',
            transition: 'background 0.2s',
          }} />
          {/* Domain badge */}
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(6px)',
            border: '1px solid #e4e8f0', borderRadius: 5,
            padding: '3px 9px', fontSize: 10, color: '#6b7280', fontWeight: 500,
          }}>{domain}</div>
          {/* Arrow */}
          <div style={{
            position: 'absolute', top: 10, right: 10,
            width: 30, height: 30, borderRadius: '50%',
            background: '#2563eb', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700,
            opacity: hov ? 1 : 0,
            transform: hov ? 'scale(1)' : 'scale(0.6)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}>↗</div>
        </div>
      </a>

      {/* Body */}
      <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: '0 0 0.45rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.6, margin: '0 0 1rem', flex: 1 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 5,
              background: '#f0f7ff', border: '1px solid #dbeafe', color: '#2563eb',
            }}>{t}</span>
          ))}
        </div>
        <a href={p.url} target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 12, fontWeight: 600,
          color: hov ? '#2563eb' : '#9ca3af',
          textDecoration: 'none', transition: 'color 0.15s',
        }}>
          Visit site <span style={{ fontSize: 13 }}>↗</span>
        </a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref}
      style={{ padding: '6rem 2rem', background: '#f8f9fc', borderTop: '1px solid #e4e8f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#2563eb', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Selected work</p>
          <h2 style={{ fontFamily: "'Lora',Georgia,serif", fontSize: 'clamp(1.6rem,3vw,2.3rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 0.75rem' }}>
            Projects & websites
          </h2>
          <p style={{ fontSize: 15, color: '#9ca3af', maxWidth: 520 }}>
            Real work across storefronts, HTML sites, React apps, and backend systems. Hover a card to scroll through the full page.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {categories.map((cat) => (
            <div key={cat.id}>
              <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #e4e8f0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', margin: '0 0 3px', letterSpacing: '-0.01em' }}>{cat.label}</h3>
                <p style={{ fontSize: 13, color: '#9ca3af', margin: 0 }}>{cat.description}</p>
              </div>
              {/* Always 3 columns */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '1rem',
              }}>
                {cat.projects.map((p, i) => (
                  <Card key={p.title} p={p} inView={inView} i={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
