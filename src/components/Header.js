import '../App.css';
import logo from '../assets/images/logo.jpg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {

  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <div className='header-info'>

          <h1 className='header-title1'>{t('title')} PROKTRADE</h1>
          <h1 className='header-title2'>{t('title2')}</h1>
          <LanguageSelector />
        </div>
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
