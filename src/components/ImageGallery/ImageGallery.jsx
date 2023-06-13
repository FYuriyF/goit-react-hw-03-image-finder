import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export const ImageGallery = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  return (
    <section>
      <h2 className="visually-hidden">gallery section</h2>
      <ul className={style.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            handleModalImage={handleModalImage}
            handleModalAlt={handleModalAlt}
            showModal={showModal}
          />
        ))}
      </ul>
    </section>
  );
};
