import { useNav } from '@/hooks/useNav';

import styles from './styles.module.scss';
import { FaDownload } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

export default function HomeSection() {
  const homeRef = useNav('Home');
  const { t } = useTranslation('home');

  const handleClick = () => {
    const element = document.querySelector<Element>('#sobreminSection');
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section
      id="homeSection"
      ref={homeRef}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.titleH2}>
          {t('apresentation')} <span>Leandro Gazoli</span>
        </h2>
        <h1 className={styles.titleH1}>{t('profission')}</h1>
        <p className={styles.text}>{t('text')}</p>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${styles.outlined}`}
            onClick={async () => await setLanguage('en')}
          >
            Download CV <FaDownload size={15} />
          </button>
          <button
            className={styles.button}
            onClick={async () => await setLanguage('pt')}
          >
            Know more
          </button>
        </div>
        <div
          className={styles.scroll}
          onClick={handleClick}
        >
          <BsChevronDoubleDown size={25} />
        </div>
      </div>
    </section>
  );
}
