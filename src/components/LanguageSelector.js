import React, {useContext, useEffect, useRef, useState} from 'react';
import { LanguageContext } from '../context/LanguageContext';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  { name: 'Latviešu', code: 'lv' },
  { name: 'Lietuvių', code: 'lt' },
  { name: 'Eesti', code: 'ee' },
  { name: 'Русский', code: 'ru' },
  { name: 'English', code: 'us' },
  { name: 'Polski', code: 'pl' }, // Polish
  { name: 'Deutsch', code: 'de' }, // German
  { name: 'Español', code: 'es' }, // Spanish
  { name: 'Français', code: 'fr' }, // French
  { name: 'Svenska', code: 'se' }, // Swedish
  { name: 'Suomi', code: 'fi' }, // Finnish
  { name: 'Norsk', code: 'no' }, // Norwegian
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
          <span className={`fi fi-${languages.find((lang) => lang.code === userLanguage)?.code}`}></span>
          <span>
            {languages.find((lang) => lang.code === userLanguage)?.name || '🌐'}
          </span>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {languages.map(({ name, code, flag }) => (
              <div
                key={code}
                className="dropdown-item"
                onClick={() => handleChangeLang(code)}
              >
                <span className="flag"><span className={`fi fi-${code}`}></span></span>
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
