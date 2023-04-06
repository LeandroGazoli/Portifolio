import React from 'react';
import Header from '@/components/Header';
import HomeSection from '@/sections/Home';
import Head from 'next/head';
import SobreMim from '@/sections/SobreMim';
import Projects from '@/sections/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leandro Gazoli</title>
      </Head>
      <Header />
      <main>
        <HomeSection />
        <SobreMim />
        <Projects />
      </main>
    </>
  );
}
