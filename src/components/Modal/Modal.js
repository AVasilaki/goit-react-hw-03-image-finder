import Modal from 'react-modal';
import '../Modal/Modal.css';
export const Modalw = ({ isOpen, large, isClose }) => {
  console.log(isOpen);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="Overlay">
        <div className="Modal">
          <img src={large} alt="" />
        </div>
      </div>
    </Modal>
  );
};

// import * as basicLightbox from 'basiclightbox';
// export const Modal = ({ large }) => {
//   const instance = basicLightbox.create(`
//     <div class="overlay">
//   <div class="modal">
//     <img src="${large}" alt="" />
//   </div>
// </div>
// `);

//   instance.show();
// };
