import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    key: 'dnx',
    image: '/images/products/dnx700u-realistic.webp',
  },
  {
    key: 'hps',
    image: '/images/products/hps1000-realistic.webp',
  },
  {
    key: 'scroll',
    image: '/images/products/wx1-realistic.webp',
  },
] as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'products'});
  return {
    title: `${t('title')} — DENIXE`,
    description: t('subtitle'),
  };
}

export default function ProductsPage() {
  const t = useTranslations('products');

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(({key, image}) => {
              const name = t(`${key}.name`);
              const tag = t(`${key}.tag`);
              const desc = t(`${key}.desc`);
              return (
                <Link
                  key={key}
                  href={`/products/${key}`}
                  className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className="aspect-[4/3] relative bg-gray-50">
                    <Image
                      src={image}
                      alt={t('imageAlt', {series: name})}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:underline">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:underline">
                      {t('learnMore')} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
