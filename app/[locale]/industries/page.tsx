import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

const industryIcons: Record<string, string> = {
  aerospace: '✈️',
  defense: '🛡️',
  automotive: '🚗',
  medical: '🏥',
  molds: '🔧',
  compressor: '⚙️',
  energy: '⚡',
};

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'industries'});
  return {
    title: `${t('title')} — DENIXE`,
    description: t('subtitle'),
  };
}

export default function IndustriesPage() {
  const t = useTranslations('industries');
  const industryKeys = ['aerospace', 'defense', 'automotive', 'medical', 'molds', 'compressor', 'energy'] as const;

  return (
    <>
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

      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryKeys.map((key) => (
              <div
                key={key}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-4">
                  {industryIcons[key] || '🏭'}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`cards.${key}.name`)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t(`cards.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-base font-medium text-gray-900 hover:underline"
            >
              {t('backToProducts')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
