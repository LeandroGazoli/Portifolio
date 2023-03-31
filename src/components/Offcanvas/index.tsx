import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: number | string;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose, children, size }) => {
  const [removeOverlay, setRemoveOverlay] = useState(false);

  const offcanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (removeOverlay) {
      setTimeout(() => {
        setRemoveOverlay(isOpen);
      }, 350);
    } else {
      setRemoveOverlay(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    const offcanvasElement = offcanvasRef.current;

    if (offcanvasElement) {
      offcanvasElement.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '17px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div
        ref={offcanvasRef}
        className={[styles.offcanvas, styles['offcanvas-end'], isOpen && styles.show].join(' ')}
      >
        <div className={styles['offcanvas-content']}>{children}</div>
      </div>
      {removeOverlay && (
        <div
          className={[styles['offcanvas-overlay'], isOpen && styles.show, styles.fade].join(' ')}
          onClick={handleClose}
        ></div>
      )}
    </>
  );
};
export default Offcanvas;
