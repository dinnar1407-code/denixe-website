'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
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

function AnimatedText({ text, baseDelayMs }: { text: string; baseDelayMs?: number }) {
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


/* ═══════════════════════════════════════════════
   🎛️  TUNING PARAMETERS — change these numbers
   then run: npx next build && vercel --prod --yes
   ═══════════════════════════════════════════════ */
const IMAGE_INITIAL_SCALE  = 1.5;    // matches card height
const IMAGE_MAX_SCALE      = 2.0;     // 2. 图片最大放大量 (1.5~4.0, 越大越近 = 局部细节)
const IMAGE_SHIFT_X        = '-5%';  // 3. 图片水平偏移 (如 '-5%' 左移, '5%' 右移)
const IMAGE_SHIFT_Y        = '-4%';  // 4. 图片垂直偏移 (如 '-4%' 上移, '4%' 下移)
const TEXT_MIN_SCALE       = 0.65;   // 5. 文字最小缩放 (0.3~1.0, 0.65=缩到65%)
const TEXT_MAX_SCALE       = 1;    // 6. 文字最大回弹 (1.0~2.5, 1.5=放大50%)
const TEXT_SHIFT_X         = '-6%';  // 7. 文字水平偏移 (如 '-6%' 左移)
const CARD_MIN_HEIGHT      = 720;
// 9. 卡片初始水平 margin → 0 (物理留白缩小到满屏)    // 8. 卡片最小高度 px (400~800)
/* ═══════════════════════════════════════════════ */

export default function HomePage() {
  const t = useTranslations('home');

  const featureRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featureRef,
    offset: ['start end', 'end start'],
  });

  // ── Card: from normal → fills screen
  // As you scroll down through this section, the card grows to fill more of the viewport
  const cardMargin = useTransform(scrollYProgress, [0, 0.55], ['12rem', '0rem']);

  // ── Image: starts small (showing the whole machine) → zooms in to detail
  // scale: 0.85 (overview) → 2.5x (close-up detail of the spindle/work area)
  const imageScale = useTransform(scrollYProgress, [0, 0.75, 1], [IMAGE_INITIAL_SCALE, IMAGE_INITIAL_SCALE, IMAGE_MAX_SCALE]);
  // Shift zoom focal point toward center
  const imageX = useTransform(scrollYProgress, [0, 0.6], ['0%', IMAGE_SHIFT_X]);
  const imageY = useTransform(scrollYProgress, [0, 0.6], ['0%', IMAGE_SHIFT_Y]);

  // ── Text: compress → expand
  // First shrinks to 0.65x, then expands back to 0.97x
  const textScale = useTransform(scrollYProgress, [0, 0.25, 0.6], [1, TEXT_MIN_SCALE, TEXT_MAX_SCALE]);
  const textX = useTransform(scrollYProgress, [0, 0.55], ['0%', TEXT_SHIFT_X]);

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
    'Aerospace', 'Defense & Marine', 'Automotive', 'Medical Devices',
    'Precision Molds', 'Compressor', 'Energy',
  ];

  return (
    <>
      {/* ── Hero: text-only ── */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            <AnimatedText text={t('hero.title')} baseDelayMs={50} />
          </h1>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-2xl">
            <AnimatedText
              text={t('hero.subtitle')}
              baseDelayMs={40}
            />
          </p>
          <div className="mt-10">
            <a
              href="/products"
              className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
            >
              {t('hero.explore')} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Feature Spotlight: Full-viewport parallax card ── */}
      <section ref={featureRef} className="pt-4 pb-16 md:pt-8 md:pb-20 bg-white">
        <motion.div
          className="bg-[#191818] rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style={{ marginLeft: cardMargin, marginRight: cardMargin, minHeight: `${CARD_MIN_HEIGHT}px` }}
        >
          {/* Left: text — compress then expand */}
          <motion.div
            className="p-10 md:p-16 flex flex-col justify-center text-white"
            style={{ flex: '0 0 45%', scale: textScale, x: textX }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {t('feature.title')}
            </h2>
            <p className="text-[#a1a1a5] text-lg md:text-xl leading-relaxed mb-10 max-w-md font-light">
              {t('feature.desc')}
            </p>
            <div>
              <a
                href="/products/dnx"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                {t('feature.cta')}
              </a>
            </div>
          </motion.div>

          {/* Right: image — starts showing full machine, zooms into detail */}
          <div className="flex-1 relative overflow-hidden" style={{ minHeight: `${CARD_MIN_HEIGHT}px` }}>
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{ scale: imageScale, x: imageX, y: imageY }}
            >
              <Image
                src="/images/products/dnx700u-realistic.webp"
                alt="DNX 700U 5-Axis Machining Center"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Mission ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {t('mission.title')}
          </h2>
          <p className="mt-6 text-base text-gray-500 leading-relaxed">
            {t('mission.desc')}
          </p>
        </div>
      </section>

      {/* ── Product Images ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            {t('productsTitle')}
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

      {/* ── Industries ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            {t('industriesTitle')}
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t('cta.title')}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
            >
              {t('cta.contact')} <span aria-hidden="true">→</span>
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-1 text-base text-gray-900 hover:underline font-medium"
            >
              {t('cta.specs')} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
