import React, { useState, ReactNode, HTMLAttributes, useEffect } from 'react';

import styles from './styles.module.scss';

interface SubmenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  anchorEl?: HTMLElement | undefined;
  onClose: () => void;
}

const Menu: React.FC<SubmenuProps> = ({ children, open, anchorEl, onClose, ...rest }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentAnchorEl, setCurrentAnchorEl] = useState<HTMLElement | null | undefined>(anchorEl);

  useEffect(() => {
    setIsOpen(open);
    setCurrentAnchorEl(anchorEl);
  }, [open]);

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className={styles.modal}
        >
          <div
            className={`${styles.backdrop} ${isOpen && styles.open}`}
            onClick={onClose}
          ></div>
          <div
            {...rest}
            className={`${styles.cardPaper} ${rest.className}`}
            style={{
              position: 'absolute',
              top: Number(currentAnchorEl?.offsetTop) + Number(currentAnchorEl?.offsetHeight) ?? 0,
              left: currentAnchorEl?.offsetLeft ?? 0,
              opacity: 1,
              transform: 'none',
              transition: 'opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              ...rest.style,
            }}
          >
            <ul className={styles.menuList}>{children}</ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
