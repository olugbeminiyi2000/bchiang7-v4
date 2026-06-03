import i18n, { SUPPORTED } from './src/i18n/config';

export const onClientEntry = () => {
  const normalize = raw => {
    const base = (raw || 'en').split(/[-_]/)[0].toLowerCase();
    return SUPPORTED.includes(base) ? base : 'en';
  };

  const stored = localStorage.getItem('i18nextLng');
  if (stored) {
    const code = normalize(stored);
    localStorage.setItem('i18nextLng', code);
    i18n.changeLanguage(code);
    return;
  }

  const code = normalize(navigator.language);
  i18n.changeLanguage(code);
};
