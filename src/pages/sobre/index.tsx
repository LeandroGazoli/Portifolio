import React from 'react';

import styles from './styles.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre Leandro Gazoli</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <section className={styles.section}>
          <div className={`${styles.flex} ${styles.background}`}>
            <Image
              src={require('@/assets/images/profile-pic.png')}
              alt="Perfil Leandro Gazoli"
              className={styles.imagem}
            />
          </div>
          <div className={styles.flex}>
            <p className={styles.titleH2}>Sobre Leandro Gazoli</p>
            <p className={styles.text}>
              Meu nome é Leandro e sou formado em Análise e Desenvolvimento de Sistemas pela Uninove de São Roque. Atuo como desenvolvedor web Full Stack há cinco anos, com ampla
              experiência em desenvolvimento de sistemas web em geral.
            </p>
            <p className={styles.text}>
              Atualmente, meu foco é desenvolver sistemas completos utilizando as principais ferramentas do mercado, como React, Next.js, Node e PHP. Com um conhecimento sólido em
              todas essas tecnologias, sou capaz de oferecer soluções sob medida que atendam às necessidades específicas de cada projeto.
            </p>
            <p className={styles.text}>
              Ao longo da minha carreira, tive a oportunidade de trabalhar em projetos desafiadores e de grande escala, o que me proporcionou um amplo conhecimento em
              desenvolvimento de aplicações web. Meu compromisso com a qualidade e a atenção aos detalhes são evidentes em todos os meus projetos.
            </p>
            <p className={styles.text}>
              Estou sempre buscando me atualizar e me manter informado sobre as últimas tendências e tecnologias do mercado, para que possa oferecer aos meus clientes as melhores
              soluções possíveis. Sou apaixonado pelo que faço e estou animado com as possibilidades que o futuro reserva.
            </p>
            <p className={styles.text}>
              Se você procura um desenvolvedor web Full Stack altamente qualificado e dedicado, entre em contato comigo. Será um prazer trabalhar com você em seu próximo projeto!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
