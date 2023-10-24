import { Modal } from 'components/Modal/Modal';

export const ImageGaleryItem = ({ item }) => {
  return (
    <>
      <li className="gallery-item">
        <img src={item.webformatURL} alt="" />
      </li>
      <Modal large={item.largeImageURL}></Modal>
    </>
  );
};
