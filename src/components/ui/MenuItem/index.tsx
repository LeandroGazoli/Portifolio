import React, { HTMLAttributes, ReactNode, ElementType } from 'react';

import styles from './styles.module.scss';

interface MenuItemProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

export default function MenuItem({ children, as = 'li', ...rest }: MenuItemProps) {
  const List = () => {
    const AS = as;
    return (
      <AS
        {...rest}
        className={`${styles.menuItem} ${rest.className}`}
      >
        {children}
      </AS>
    );
  };

  return <List />;
}
