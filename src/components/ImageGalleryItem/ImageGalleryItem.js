import { Modalw } from 'components/Modal/Modal';
import { Component } from 'react';
import '../styles.css';

export class ImageGaleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  onOpenModal = () => {
    this.setState({ isOpenModal: true });
  };

  onCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { item } = this.props;
    return (
      <>
        <li className="ImageGalleryItem " onClick={this.onOpenModal}>
          <img
            className="ImageGalleryItem-image "
            src={item.webformatURL}
            alt=""
          />
        </li>
        <Modalw
          isOpen={this.state.isOpenModal}
          isClose={this.onCloseModal}
          large={item.largeImageURL}
        ></Modalw>
      </>
    );
  }
}
