import React, { useEffect, useRef, useState, ReactElement } from "react";
import ReactDOM from "react-dom";
import styles from './index.module.css'
interface ModalType {
  show:boolean;
  onClose:any;
  children:ReactElement<any, any>;
  title?:string;
  width:string;
  height:string;
  fullSize?:boolean;
}

const ModalWindow = ({show, onClose, children, title, width, height, fullSize }: ModalType) => {
    const [isBrowser, setIsBrowser] = useState(false);

    // create ref for the StyledModalWrapper component
    const modalWrapperRef = React.useRef<HTMLDivElement>(null);

    // check if the user has clickedinside or outside the modal
    const backDropHandler = (e:any) => {
      if (!modalWrapperRef?.current?.contains(e.target)) {
          onClose();
      }
    }
  
    useEffect(() => {
      setIsBrowser(true);
     // attach event listener to the whole windor with our handler
      //window.addEventListener('click', backDropHandler);

      // remove the event listener when the modal is closed
      return () => window.removeEventListener('click', backDropHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCloseClick = (e: any) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
    <div className={styles.ModalOverlay}>
        <div className={styles.ModalWrapper} ref={modalWrapperRef} style={{'width': width, 'height': height}}>
            <div className={styles.Modal + ' ' + (fullSize?styles.black:styles.white)}>
                <div className={styles.ModalHeader}>
                    {title && <div className={styles.ModalTitle}>{title}</div>}
                    <a href="#" onClick={handleCloseClick}>x</a>
                </div>
                <div className={styles.ModalBody}>{children}</div>
            </div>
        </div>
    </div>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")??new Element()
      );
    } else {
      return null;
    }
};
ModalWindow.defaultProps = {
  fullSize: true
};
export { ModalWindow }