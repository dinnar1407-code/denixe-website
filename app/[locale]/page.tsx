'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* ────────── AnimatedWord ────────── */
function AnimatedWord({
  word,
  index,
  baseDelayMs = 50,
}: {
  word: string;
  index: number;
  baseDelayMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${index * baseDelayMs}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {word}
    </span>
  );
}

function AnimatedText({
  text,
  baseDelayMs,
}: {
  text: string;
  baseDelayMs?: number;
}) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <AnimatedWord word={word} index={i} baseDelayMs={baseDelayMs} />
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </>
  );
}

/* ────────── AnimatedScale ────────── */
function AnimatedScaleImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.92)',
        transition:
          'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
      className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px]"
    >
      <div className="w-full h-full relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 350px, 400px"
        />
      </div>
    </div>
  );
}

/* ────────── Page ────────── */

/* ────────── ScrollZoomImage ────────── */
function ScrollZoomImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - (rect.top / windowHeight);
        const clamped = Math.max(0, Math.min(1, progress));
        // Scales from 1.0 to 1.15 based on scroll
        setScale(1 + clamped * 0.15);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="w-full h-full relative overflow-hidden">
      <div 
        className="w-full h-full absolute inset-0 transition-transform duration-[50ms] ease-linear will-change-transform"
        style={{ transform: `scale(${scale})` }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

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
      {/* ── Animated Hero ── */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text — 60% */}
            <div className="flex-1 lg:w-[60%] max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                <AnimatedText
                  text="Precision Beyond Limits"
                  baseDelayMs={50}
                />
              </h1>
              <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-xl">
                <AnimatedText
                  text="German-standard engineering from Suzhou. 0.002mm repeatability. Military-grade quality."
                  baseDelayMs={40}
                />
              </p>
              <div className="mt-10">
                <a
                  href="/products"
                  className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
                >
                  Explore our machines <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right: 3D Product Image — 40% */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <AnimatedScaleImage
                src="/images/products/dnx700u-realistic.webp"
                alt="DNX 700U 5-Axis Machining Center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight — Anthropic Style Black Card */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#191818] rounded-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Left text */}
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                DNX 700U Series
              </h2>
              <p className="text-[#a1a1a5] text-lg md:text-xl leading-relaxed mb-10 max-w-md font-light">
                5-Axis Simultaneous Machining Center. B-axis tilting ±110°, C-axis 360°. VDI 3441 certified precision.
              </p>
              <div>
                <a
                  href="/products/dnx"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
                >
                  View specifications
                </a>
              </div>
            </div>
            {/* Right image with scroll zoom */}
            <div className="w-full md:w-[50%] h-[400px] md:h-auto relative bg-[#0d0d0d] overflow-hidden">
               <ScrollZoomImage src="/images/products/dnx700u-realistic.webp" alt="DNX 700U" />
            </div>
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
