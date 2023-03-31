import React, { useContext, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { NavContext } from '@/context/NavContext';
import Offcanvas from '../Offcanvas';
import SocialLinks from './SocialLinks';

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { activeLinkId, setActiveLinkId } = useContext(NavContext);
  const navLinks = ['Sobre mim', 'Projetos', 'Conhecimento', 'Fale Comigo'];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLowerCase().replace(' ', '')}Section`;
    const handleClick = () => {
      document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <li key={content}>
        <button
          onClick={handleClick}
          className={activeLinkId === content ? styles.active : ''}
        >
          {content}
        </button>
      </li>
    );
  };

  const handleOpenOrCloseOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      <nav className={`${styles.container} ${scroll ? styles.scroll : ''} ${styles.navigation}`}>
        <div className={styles.wrapper}>
          <Link
            href="#home"
            className={styles.logo}
          >
            Leandro Gazoli
          </Link>
          <div className={styles.menu}>
            <ul>{navLinks.map((nav) => renderNavLink(nav))}</ul>
            <SocialLinks className={styles.social_links} />
          </div>
          <button
            className={styles.button_toggle}
            onClick={handleOpenOrCloseOffcanvas}
          >
            <FaBars size={25} />
          </button>
        </div>
      </nav>

      <Offcanvas
        isOpen={isOffcanvasOpen}
        onClose={handleOpenOrCloseOffcanvas}
        size="90%"
      >
        <div
          className={styles.offcanvas_Header}
          onClick={handleOpenOrCloseOffcanvas}
        ></div>
        <div className={`${styles.container} ${styles.offcanvas_body}`}>
          <div className={styles.mobileMenu}>
            <ul>{navLinks.map((nav) => renderNavLink(nav))}</ul>
            <SocialLinks className={styles.social_links} />
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
