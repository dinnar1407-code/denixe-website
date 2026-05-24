'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const infoItems = [
    {label: t('info.company'), icon: '🏢'},
    {label: t('info.address'), icon: '📍'},
    {label: t('info.phone'), icon: '📞'},
    {label: t('info.email'), icon: '✉️'},
    {label: t('info.hours'), icon: '🕐'},
  ];

  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                  <p className="text-lg font-medium text-gray-900">
                    {t('form.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                      {t('form.error')}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? t('form.submitting') : t('form.submit')}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {t('info.title')}
              </h3>
              <div className="space-y-4">
                {infoItems.map(({label, icon}) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{icon}</span>
                    <span className="text-sm text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                Map placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
