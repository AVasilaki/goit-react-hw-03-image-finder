export const ImageGaleryItem = ({ item }) => {
  return (
    <li className="gallery-item">
      <img src={item.webformatURL} alt="" />
    </li>
  );
};
