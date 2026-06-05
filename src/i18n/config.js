import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import fr from './locales/fr';
import es from './locales/es';
import ar from './locales/ar';
import pt from './locales/pt';
import nl from './locales/nl';
import de from './locales/de';
import zh from './locales/zh';
import ja from './locales/ja';

const SUPPORTED = ['en', 'fr', 'es', 'ar', 'pt', 'nl', 'de', 'zh', 'ja'];

export { SUPPORTED };

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es },
    ar: { translation: ar },
    pt: { translation: pt },
    nl: { translation: nl },
    de: { translation: de },
    zh: { translation: zh },
    ja: { translation: ja },
  },
  fallbackLng: 'en',
  supportedLngs: SUPPORTED,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

if (typeof window !== 'undefined') {
  const setDocDir = lng => {
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-lang', lng);
  };
  i18n.on('languageChanged', setDocDir);
}

export default i18n;
