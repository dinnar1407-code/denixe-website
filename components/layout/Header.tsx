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

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight text-gray-900">DENIXE</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l=><a key={l.href} href={isZh?"/zh"+l.href:l.href} className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors">{l.label}</a>)}
          <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-4">
            <button onClick={()=>switchLang('en')} className={`text-sm px-2 py-1 rounded transition-colors ${!isZh?'text-gray-900 font-semibold':'text-gray-400 hover:text-gray-700'}`}>EN</button>
            <span className="text-gray-300">|</span>
            <button onClick={()=>switchLang('zh')} className={`text-sm px-2 py-1 rounded transition-colors ${isZh?'text-gray-900 font-semibold':'text-gray-400 hover:text-gray-700'}`}>中文</button>
          </div>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          {open?<X className="text-gray-900"/>:<Menu className="text-gray-900"/>}
        </button>
      </div>
      {open&&(
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-3">
          {links.map(l=><a key={l.href} href={isZh?"/zh"+l.href:l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{l.label}</a>)}
          <div className="flex gap-2 pt-3 border-t border-gray-200">
            <button onClick={()=>switchLang('en')} className={`text-sm px-3 py-1 rounded ${!isZh?'text-gray-900 font-semibold':'text-gray-400'}`}>EN</button>
            <button onClick={()=>switchLang('zh')} className={`text-sm px-3 py-1 rounded ${isZh?'text-gray-900 font-semibold':'text-gray-400'}`}>中文</button>
          </div>
        </div>
      )}
    </header>
  );
}
