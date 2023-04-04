import React, { MouseEvent, useContext, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import { NavContext } from '@/context/NavContext';
import Offcanvas from '../Offcanvas';
import SocialLinks from './SocialLinks';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Menu from '../ui/Menu';
import MenuItem from '../ui/MenuItem';
import setLanguage from 'next-translate/setLanguage';

export default function Header() {
  const { activeLinkId, setActiveLinkId } = useContext(NavContext);

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [currentLanguageImage, setCurrentLanguageImage] = useState(require('@/assets/icons/eua.svg'));

  const { t, lang } = useTranslation('common');
  const navLinks = [t('menu.home'), t('menu.aboutMe'), t('menu.projects'), t('menu.skills'), t('menu.contact')];

  const [openMenuLanguage, setOpenMenuLanguage] = useState(false);
  const [currentElementMenuLanguage, setCurrentElementMenuLanguage] = useState<HTMLElement>();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    switch (lang) {
      case 'pt':
        setCurrentLanguageImage(require('@/assets/icons/brazil.svg'));
        break;

      default:
        setCurrentLanguageImage(require('@/assets/icons/eua.svg'));
        break;
    }
  }, []);

  console.log(lang);
  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLowerCase().replace(' ', '')}Section`;
    const handleClick = () => {
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

  const handleClickChangeLanguage = (event: MouseEvent<HTMLElement>) => {
    setCurrentElementMenuLanguage(event.currentTarget);
    setOpenMenuLanguage(true);
  };

  const handleCloseMenuLanguage = () => {
    setOpenMenuLanguage(false);
  };

  const handleChangeImageAndLanguage = (locale: 'pt' | 'en') => {
    if (locale === lang) {
      return;
    }

    switch (locale) {
      case 'pt':
        setCurrentLanguageImage(require('@/assets/icons/brazil.svg'));
        break;

      default:
        setCurrentLanguageImage(require('@/assets/icons/eua.svg'));
        break;
    }

    setLanguage(locale);
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
            <button onClick={handleClickChangeLanguage}>
              <Image
                src={currentLanguageImage}
                alt="Change Language"
                width={25}
                quality={75}
              />
            </button>
            <Menu
              open={openMenuLanguage}
              anchorEl={currentElementMenuLanguage}
              onClose={handleCloseMenuLanguage}
            >
              <MenuItem onClick={() => handleChangeImageAndLanguage('pt')}>
                <Image
                  src={require('@/assets/icons/brazil.svg')}
                  alt="Português Brasileiro"
                  width={25}
                  height={25}
                />
              </MenuItem>
              <MenuItem onClick={() => handleChangeImageAndLanguage('en')}>
                <Image
                  src={require('@/assets/icons/eua.svg')}
                  alt="English"
                  width={25}
                  height={25}
                />
              </MenuItem>
            </Menu>
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
