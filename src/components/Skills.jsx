import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const groups = [
  { label:'Web Development', focus:'Core stack', skills:['HTML5','CSS3','JavaScript','React','Tailwind CSS','ASP.NET Core','C#','Laravel','SQL Server','Entity Framework Core'], icon:'💻' },
  { label:'CMS & E-Commerce', focus:'Storefronts', skills:['WordPress','Elementor','Shopify','Shopify Theme Customization','E-Commerce Development'], icon:'🛒' },
  { label:'App Store Optimization', focus:'Growth', skills:['Keyword Research','App Metadata Optimization','Competitor Research','App Performance Analysis'], icon:'📈' },
  { label:'Mobile Development', focus:'Apps', skills:['React Native','Flutter','AI-Assisted Development','Mobile UI Design'], icon:'📱' },
  { label:'Digital Marketing', focus:'Reach', skills:['Meta Ads','Social Media Marketing','Content Research'], icon:'📣' },
  { label:'AI & Automation', focus:'Productivity', skills:['Generative AI','Prompt Engineering','AI-Assisted Coding','Workflow Automation'], icon:'🤖' },
  { label:'Design', focus:'Visuals', skills:['Graphic Design','Social Media Design','Branding & Visual Content'], icon:'🎨' },
]

export default function Skills() {
  const [active, setActive] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const g = groups[active]

  return (
    <section id="skills" ref={ref} style={{ padding:'6rem 2rem', background:'#f8f9fc' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <motion.div initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
          style={{ marginBottom:'3rem' }}>
          <p style={{ fontSize:12, fontWeight:600, color:'#2563eb', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'0.6rem' }}>What I can do</p>
          <h2 style={{ fontFamily:"'Lora',Georgia,serif", fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:500,
            color:'#111827', letterSpacing:'-0.01em', lineHeight:1.2 }}>
            Skills & capabilities
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', gap:'1.5rem', alignItems:'start' }}>
          {/* Sidebar */}
          <motion.div initial={{opacity:0,x:-16}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.5,delay:0.1}}
            style={{ background:'#fff', border:'1px solid #e4e8f0', borderRadius:12, overflow:'hidden' }}>
            {groups.map((gr,i) => (
              <button key={gr.label} onClick={()=>setActive(i)} style={{
                width:'100%', display:'flex', alignItems:'center', gap:10,
                padding:'11px 16px', border:'none', cursor:'pointer', textAlign:'left',
                background: i===active ? '#eff6ff' : 'transparent',
                borderLeft: i===active ? '3px solid #2563eb' : '3px solid transparent',
                borderBottom: i<groups.length-1 ? '1px solid #f3f4f6' : 'none',
                transition:'all 0.15s',
              }}>
                <span style={{fontSize:16}}>{gr.icon}</span>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:i===active?'#1d4ed8':'#374151'}}>{gr.label}</div>
                  <div style={{fontSize:11,color:'#9ca3af'}}>{gr.focus}</div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Panel */}
          <motion.div key={active} initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} transition={{duration:0.25}}
            style={{ background:'#fff', border:'1px solid #e4e8f0', borderRadius:12, padding:'1.75rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:'1rem', paddingBottom:'1rem', borderBottom:'1px solid #f3f4f6' }}>
              <span style={{fontSize:28}}>{g.icon}</span>
              <div>
                <h3 style={{fontSize:18,fontWeight:700,color:'#111827',margin:0,letterSpacing:'-0.01em'}}>{g.label}</h3>
                <p style={{fontSize:12,color:'#2563eb',margin:'2px 0 0',fontWeight:500}}>{g.focus}</p>
              </div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
              {g.skills.map(s=>(
                <span key={s} style={{
                  fontSize:12, fontWeight:500, padding:'5px 12px', borderRadius:6,
                  background:'#f0f7ff', border:'1px solid #dbeafe', color:'#1d4ed8',
                }}>{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:640px){#skills>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
