import Image from 'next/image';

export default function HomePage() {
  const products = [
    {
      name: 'DNX Series',
      tag: 'Flagship',
      desc: '5-Axis Simultaneous Machining Center. B-axis tilting ±110°, C-axis 360°. VDI 3441 certified ±0.002mm repeatability.',
      img: '/images/products/dnx700u-realistic.webp',
      href: '/products/dnx',
    },
    {
      name: 'HPS Series',
      tag: 'Precision',
      desc: 'High-Speed 3-Axis Vertical Machining Center. 42,000 rpm spindle, German-standard cast iron construction.',
      img: '/images/products/hps1000-realistic.webp',
      href: '/products/hps',
    },
    {
      name: 'WX Series',
      tag: 'Specialized',
      desc: 'Ultra-Precision Scroll Compressor Special Machine. Purpose-built for EV compressor scroll disc manufacturing.',
      img: '/images/products/wx1-realistic.webp',
      href: '/products/scroll',
    },
  ];

  const industries = [
    'Aerospace',
    'Defense & Marine',
    'Automotive',
    'Medical Devices',
    'Precision Molds',
    'Compressor',
    'Energy',
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Precision machining centers that replace imports at half the cost
          </h1>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-2xl">
            German-standard engineering from Suzhou, China. 30+ years of precision. 0.002mm
            repeatability. Trusted by China&apos;s top defense and aerospace manufacturers.
          </p>
          <div className="mt-10">
            <a
              href="/products"
              className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
            >
              View our machines <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Spotlight — DNX 700U */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-gray-200 rounded-lg p-8 md:p-12">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Flagship
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
              DNX 700U — 5-Axis Simultaneous Machining Center
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed max-w-3xl">
              B-axis tilting ±110°, C-axis 360°. VDI 3441 certified. The precision you need for
              complex aerospace and defense components.
            </p>
            <div className="mt-6">
              <a
                href="/products/dnx"
                className="inline-flex items-center gap-1 text-sm text-gray-900 hover:underline font-medium"
              >
                View specifications <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines — 3-column card grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Product Lines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="border border-gray-200 rounded-lg p-6 flex flex-col"
              >
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-6">
                  <a
                    href={p.href}
                    className="inline-flex items-center gap-1 text-sm text-gray-900 hover:underline font-medium"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            30+ years of precision engineering, trusted by China&apos;s top ten defense groups.
          </h2>
          <p className="mt-6 text-base text-gray-500 leading-relaxed">
            Founded in Suzhou Industrial Park, DENIXE delivers high-end CNC machining centers that
            replace German, Swiss, and Japanese imports. Our commitment to precision is backed by
            ISO 9001 certification, 20+ patents, and VDI 3441 testing standards.
          </p>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Explore the machines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <div className="w-full aspect-[4/3] relative border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={p.img}
                    alt={`${p.name} machining center`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-gray-900">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Industries Served
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {industries.map((ind) => (
              <a
                key={ind}
                href="/industries"
                className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                {ind}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ready to discuss your machining requirements?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
            >
              Contact engineering <span aria-hidden="true">→</span>
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
            >
              Request specifications <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
