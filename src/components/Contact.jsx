import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const s = encodeURIComponent(`Portfolio enquiry from ${form.name||'a visitor'}`)
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:fahimgaba9@gmail.com?subject=${s}&body=${b}`
    setSent(true)
    setTimeout(()=>setSent(false),3000)
    setForm({name:'',email:'',message:''})
  }

  const inp = {
    width:'100%', background:'#fff', border:'1.5px solid #e4e8f0',
    borderRadius:8, padding:'11px 14px', color:'#111827', fontSize:14, outline:'none',
    fontFamily:'Inter,sans-serif', boxSizing:'border-box', transition:'border-color 0.15s',
  }

  const links = [
    { icon:'✉', label:'fahimgaba9@gmail.com', href:'mailto:fahimgaba9@gmail.com' },
    { icon:'📞', label:'0334-2449599', href:'tel:+923342449599' },
    { icon:'in', label:'LinkedIn', href:'https://www.linkedin.com/in/haris-gaba-106347359/' },
    { icon:'⌥', label:'GitHub', href:'https://github.com/HarisGaba' },
  ]

  return (
    <section id="contact" ref={ref} style={{padding:'6rem 2rem',background:'#f8f9fc',borderTop:'1px solid #e4e8f0'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <motion.div initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} style={{marginBottom:'3rem'}}>
          <p style={{fontSize:12,fontWeight:600,color:'#2563eb',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'0.6rem'}}>Get in touch</p>
          <h2 style={{fontFamily:"'Lora',Georgia,serif",fontSize:'clamp(1.6rem,3vw,2.3rem)',fontWeight:500,color:'#111827',letterSpacing:'-0.01em',lineHeight:1.2,margin:'0 0 0.75rem'}}>
            Let's work together
          </h2>
          <p style={{fontSize:15,color:'#9ca3af',maxWidth:440}}>
            Reach out for web projects, storefront builds, app growth, or just to say hello.
          </p>
        </motion.div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:'3rem',alignItems:'start'}}>
          {/* Links */}
          <motion.div initial={{opacity:0,x:-16}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.5,delay:0.1}}
            style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
            {links.map(l=>(
              <a key={l.href} href={l.href} target={l.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                style={{
                  display:'flex',alignItems:'center',gap:14,padding:'14px 16px',
                  background:'#fff',border:'1.5px solid #e4e8f0',borderRadius:10,
                  textDecoration:'none',transition:'all 0.15s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#93c5fd';e.currentTarget.style.background='#f0f7ff'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='#e4e8f0';e.currentTarget.style.background='#fff'}}>
                <div style={{width:34,height:34,borderRadius:8,background:'#eff6ff',border:'1px solid #dbeafe',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,flexShrink:0}}>
                  {l.icon}
                </div>
                <span style={{fontSize:14,fontWeight:500,color:'#374151'}}>{l.label}</span>
                <span style={{marginLeft:'auto',color:'#9ca3af',fontSize:12}}>↗</span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:16}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.5,delay:0.15}}>
            <div style={{background:'#fff',border:'1.5px solid #e4e8f0',borderRadius:14,padding:'1.75rem'}}>
              <h3 style={{fontSize:16,fontWeight:700,color:'#111827',margin:'0 0 1.25rem',letterSpacing:'-0.01em'}}>Send a message</h3>
              <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:'0.875rem'}}>
                <label style={{display:'flex',flexDirection:'column',gap:5}}>
                  <span style={{fontSize:11,fontWeight:600,color:'#6b7280',letterSpacing:'0.06em',textTransform:'uppercase'}}>Name</span>
                  <input type="text" placeholder="Your name" required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} style={inp}
                    onFocus={e=>e.target.style.borderColor='#2563eb'} onBlur={e=>e.target.style.borderColor='#e4e8f0'} />
                </label>
                <label style={{display:'flex',flexDirection:'column',gap:5}}>
                  <span style={{fontSize:11,fontWeight:600,color:'#6b7280',letterSpacing:'0.06em',textTransform:'uppercase'}}>Email</span>
                  <input type="email" placeholder="you@example.com" required value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} style={inp}
                    onFocus={e=>e.target.style.borderColor='#2563eb'} onBlur={e=>e.target.style.borderColor='#e4e8f0'} />
                </label>
                <label style={{display:'flex',flexDirection:'column',gap:5}}>
                  <span style={{fontSize:11,fontWeight:600,color:'#6b7280',letterSpacing:'0.06em',textTransform:'uppercase'}}>Message</span>
                  <textarea rows={4} placeholder="What are you building?" required value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} style={{...inp,resize:'vertical'}}
                    onFocus={e=>e.target.style.borderColor='#2563eb'} onBlur={e=>e.target.style.borderColor='#e4e8f0'} />
                </label>
                <button type="submit" style={{
                  background: sent ? '#16a34a' : '#2563eb', color:'#fff', border:'none',
                  padding:'12px', borderRadius:8, fontSize:14, fontWeight:600,
                  cursor:'pointer', transition:'background 0.2s',
                  fontFamily:'Inter,sans-serif',
                }}>
                  {sent ? '✓ Email draft opened' : 'Send message →'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#contact>div>div:last-child{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </section>
  )
}
