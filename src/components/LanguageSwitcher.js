import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

// Normalise 'fr-FR', 'en-US', etc. to the base code
function getBaseCode(lang) {
  const base = (lang || 'en').split(/[-_]/)[0].toLowerCase();
  return LANGUAGES.some(l => l.code === base) ? base : 'en';
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 100;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const StyledToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  border-radius: 30px;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  padding: 8px 14px;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px -5px var(--navy-shadow);
  white-space: nowrap;

  &:hover {
    border-color: var(--green);
    color: var(--green);
  }

  .badge {
    background: var(--green-tint);
    color: var(--green);
    border-radius: 4px;
    padding: 1px 5px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
`;

const StyledDropdown = styled.ul`
  position: absolute;
  bottom: calc(100% + 10px);
  right: 0;
  background: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  list-style: none;
  margin: 0;
  padding: 6px 0;
  min-width: 165px;
  box-shadow: 0 10px 30px -10px var(--navy-shadow);

  li button {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    padding: 8px 16px;
    cursor: pointer;
    transition: var(--transition);

    .badge {
      background: var(--navy);
      color: var(--slate);
      border-radius: 4px;
      padding: 1px 5px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.05em;
      min-width: 26px;
      text-align: center;
    }

    &:hover,
    &.active {
      color: var(--green);
      background: var(--navy);

      .badge {
        background: var(--green-tint);
        color: var(--green);
      }
    }
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const activeCode = getBaseCode(i18n.language);
  const current = LANGUAGES.find(l => l.code === activeCode) || LANGUAGES[0];

  const handleChange = code => {
    localStorage.setItem('i18nextLng', code);
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <StyledWrapper ref={ref} translate="no" className="notranslate">
      {open && (
        <StyledDropdown>
          {LANGUAGES.map(({ code, label }) => (
            <li key={code}>
              <button
                className={code === activeCode ? 'active' : ''}
                onClick={() => handleChange(code)}>
                <span className="badge">{code.toUpperCase()}</span>
                {label}
              </button>
            </li>
          ))}
        </StyledDropdown>
      )}

      <StyledToggle onClick={() => setOpen(o => !o)} aria-label="Select language">
        <span className="badge">{current.code.toUpperCase()}</span>
        {current.label}
      </StyledToggle>
    </StyledWrapper>
  );
};

export default LanguageSwitcher;
