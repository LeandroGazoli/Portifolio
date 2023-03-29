import React, { useContext, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import { FiInstagram } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { NavContext } from '@/context/NavContext';

export default function Header() {
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

    console.log(activeLinkId);
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

  return (
    <>
      <nav className={`${styles.container} ${scroll ? styles.scroll : ''}`}>
        <div className={styles.wrapper}>
          <Link
            href="#home"
            className={styles.logo}
          >
            Leandro Gazoli
          </Link>
          <div className={styles.menu}>
            <ul>{navLinks.map((nav) => renderNavLink(nav))}</ul>
            {/* <ul>
              <li>
                <Link href="#Projetos1">Projetos</Link>
              </li>
              <li>
                <Link href="#Projetos2">Projetos</Link>
              </li>
              <li>
                <Link href="#Projetos3">Projetos</Link>
              </li>
            </ul> */}
            <ul className={styles.social_links}>
              <li>
                <Link href="">
                  <FiInstagram size={25} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <AiFillGithub size={25} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <AiFillLinkedin size={25} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaWhatsapp size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
      </div>
    </>
  );
}
