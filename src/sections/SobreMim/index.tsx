import React from 'react';

import styles from './styles.module.scss';

import { useNav } from '@/hooks/useNav';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function SobreMim() {
  const { t } = useTranslation();
  const sobreMinRef = useNav(t('common:menu.aboutMe'));
  return (
    <section
      ref={sobreMinRef}
      id={`${t('common:menu.aboutMe').toLowerCase().replace(' ', '')}Section`}
      className={` ${styles.section}`}
    >
      <div className={`${styles.wrapper} ${styles.container}`}>
        <div className={styles.order2}>
          <Image
            src={require('@/assets/images/profile-pic.png')}
            alt="Leandro Gazoli"
            quality={75}
            className={styles.image}
          />
        </div>
        <div className={`${styles.order1} ${styles.information}`}>
          <p className={styles.titleH2}>Sobre Mim</p>
          <p className={styles.text}>
            Meu nome é Leandro e sou formado em Análise e Desenvolvimento de Sistemas pela Uninove de São Roque. Atuo como desenvolvedor web Full Stack há cinco anos, com ampla
            experiência em desenvolvimento de sistemas web em geral.
          </p>
          <p className={styles.text}>
            Atualmente, meu foco é desenvolver sistemas completos utilizando as principais ferramentas do mercado, como React, Next.js, Node e PHP. Com um conhecimento sólido em
            todas essas tecnologias, sou capaz de oferecer soluções sob medida que atendam às necessidades específicas de cada projeto.
          </p>

          <div className={styles.buttonGroup}>
            <Link
              href="sobre"
              className={styles.button}
            >
              Leia mais...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
