import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'contact'});
  return {
    title: `${t('title')} — DENIXE`,
    description: t('subtitle'),
  };
}

export default function ContactLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}
