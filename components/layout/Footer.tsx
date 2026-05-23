export default function Footer() {
  const productLinks = [
    { href: '/products/dnx', label: 'DNX Series' },
    { href: '/products/hps', label: 'HPS Series' },
    { href: '/products/scroll', label: 'WX Series' },
  ];
  const companyLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];
  const industryLinks = [
    { href: '/industries', label: 'Aerospace' },
    { href: '/industries', label: 'Defense & Marine' },
    { href: '/industries', label: 'Automotive' },
    { href: '/industries', label: 'Medical Devices' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">DENIXE</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Precision CNC machining centers. German-standard engineering from Suzhou, China.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map(l => (
                <li key={l.label}><a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 Denixe Precision Machinery. All rights reserved.</p>
          <p className="text-xs text-gray-400">info@denixe.com</p>
        </div>
      </div>
    </footer>
  );
}
