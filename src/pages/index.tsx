import Header from '@/components/Header';
import SobreMim from '@/sections/SobreMin';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leandro Gazoli</title>
        <meta
          name="description"
          content="Desenvolvedor FullStack"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <main>
        <SobreMim />
        <section
          style={{
            height: '600px',
            backgroundColor: 'yellow',
          }}
          id="Projetos2"
        >
          leandro leandro
        </section>
        <div
          style={{
            height: '1700px',
          }}
        ></div>
        <section
          style={{
            height: '1600px',
            backgroundColor: 'yellow',
          }}
          id="Projetos3"
        >
          leandro leandro
        </section>
      </main>
    </>
  );
}
