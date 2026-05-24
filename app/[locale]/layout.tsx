import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import '@/app/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  const validLocales=routing.locales as readonly string[];
  const resolvedLocale=locale||routing.defaultLocale;
  if(!validLocales.includes(resolvedLocale)) notFound();
  const messages=await getMessages();
  return (
    <html lang={resolvedLocale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header/>
          <main className="flex-1">{children}</main>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
