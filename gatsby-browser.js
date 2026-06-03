import i18n, { SUPPORTED } from './src/i18n/config';

// Maps ISO country codes to the languages we support
const COUNTRY_TO_LANG = {
  // Dutch
  NL: 'nl',
  BE: 'nl',
  SR: 'nl',
  // French
  FR: 'fr',
  CD: 'fr',
  CI: 'fr',
  SN: 'fr',
  CM: 'fr',
  MG: 'fr',
  ML: 'fr',
  BF: 'fr',
  GN: 'fr',
  NE: 'fr',
  BJ: 'fr',
  TG: 'fr',
  // German
  DE: 'de',
  AT: 'de',
  LU: 'de',
  // Spanish
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  PE: 'es',
  VE: 'es',
  CL: 'es',
  EC: 'es',
  GT: 'es',
  CU: 'es',
  BO: 'es',
  DO: 'es',
  HN: 'es',
  PY: 'es',
  SV: 'es',
  NI: 'es',
  CR: 'es',
  PA: 'es',
  UY: 'es',
  // Portuguese
  PT: 'pt',
  BR: 'pt',
  AO: 'pt',
  MZ: 'pt',
  CV: 'pt',
  GW: 'pt',
  // Arabic
  SA: 'ar',
  EG: 'ar',
  AE: 'ar',
  IQ: 'ar',
  JO: 'ar',
  MA: 'ar',
  DZ: 'ar',
  TN: 'ar',
  LY: 'ar',
  SD: 'ar',
  SY: 'ar',
  YE: 'ar',
  OM: 'ar',
  KW: 'ar',
  QA: 'ar',
  BH: 'ar',
  LB: 'ar',
  PS: 'ar',
  // Chinese
  CN: 'zh',
  TW: 'zh',
  SG: 'zh',
  HK: 'zh',
  MO: 'zh',
  // Japanese
  JP: 'ja',
};

export const onClientEntry = () => {
  const normalize = raw => {
    const base = (raw || 'en').split(/[-_]/)[0].toLowerCase();
    return SUPPORTED.includes(base) ? base : 'en';
  };

  // Respect an explicit user choice above everything else
  const stored = localStorage.getItem('i18nextLng');
  if (stored) {
    const code = normalize(stored);
    localStorage.setItem('i18nextLng', code);
    i18n.changeLanguage(code);
    return;
  }

  // If the browser itself is set to a non-English language we support, use it
  const browserLang = normalize(navigator.language);
  if (browserLang !== 'en') {
    i18n.changeLanguage(browserLang);
    return;
  }

  // Browser reports English — fall back to IP geolocation to infer country
  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(({ country_code }) => {
      const lang = COUNTRY_TO_LANG[country_code] || 'en';
      i18n.changeLanguage(lang);
    })
    .catch(() => {
      // Geolocation unavailable — stay with English
    });
};
