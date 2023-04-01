import Header from '@/components/Header';
import HomeSection from '@/sections/Home';
import SobreMim from '@/sections/SobreMin';
// import dynamic from 'next/dynamic';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

// const HomeSection = dynamic(() => import('@/sections/Home'), { ssr: false });
// const SobreMim = dynamic(() => import('@/sections/SobreMin'), { ssr: false });

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Leandro Gazoli</title>
      </Head>
      <Header />
      <main>
        <HomeSection />
        <SobreMim />
      </main>
    </>
  );
}
