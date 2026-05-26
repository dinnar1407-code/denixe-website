'use client';
import {useState} from 'react';
import {Menu,X,Globe} from 'lucide-react';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {useRouter, usePathname} from '@/i18n/routing';
import {useParams} from 'next/navigation';

const allLocales:{code:string;native:string}[]=[
  {code:'en',native:'English'},
  {code:'zh',native:'中文'},
  {code:'de',native:'Deutsch'},
  {code:'ja',native:'日本語'},
  {code:'it',native:'Italiano'},
  {code:'ko',native:'한국어'},
  {code:'hi',native:'हिन्दी'},
  {code:'pt',native:'Português'},
  {code:'fr',native:'Français'},
];

export default function Header() {
  const [open,setOpen]=useState(false);
  const [langOpen,setLangOpen]=useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = (params.locale as string) || 'en';
  
  const t=useTranslations('nav');

  const links=[
    {href:'/products',label:t('products')},
    {href:'/industries',label:t('industries')},
    {href:'/about',label:t('about')},
    {href:'/contact',label:t('contact')},
  ];

  function switchLang(lang:string) {
    router.replace(pathname, {locale: lang});
    setLangOpen(false);
  }

  function localPath(href:string) {
    return href;
  }

  const currentNative=allLocales.find(l=>l.code===currentLocale)?.native||'English';

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => router.push('/')} className="flex items-center">
          {/* Logo: ~234x72 (缩小10%) */}
          <Image src="/denixe-logo.png" alt="DENIXE" width={234} height={72} className="h-18 w-auto" priority />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l=><button key={l.href} onClick={() => router.push(l.href)} className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors">{l.label}</button>)}
          <div className="relative ml-4 border-l border-gray-200 pl-4">
            <button
              onClick={()=>setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe size={14}/>
              <span>{currentNative}</span>
            </button>
            {langOpen&&(
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50 max-h-64 overflow-y-auto">
                {allLocales.map(l=>(
                  <button
                    key={l.code}
                    onClick={()=>switchLang(l.code)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      l.code===currentLocale
                        ?'text-gray-900 font-semibold bg-gray-50'
                        :'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {l.native}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          {open?<X className="text-gray-900"/>:<Menu className="text-gray-900"/>}
        </button>
      </div>
      {open&&(
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-3">
          {links.map(l=><button key={l.href} onClick={() => {router.push(l.href); setOpen(false)}} className="text-left text-sm text-gray-600 hover:text-gray-900 transition-colors">{l.label}</button>)}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
            {allLocales.map(l=>(
              <button
                key={l.code}
                onClick={()=>switchLang(l.code)}
                className={`text-sm px-3 py-1 rounded ${
                  l.code===currentLocale?'text-gray-900 font-semibold bg-gray-100':'text-gray-400 hover:text-gray-700'
                }`}
              >
                {l.native}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
