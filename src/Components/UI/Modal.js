import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
//ikisinde de kullanacagimiz icin helper constant olarak kullandim, uzun uzun iki kere yazmak yerine direkt olarak burada tanimladim.
const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>  portal kullanilmasaydi boyle de yapilabilirdi.*/}
    </>
  );
};

export default Modal;
//export edildigi icin main componentimiz Modal, digerleri bu sayfa icerisinde kullaniliyor ve export edilmediler.
