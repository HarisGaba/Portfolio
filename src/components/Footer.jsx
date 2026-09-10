export default function Footer() {
  return (
    <footer style={{background:'#fff',borderTop:'1px solid #e4e8f0',padding:'1.75rem 2rem'}}>
      <div style={{maxWidth:1100,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'0.75rem'}}>
        <p style={{fontSize:13,color:'#9ca3af',margin:0}}>
          © {new Date().getFullYear()} Haris Fahim Gaba
        </p>
        <p style={{fontSize:13,color:'#9ca3af',margin:0}}>
          Web development · App growth · AI workflows
        </p>
        <a href="#top" style={{fontSize:13,color:'#2563eb',textDecoration:'none',fontWeight:500}}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
