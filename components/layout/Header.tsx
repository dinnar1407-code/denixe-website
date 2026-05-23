'use client';
import {useState} from 'react';
import {Menu,X} from 'lucide-react';
import {usePathname,useRouter} from 'next/navigation';

export default function Header() {
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  const router=useRouter();
  const isZh=pathname.startsWith('/zh');
  const links=[{href:'/products',label:'Products'},{href:'/industries',label:'Industries'},{href:'/about',label:'About'},{href:'/contact',label:'Contact'}];

  function switchLang(lang: "en"|"zh") {
    if(lang==='zh') { router.push('/zh'+pathname.replace(/^\/zh/,'')); }
    else { router.push(pathname.replace(/^\/zh/,'') || '/'); }
  }

  const cn=(a:string,b:string):string=>a+' '+b;
  const navClass=(active:boolean)=>cn('text-sm px-2 py-1 rounded transition-colors',active?'text-[#D4A843] font-semibold':'text-[#A0A0A0] hover:text-[#D4A843]');
  const mobileClass=(active:boolean)=>cn('text-sm px-3 py-1 rounded',active?'text-[#D4A843]':'text-[#A0A0A0]');
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0f]/85 backdrop-blur-md border-b border-[#2a2a3a]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-widest"><span className="text-[#D4A843]">DENI</span><span className="text-[#F5F5F5]">XE</span></a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l=><a key={l.href} href={isZh?"/zh"+l.href:l.href} className="text-sm text-[#A0A0A0] hover:text-[#D4A843] transition-colors">{l.label}</a>)}
          <div className="flex items-center gap-2 ml-4 border-l border-[#2a2a3a] pl-4">
            <button onClick={()=>switchLang('en')} className={navClass(!isZh)}>EN</button>
            <span className="text-[#2a2a3a]">|</span>
            <button onClick={()=>switchLang('zh')} className={navClass(isZh)}>中文</button>
          </div>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          {open?<X className="text-[#F5F5F5]"/>:<Menu className="text-[#F5F5F5]"/>}
        </button>
      </div>
      {open&&(
        <div className="md:hidden bg-[#0a0a0f] border-b border-[#2a2a3a] px-4 py-3 flex flex-col gap-3">
          {links.map(l=><a key={l.href} href={isZh?"/zh"+l.href:l.href} className="text-sm text-[#A0A0A0] hover:text-[#D4A843] transition-colors">{l.label}</a>)}
          <div className="flex gap-2 pt-2 border-t border-[#2a2a3a]">
            <button onClick={()=>switchLang('en')} className={mobileClass(!isZh)}>EN</button>
            <button onClick={()=>switchLang('zh')} className={mobileClass(isZh)}>中文</button>
          </div>
        </div>
      )}
    </header>
  );
}
