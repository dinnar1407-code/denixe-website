'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const pf = useTranslations('products');
  const ft = useTranslations('footer');
  const nv = useTranslations('nav');

  const productLinks = [
    { href: '/products/dnx', label: pf('dnx.name') },
    { href: '/products/hps', label: pf('hps.name') },
    { href: '/products/scroll', label: pf('scroll.name') },
  ];

  const companyLinks = [
    { href: '/about', label: nv('about') },
    { href: '/contact', label: nv('contact') },
  ];

  const industryLabels = [
    'Aerospace', 'Defense & Marine', 'Automotive', 'Medical Devices',
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">DENIXE</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {ft('brandDesc')}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{ft('products')}</h4>
            <ul className="space-y-2">
              {productLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{ft('company')}</h4>
            <ul className="space-y-2">
              {companyLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{ft('industries')}</h4>
            <ul className="space-y-2">
              {industryLabels.map(label => (
                <li key={label}><a href="/industries" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">{ft('copyright')}</p>
          <p className="text-xs text-gray-400">{ft('email')}</p>
        </div>
      </div>
    </footer>
  );
}
