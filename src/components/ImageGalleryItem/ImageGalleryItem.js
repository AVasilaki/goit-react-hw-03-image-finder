import { Modalw } from 'components/Modal/Modal';
import { Component } from 'react';
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
        <li className="gallery-item" onClick={this.onOpenModal}>
          <img src={item.webformatURL} alt="" />
        </li>
        <Modalw
          isOpen={this.state.isOpenModal}
          isClose={this.onCloseModal}
          large={item.largeImageURL}
        ></Modalw>
        {/* <Modal large={item.largeImageURL}></Modal> */}
      </>
    );
  }
}
// export const ImageGaleryItem = ({ item }) => {};
