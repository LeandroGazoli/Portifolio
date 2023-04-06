import { useNav } from '@/hooks/useNav';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import styles from './styles.module.scss';
import Image from 'next/image';

export default function Projects() {
  const { t } = useTranslation();

  const projectRef = useNav(t('common:menu.projects'));

  return (
    <section
      ref={projectRef}
      id={`${t('common:menu.projects').replace(' ', '').toLowerCase()}Section`}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <p className={styles.title}>Empresas Maggi</p>
          <Image
            src={require('./images/empresasmaggi.com.br_.png')}
            alt=""
          />
          <div className={styles.buttonGroup}>
            <a className={styles.button}>GITHUB</a>
            <a className={styles.button}>SITE</a>
          </div>
          <p className={styles.text}>Site / Portifolio Empresas Maggi, Grupo de concessionarias Jaguar, Land Rover, Volvo, Toyota, entre outros</p>
        </div>
      </div>
    </section>
  );
}
