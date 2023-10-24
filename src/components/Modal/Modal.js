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
  };
  Modal.setAppElement('#root');
  return (
    <Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
      <div className="Overlay">
        <div className="Modal">
          <img src={large} alt="" />
        </div>
      </div>
    </Modal>
  );
};
