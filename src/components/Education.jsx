import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { title:'ACCP(AI)', sub:'Diploma in Computer Programming / Artificial Intelligence', org:'Aptech Learning', status:'Enrolled', icon:'🎓', active:true },
  { title:'Intermediate', sub:'Government Degree Boys College Gulzar-e-Hijri', org:'Education', status:'Completed', icon:'📚', active:false },
  { title:'Matriculation', sub:'The Smart School', org:'Education', status:'Completed', icon:'🏫', active:false },
  { title:'Certifications', sub:'Graphic Designing · Digital Marketing', org:'Professional', status:'Certified', icon:'🏅', active:false },
]

export default function Education() {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="education" ref={ref} style={{padding:'6rem 2rem',background:'#fff',borderTop:'1px solid #e4e8f0'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <motion.div initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} style={{marginBottom:'3rem'}}>
          <p style={{fontSize:12,fontWeight:600,color:'#2563eb',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'0.6rem'}}>Background</p>
          <h2 style={{fontFamily:"'Lora',Georgia,serif",fontSize:'clamp(1.6rem,3vw,2.3rem)',fontWeight:500,color:'#111827',letterSpacing:'-0.01em',lineHeight:1.2}}>
            Education & certifications
          </h2>
        </motion.div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1rem'}}>
          {items.map((it,i)=>(
            <motion.div key={it.title} initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:i*0.08}}
              style={{
                background: it.active ? '#eff6ff' : '#fff',
                border:`1.5px solid ${it.active?'#93c5fd':'#e4e8f0'}`,
                borderRadius:12, padding:'1.4rem',
                display:'flex', alignItems:'flex-start', gap:14,
              }}>
              <span style={{fontSize:26,flexShrink:0}}>{it.icon}</span>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:5,flexWrap:'wrap'}}>
                  <h3 style={{fontSize:15,fontWeight:700,color:'#111827',margin:0}}>{it.title}</h3>
                  <span style={{
                    fontSize:10,fontWeight:600,
                    color: it.active ? '#2563eb' : '#9ca3af',
                    background: it.active ? '#dbeafe' : '#f3f4f6',
                    padding:'2px 8px',borderRadius:4,letterSpacing:'0.04em',
                  }}>{it.status}</span>
                </div>
                <p style={{color:'#6b7280',fontSize:13,margin:'0 0 3px',lineHeight:1.5}}>{it.sub}</p>
                <p style={{color:'#2563eb',fontSize:11,fontWeight:500,margin:0}}>{it.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:580px){#education>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
