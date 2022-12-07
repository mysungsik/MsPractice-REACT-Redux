import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

function ModalBackDrop(props) {
  const { closeModal } = props;
  return <div className={styles.backDrop} onClick={closeModal}></div>;
}
function ModalContent(props) {
  const { closeModal } = props;
  return (
    <div className={styles.modalContent} onClick={closeModal}>
      <h1> 이것은 Modal</h1>
      <h2> 모달이 띄워졌습니다. 아무곳이나 눌러 제거하세요</h2>
    </div>
  );
}

function Modal(props) {
  const { closeModal } = props;

  return (
    <div>
      {createPortal(
        <ModalBackDrop closeModal={closeModal} />,
        document.getElementById("root-modal-backdrop")
      )}
      {createPortal(
        <ModalContent closeModal={closeModal} />,
        document.getElementById("root-modal-content")
      )}
    </div>
  );
}

export default Modal;
