import Modal from 'react-modal';
import '../Modal/Modal.css';
export const Modalw = ({ isOpen, large, isClose }) => {
  console.log(isOpen);
  const customStyles = {
    content: {
      width: '95%',
      height: '95%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'gray',
    },
    // content: {
    //   position: 'absolute',
    //   top: '40px',
    //   left: '40px',
    //   right: '40px',
    //   bottom: '40px',
    //   border: '1px solid #ccc',
    //   background: '#fff',
    //   overflow: 'auto',
    //   WebkitOverflowScrolling: 'touch',
    //   borderRadius: '4px',
    //   outline: 'none',
    //   padding: '20px',
    // },
  };
  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={isClose}
      style={customStyles}
      // contentLabel="Example Modal"
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
