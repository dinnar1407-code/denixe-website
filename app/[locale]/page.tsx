import Hero3D from '@/components/three/Hero3D';
import Image from 'next/image';

export default function HomePage() {
  const stats = [
    { value: '0.004mm', label: 'Positioning Accuracy', icon: '⊿' },
    { value: '0.002mm', label: 'Repeatability', icon: '◎' },
    { value: '42,000', label: 'Max Spindle RPM', icon: '⟳' },
    { value: '30+', label: 'Years of Precision', icon: '⏱' }
  ];
  
  const products = [
    { 
      name: 'DNX Series', 
      tag: 'Flagship',
      desc: '5-Axis Simultaneous Machining Center — B-axis tilting ±110°, C-axis 360°, VDI 3441 certified ±0.002mm repeatability',
      models: '500U / 700U / 1250U',
      rpm: '12,000 – 42,000 rpm',
      img: '/images/products/dnx700u-realistic.webp',
      href: '/products/dnx'
    },
    { 
      name: 'HPS Series', 
      tag: 'Precision',
      desc: 'High-Speed 3-Axis Vertical Machining Center — ±0.002mm repeatability, 42,000 rpm spindle, German-standard cast iron construction',
      models: '800 / 1000 / 1200',
      rpm: '10,000 – 42,000 rpm',
      img: '/images/products/hps1000-realistic.webp',
      href: '/products/hps'
    },
    { 
      name: 'WX Series', 
      tag: 'Specialized',
      desc: 'Ultra-Precision Scroll Compressor Special Machine — purpose-built for EV compressor scroll disc manufacturing, globally rare category',
      models: 'WX1',
      rpm: '12,000 – 24,000 rpm',
      img: '/images/products/wx1-realistic.webp',
      href: '/products/scroll'
    }
  ];
  
  const industries = [
    'Aerospace', 'Defense & Marine', 'Automotive', 'Medical Devices',
    'Electronics', 'Precision Molds', 'Robotics', 'Compressor', 'Energy'
  ];

  const highlights = [
    { title: 'ISO 9001', desc: 'Certified quality management since 2013' },
    { title: 'National High-Tech', desc: 'Recognized innovation enterprise' },
    { title: '20+ Patents', desc: 'Intellectual property portfolio' },
    { title: 'VDI 3441', desc: 'German precision standard tested' }
  ];

  return (<>
    {/* Hero — DMG MORI-style full bleed */}
    <section className="relative h-screen flex items-center overflow-hidden">
      <Hero3D />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/90 via-transparent to-[#0a0a0f]/60" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <p className="text-[#D4A843] text-sm tracking-[0.3em] mb-6 uppercase">5-Axis CNC Machining Centers</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
          <span className="text-[#D4A843] block">Precision</span>
          <span className="text-[#F5F5F5] block">Beyond Limits</span>
        </h1>
        <p className="text-lg text-[#A0A0A0] max-w-xl mb-10 leading-relaxed">
          German-quality engineering from Suzhou, China. Our 5-axis machining centers replace 
          DMG MORI, Mazak, and Haas imports — at <span className="text-[#F5F5F5]">half the cost</span>.
        </p>
        <div className="flex gap-4">
          <a href="/products" className="px-8 py-4 bg-[#D4A843] text-black font-semibold rounded hover:bg-[#c49630] transition-all text-sm tracking-wide">
            Explore Products →
          </a>
          <a href="/contact" className="px-8 py-4 border border-[#D4A843] text-[#D4A843] font-semibold rounded hover:bg-[#D4A843] hover:text-black transition-all text-sm tracking-wide">
            Request Quote
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#333] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#D4A843] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>

    {/* Precision Stats — DMG MORI-style cold metric display */}
    <section className="py-24 bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] text-sm tracking-[0.2em] mb-3 uppercase">Performance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineered to <span className="text-[#D4A843]">2 Microns</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">Full closed-loop control. ISO 230-1 and VDI 3441 certified. 6–8 year precision guarantee.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {stats.map(s => (
            <div key={s.label} className="p-10 text-center border border-[#2a2a3a] bg-[#0a0a0f]/50 hover:bg-[#1a1a24] transition-colors group">
              <div className="text-4xl md:text-5xl font-bold text-[#D4A843] mb-3 font-mono tracking-tight">{s.value}</div>
              <div className="text-sm text-[#A0A0A0] group-hover:text-[#F5F5F5] transition-colors uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Lines — Mazak-style clean cut-out cards */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] text-sm tracking-[0.2em] mb-3 uppercase">Machines</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Product <span className="text-[#D4A843]">Lines</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">Three precision series designed and manufactured in Suzhou Industrial Park</p>
        </div>
        <div className="space-y-8">
          {products.map((p, i) => (
            <div key={p.name} className={`group grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg border border-[#2a2a3a] bg-[#0a0a0f] hover:border-[#D4A843]/40 transition-all ${i === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`flex items-center justify-center bg-[#12121a] rounded-lg p-4 aspect-[4/3] ${i === 0 ? 'md:order-2' : ''}`}>
                <span className="text-6xl text-[#333] select-none">CNC</span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-3 py-1 bg-[#D4A843]/10 text-[#D4A843] rounded-full uppercase tracking-wider">{p.tag}</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-[#F5F5F5] group-hover:text-[#D4A843] transition-colors">{p.name}</h3>
                <p className="text-[#A0A0A0] mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-xs px-3 py-1.5 bg-[#1a1a24] text-[#A0A0A0] rounded font-mono border border-[#2a2a3a]">{p.models}</span>
                  <span className="text-xs px-3 py-1.5 bg-[#1a1a24] text-[#A0A0A0] rounded font-mono border border-[#2a2a3a]">{p.rpm}</span>
                </div>
                <a href={p.href} className="inline-flex items-center gap-2 text-sm text-[#D4A843] hover:text-[#c49630] transition-colors group/link">
                  View Specifications <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries — dense grid with DMG MORI-style minimalism */}
    <section className="py-24 bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A843] text-sm tracking-[0.2em] mb-3 uppercase">Applications</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries <span className="text-[#D4A843]">Served</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {industries.map(ind => (
            <div key={ind} className="p-8 text-center border border-[#2a2a3a] hover:border-[#D4A843]/50 hover:bg-[#1a1a24] transition-all cursor-pointer group">
              <div className="text-sm text-[#A0A0A0] group-hover:text-[#F5F5F5] transition-colors uppercase tracking-wider">{ind}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About + CTA */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#D4A843] text-sm tracking-[0.2em] mb-3 uppercase">Since 2010</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              14 Years of <span className="text-[#D4A843]">Precision<br/>Engineering</span>
            </h2>
            <p className="text-[#A0A0A0] mb-8 leading-relaxed">
              Founded in Suzhou Industrial Park, DENIXE delivers high-end CNC machining centers 
              that replace German, Swiss, and Japanese imports. Our commitment to precision is 
              backed by a 6–8 year accuracy guarantee.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 text-sm text-[#D4A843] hover:text-[#c49630] transition-colors group">
              Learn Our Story <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {highlights.map(h => (
              <div key={h.title} className="p-6 border border-[#2a2a3a] hover:border-[#D4A843]/30 transition-all">
                <div className="text-[#D4A843] font-bold mb-2 text-sm uppercase tracking-wider">{h.title}</div>
                <div className="text-[#A0A0A0] text-xs leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-24 bg-[#12121a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to upgrade your <span className="text-[#D4A843]">machining capacity</span>?
        </h2>
        <p className="text-[#A0A0A0] mb-10 max-w-xl mx-auto">
          Contact our engineering team to discuss your requirements. We provide full CAD/CAM support and on-site installation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="px-10 py-5 bg-[#D4A843] text-black font-semibold rounded hover:bg-[#c49630] transition-all text-sm tracking-wide">
            Request a Quote →
          </a>
          <a href="tel:+86-512-62969605" className="px-10 py-5 border border-[#D4A843] text-[#D4A843] font-semibold rounded hover:bg-[#D4A843] hover:text-black transition-all text-sm tracking-wide">
            +86-512-62969605
          </a>
        </div>
      </div>
    </section>
  </>);
}
