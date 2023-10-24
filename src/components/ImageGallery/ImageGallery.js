import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galery }) => {
  console.log('galery', galery);
  return (
    <>
      <ul className="gallery">
        {galery.map(item => (
          <ImageGaleryItem key={item.id} item={item}></ImageGaleryItem>
        ))}
      </ul>
    </>
  );
};
