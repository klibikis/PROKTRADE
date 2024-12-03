import '../App.css';
import {gallery} from '../data/gallery'
import {useTranslation} from "react-i18next";

const Gallery = () => {

  const { t } = useTranslation();

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img className="gallery-image" src={image.src} alt={`Gallery item ${index + 1}`} />
            <div className="gallery-overlay">
              <div className='gallery-text'>{t(image.description)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
