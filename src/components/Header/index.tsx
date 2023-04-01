import React, { useContext, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import { NavContext } from '@/context/NavContext';
import Offcanvas from '../Offcanvas';
import SocialLinks from './SocialLinks';
import useTranslation from 'next-translate/useTranslation';

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { activeLinkId, setActiveLinkId } = useContext(NavContext);
  const { t, lang } = useTranslation('common');
  const navLinks = [t('menu.home'), t('menu.aboutMe'), t('menu.projects'), t('menu.skills'), t('menu.contact')];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLowerCase().replace(' ', '')}Section`;
    const handleClick = () => {
      // document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
      const element = document.querySelector<Element>(`#${scrollToId}`);
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: topPos,
          behavior: 'smooth',
        });
      }
    };

    return (
      <li key={content}>
        <Link
          href={`${lang}#${scrollToId}`}
          onClick={handleClick}
          className={activeLinkId === content ? styles.active : ''}
        >
          {content}
        </Link>
      </li>
    );
  };

  const handleOpenOrCloseOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${scroll ? styles.scroll : ''} ${styles.navigation}`}>
        <div className={styles.wrapper}>
          <Link
            href="/"
            className={styles.logo}
          >
            Leandro Gazoli
          </Link>

          <div className={styles.menu}>
            <ul className={styles.navbar}>{navLinks.map((nav) => renderNavLink(nav))}</ul>
          </div>
          <div className={styles.menu}>
            <SocialLinks className={styles.social_links} />
            <button
              className={styles.button_toggle}
              onClick={handleOpenOrCloseOffcanvas}
            >
              <FaBars size={25} />
            </button>
          </div>
        </div>
      </nav>

      <Offcanvas
        isOpen={isOffcanvasOpen}
        onClose={handleOpenOrCloseOffcanvas}
        classes={styles.bgDark}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: `column`,
            height: '100%',
          }}
        >
          <div
            className={styles.offcanvas_Header}
            onClick={handleOpenOrCloseOffcanvas}
          >
            <Link
              href="#home"
              className={styles.logo}
            >
              Leandro Gazoli
            </Link>
            <button onClick={handleOpenOrCloseOffcanvas}>
              <HiXMark
                size={30}
                color="#fff"
              />
            </button>
          </div>
          <div className={`${styles.container} ${styles.offcanvas_body}`}>
            <div className={`${styles.mobileMenu} ${styles.menu}`}>
              <ul onClick={handleOpenOrCloseOffcanvas}>{navLinks.map((nav) => renderNavLink(nav))}</ul>
              <SocialLinks className={styles.social_links} />
            </div>
          </div>
        </div>
      </Offcanvas>
    </header>
  );
}
