import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  return (
    <section id="top" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #eff6ff 0%, #f8f9fc 50%, #f0f4ff 100%)',
    }}>
      <HeroCanvas />

      {/* Soft blobs */}
      <div style={{ position:'absolute', top:'-10%', right:'-5%', width:500, height:500,
        borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-5%', left:'-8%', width:400, height:400,
        borderRadius:'50%', background:'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
        pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:2, width:'100%', maxWidth:1100, margin:'0 auto', padding:'9rem 2rem 5rem' }}>

        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
          style={{ marginBottom:'1.5rem', display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 0 3px rgba(34,197,94,0.2)' }} />
          <span style={{ fontSize:13, color:'#16a34a', fontWeight:500 }}>Available for work</span>
          <span style={{ color:'#d1d5db' }}>·</span>
          <span style={{ fontSize:13, color:'#6b7280' }}>Karachi, Pakistan</span>
        </motion.div>

        <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }}
          style={{
            fontFamily:"'Lora', Georgia, serif",
            fontSize:'clamp(2.4rem, 5.5vw, 4.8rem)',
            fontWeight:500, lineHeight:1.12, letterSpacing:'-0.02em',
            color:'#111827', margin:'0 0 0.4rem', maxWidth:680,
          }}>
          Hi, I'm{' '}
          <span style={{ color:'#2563eb', fontStyle:'italic' }}>Haris Gaba</span>
        </motion.h1>

        <motion.h2 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.18 }}
          style={{
            fontFamily:"'Lora', Georgia, serif",
            fontSize:'clamp(1.5rem, 3vw, 2.6rem)',
            fontWeight:400, lineHeight:1.2, color:'#374151',
            margin:'0 0 1.5rem', maxWidth:620, fontStyle:'italic',
          }}>
          Web Developer & Digital Marketer
        </motion.h2>

        <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.26 }}
          style={{ fontSize:16, color:'#6b7280', lineHeight:1.75, maxWidth:480, marginBottom:'2.5rem' }}>
          I build websites, e-commerce stores, and web applications — and bring them to market through ASO, digital marketing, and AI-assisted workflows.
        </motion.p>

        <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.34 }}
          style={{ display:'flex', gap:'0.875rem', flexWrap:'wrap' }}>
          <a href="#projects" style={{
            background:'#2563eb', color:'#fff', textDecoration:'none',
            padding:'12px 26px', borderRadius:8, fontSize:14, fontWeight:600,
            transition:'all 0.2s', display:'inline-flex', alignItems:'center', gap:7,
          }}
            onMouseEnter={e=>{e.currentTarget.style.background='#1d4ed8';e.currentTarget.style.transform='translateY(-1px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#2563eb';e.currentTarget.style.transform='translateY(0)'}}>
            See my work <span>↓</span>
          </a>
          <a href="/assets/Haris-Fahim-Gaba-Resume.pdf" download style={{
            background:'#fff', color:'#374151', textDecoration:'none',
            padding:'12px 26px', borderRadius:8, fontSize:14, fontWeight:600,
            border:'1.5px solid #e4e8f0', transition:'all 0.2s',
            display:'inline-flex', alignItems:'center', gap:7,
          }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='#2563eb';e.currentTarget.style.color='#2563eb'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='#e4e8f0';e.currentTarget.style.color='#374151'}}>
            Resume ↓
          </a>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6, duration:0.5 }}
          style={{ marginTop:'4rem', paddingTop:'2rem', borderTop:'1px solid #e4e8f0', display:'flex', gap:'3rem', flexWrap:'wrap' }}>
          {[['8+','Projects delivered'],['3+','Tech stacks'],['1','Year experience']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontSize:28, fontWeight:700, color:'#111827', letterSpacing:'-0.03em', fontFamily:"'Lora',serif" }}>{n}</div>
              <div style={{ fontSize:13, color:'#9ca3af', marginTop:2 }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}
        style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
        <motion.div animate={{y:[0,5,0]}} transition={{repeat:Infinity,duration:1.8,ease:'easeInOut'}}
          style={{ width:1, height:32, background:'linear-gradient(to bottom, #2563eb, transparent)' }} />
        <span style={{ fontSize:10, color:'#9ca3af', letterSpacing:'0.12em', textTransform:'uppercase' }}>scroll</span>
      </motion.div>
    </section>
  )
}
