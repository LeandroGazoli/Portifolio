import React, { useState } from 'react';
import styles from './styles.module.scss';
interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size: number;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose, children, size }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {/* {isOpen && ( */}
      <div
        className={[styles.offcanvas, styles['offcanvas-end'], isOpen && styles.show].join(' ')}
        style={{ width: size | 300 }}
      >
        <div className={styles['offcanvas-content']}>{children}</div>
        <div
          className={styles['offcanvas-overlay']}
          onClick={handleClose}
        ></div>
      </div>
      {/* )} */}
    </>
  );
};
export default Offcanvas;
