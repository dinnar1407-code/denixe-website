import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'products'});
  return {
    title: `${t('hps.name')} — DENIXE`,
    description: t('hps.desc'),
  };
}

export default function HPSPage() {
  const t = useTranslations('products');

  const specKeys = [
    'axisTravel', 'tableSize', 'maxLoad',
    'spindleSpeed', 'spindleTaper', 'toolMagazine', 'rapidTraverse',
    'positioning', 'repeatability', 'control',
  ] as const;

  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            {t('backToProducts')}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('hps.tag')}
              </span>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                {t('hps.heroTitle')}
              </h1>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                {t('hps.heroDesc')}
              </p>
            </div>
            <div className="aspect-[4/3] relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <Image
                src="/images/products/hps1000-realistic.webp"
                alt={t('imageAlt', {series: t('hps.name')})}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t('hps.specs.title')} — {t('hps.specs.table')}
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {specKeys.map((key, i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-3 font-medium text-gray-700 w-1/2">
                      {t(`hps.specs.${key}`)}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {t(`hps.specValues.${key}`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
