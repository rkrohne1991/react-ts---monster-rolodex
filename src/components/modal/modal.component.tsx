import React from "react";
import ReactDOM from "react-dom";

import classes from "./modal.module.scss";

type ModalProps = {
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Backdrop: React.FC<ModalProps> = ({ onClose }) => (
  <div className={classes["backdrop-background"]} onClick={onClose} />
);

const ModalOverlay: React.FC = ({ children }) => (
  <div className={classes["modal-container"]}>
    <div>{children}</div>
  </div>
);

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>
        <div>{children}</div>
      </ModalOverlay>,
      portalElement
    )}
  </>
);

export default Modal;
