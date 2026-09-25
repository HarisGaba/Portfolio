import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const up = (delay=0) => ({
  initial:{opacity:0,y:20},
  animate:{opacity:1,y:0},
  transition:{duration:0.55,delay,ease:'easeOut'},
})

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="about" ref={ref} style={{ padding:'6rem 2rem', background:'#fff', borderTop:'1px solid #e4e8f0', borderBottom:'1px solid #e4e8f0' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.7fr', gap:'5rem', alignItems:'start' }}>

        {/* Photo col */}
        <motion.div {...up(0)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}>
          <div style={{ position:'relative' }}>
            <div style={{
              width:'100%', aspectRatio:'3/4', borderRadius:16, overflow:'hidden',
              border:'1px solid #e4e8f0',
            }}>
              <img src="/assets/haris-hero-atlas.jpg" alt="Haris Fahim Gaba"
                style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
            <div style={{
              position:'absolute', bottom:-14, right:-14,
              background:'#2563eb', borderRadius:12, padding:'11px 16px',
              boxShadow:'0 4px 20px rgba(37,99,235,0.25)',
            }}>
              <div style={{ fontSize:10, color:'rgba(255,255,255,0.75)', letterSpacing:'0.08em', marginBottom:2 }}>STATUS</div>
              <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>Open to work</div>
            </div>
          </div>
        </motion.div>

        {/* Text col */}
        <div style={{ paddingTop:'1rem' }}>
          <motion.p {...up(0.05)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}
            style={{ fontSize:12, fontWeight:600, color:'#2563eb', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'0.8rem' }}>
            About me
          </motion.p>

          <motion.h2 {...up(0.1)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}
            style={{ fontFamily:"'Lora',Georgia,serif", fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:500,
              lineHeight:1.25, color:'#111827', margin:'0 0 1.4rem', letterSpacing:'-0.01em' }}>
            Building things on the web,<br/>
            <span style={{ fontStyle:'italic', color:'#2563eb' }}>thinking about why they work.</span>
          </motion.h2>

          <motion.p {...up(0.15)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}
            style={{ fontSize:15, color:'#6b7280', lineHeight:1.8, marginBottom:'1.2rem' }}>
            Web Developer with hands-on experience building and customizing WordPress and Shopify sites, and developing backend applications with ASP.NET Core and Entity Framework Core. I've also built practical experience in App Store Optimization, mobile app development with AI-assisted tools, and digital marketing.
          </motion.p>

          <motion.p {...up(0.2)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}
            style={{ fontSize:15, color:'#6b7280', lineHeight:1.8, marginBottom:'2rem' }}>
            Currently completing an ACCP(AI) diploma at Aptech Learning — deepening my skills in Generative AI, prompt engineering, and AI-assisted development.
          </motion.p>

          <motion.blockquote {...up(0.26)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}
            style={{ borderLeft:'3px solid #2563eb', paddingLeft:'1.2rem', margin:'0 0 2rem',
              fontFamily:"'Lora',Georgia,serif", fontSize:16, fontStyle:'italic', color:'#374151', lineHeight:1.6 }}>
            "Practical work, curious process, clear next steps."
          </motion.blockquote>

          <motion.div {...up(0.3)} animate={inView?{opacity:1,y:0}:{opacity:0,y:20}}
            style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
            {[{e:'📍',t:'Karachi, Pakistan'},{e:'🎓',t:'ACCP(AI) · Aptech'},{e:'💼',t:'ASO Manager'}].map(f=>(
              <span key={f.t} style={{
                display:'flex', alignItems:'center', gap:7,
                background:'#f8faff', border:'1px solid #dbeafe',
                borderRadius:8, padding:'7px 13px', fontSize:13, color:'#374151',
              }}>{f.e} {f.t}</span>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about>div>div:first-child+div:first-of-type{display:none!important}#about>div{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
    </section>
  )
}
