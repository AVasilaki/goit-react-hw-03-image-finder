import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galery }) => {
  return (
    <ul className="ImageGallery">
      {galery.map(item => (
        <ImageGaleryItem key={item.id} item={item}></ImageGaleryItem>
      ))}
    </ul>
  );
};
