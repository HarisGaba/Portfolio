import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const bullets = [
  'Perform App Store Optimization to improve app visibility and discoverability.',
  'Conduct keyword research and identify relevant search terms.',
  'Optimize app titles, descriptions, keywords, and metadata.',
  'Analyze app performance and search visibility.',
  'Support digital marketing and user acquisition strategies.',
  'Use AI tools to assist with research, content analysis, and workflow improvement.',
]

export default function Experience() {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="experience" ref={ref} style={{ padding:'6rem 2rem', background:'#fff', borderTop:'1px solid #e4e8f0' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} style={{marginBottom:'3rem'}}>
          <p style={{fontSize:12,fontWeight:600,color:'#2563eb',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'0.6rem'}}>Work history</p>
          <h2 style={{fontFamily:"'Lora',Georgia,serif",fontSize:'clamp(1.6rem,3vw,2.3rem)',fontWeight:500,color:'#111827',letterSpacing:'-0.01em',lineHeight:1.2}}>
            Experience
          </h2>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.55,delay:0.1}}
          style={{ background:'#fff', border:'1px solid #e4e8f0', borderRadius:16, padding:'2rem', position:'relative', overflow:'hidden' }}>
          {/* Accent bar */}
          <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:'linear-gradient(to right,#2563eb,#60a5fa)'}} />

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'1rem',marginBottom:'1.25rem',flexWrap:'wrap'}}>
            <div>
              <p style={{fontSize:12,color:'#6b7280',fontWeight:500,margin:'0 0 4px'}}>Appsware Technologies</p>
              <h3 style={{fontSize:22,fontWeight:700,color:'#111827',letterSpacing:'-0.02em',margin:0}}>ASO Manager</h3>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:12,fontWeight:600,color:'#2563eb',background:'#eff6ff',border:'1px solid #dbeafe',padding:'5px 12px',borderRadius:6,display:'inline-block'}}>
                Nov 2025 — Present
              </div>
              <div style={{fontSize:11,color:'#9ca3af',marginTop:5}}>Karachi, Pakistan</div>
            </div>
          </div>

          <div style={{height:1,background:'#f3f4f6',marginBottom:'1.25rem'}} />

          <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:'0.65rem'}}>
            {bullets.map((b,i)=>(
              <motion.li key={i} initial={{opacity:0,x:-10}} animate={inView?{opacity:1,x:0}:{}}
                transition={{duration:0.4,delay:0.2+i*0.06}}
                style={{display:'flex',alignItems:'flex-start',gap:10,color:'#6b7280',fontSize:14,lineHeight:1.6}}>
                <span style={{color:'#2563eb',marginTop:5,fontSize:8,flexShrink:0}}>●</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
