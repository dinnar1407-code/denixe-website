import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'about'});
  return {
    title: `${t('title')} — DENIXE`,
    description: t('subtitle'),
  };
}

export default function AboutPage() {
  const t = useTranslations('about');

  const stats = [
    {value: '30+', label: t('stats.patents')},
    {value: 'ISO 9001', label: t('stats.iso')},
    {value: '15+', label: t('stats.years')},
    {value: 'VDI 3441', label: t('stats.vdi')},
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('story.title')}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>{t('story.p1')}</p>
            <p>{t('story.p2')}</p>
            <p>{t('story.p3')}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({value, label}) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t('timeline.title')}
          </h2>
          <div className="relative border-l border-gray-200 ml-3">
            {t.raw('timeline.items').map((item: {year: string; event: string}, i: number) => (
              <div key={i} className="mb-8 ml-6 relative">
                <div className="absolute -left-[31px] w-3 h-3 rounded-full bg-gray-900 border-2 border-white" />
                <span className="text-sm font-semibold text-gray-900">{item.year}</span>
                <p className="mt-1 text-gray-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('location.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {t('location.desc')}
          </p>
          <div className="mt-8 aspect-[16/9] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Map — Suzhou Industrial Park
          </div>
        </div>
      </section>
    </>
  );
}
