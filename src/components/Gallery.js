import '../App.css';
import {gallery} from '../data/gallery'
import {useTranslation} from "react-i18next";

const Gallery = () => {

  const { t } = useTranslation();

  const handleItemClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={handleItemClick}
          >
            <img className="gallery-image" src={image.src} alt={`Gallery item ${index + 1}`} />
            <div className="gallery-overlay"></div>
            <div className='gallery-text'>{t(image.description)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
