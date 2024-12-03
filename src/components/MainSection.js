import '../App.css';
import logo from '../assets/images/logo.jpg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {

  const { t } = useTranslation();

  return (
      <div className="main-section">
        <div className="main-content">
          <span>{t('description')}</span>
        </div>
      </div>
  );
};

export default Header;
