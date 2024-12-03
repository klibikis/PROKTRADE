import React, {useContext, useEffect, useRef, useState} from 'react';
import { LanguageContext } from '../context/LanguageContext';

const languages = [
  { name: 'Latviešu', code: 'lv', flag: '🇱🇻' },
  { name: 'Lietuvių', code: 'lt', flag: '🇱🇹' },
  { name: 'Eesti', code: 'ee', flag: '🇪🇪' },
  { name: 'Русский', code: 'ru', flag: '🇷🇺' },
  { name: 'English', code: 'en', flag: '🇺🇸' },
  { name: 'Svenska', code: 'sv', flag: '🇸🇪' }, // Swedish
  { name: 'Français', code: 'fr', flag: '🇫🇷' }, // French
  { name: 'Suomi', code: 'fi', flag: '🇫🇮' }, // Finnish
  { name: 'Español', code: 'es', flag: '🇪🇸' }, // Spanish
  { name: 'Deutsch', code: 'de', flag: '🇩🇪' }, // German
  { name: 'Norsk', code: 'no', flag: '🇳🇴' }, // Norwegian
];

const LanguageSelector = () => {
  const { userLanguage, setUserLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const handleChangeLang = (lang) => {
    localStorage.setItem('language', lang);
    setUserLanguage(lang);
    setIsOpen(false)
  };

  const handleClickOutside = (event) => {
    console.log('click outside')
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-selector">
      <div className="dropdown" ref={dropdownRef}>
        <button className="dropdown-btn" onClick={handleToggleDropdown}>
          {languages.find((lang) => lang.code === userLanguage)?.name || '🌐'}
          &nbsp;
          {languages.find((lang) => lang.code === userLanguage)?.flag || '🌐'}
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {languages.map(({ name, code, flag }) => (
              <div
                key={code}
                className="dropdown-item"
                onClick={() => handleChangeLang(code)}
              >
                <span className="flag">{flag}</span>
                <span className="language-name">{name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
