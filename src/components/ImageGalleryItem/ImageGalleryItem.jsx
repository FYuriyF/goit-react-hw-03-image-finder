import style from '../ImageGallery/ImageGallery.module.css';

export const ImageGalleryItem = ({
  image,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  const { id, webformatURL, tags, largeImageURL } = image;

  const handleClick = () => {
    handleModalImage(largeImageURL);
    handleModalAlt(tags);
    showModal();
  };

  return (
    <li key={id} className={style.ImageGalleryItem} onClick={handleClick}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem__image}
      />
    </li>
  );
};
