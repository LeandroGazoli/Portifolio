import React from 'react';
import Header from '@/components/Header';
import HomeSection from '@/sections/Home';
import SobreMim from '@/sections/SobreMin';
import Head from 'next/head';

export default function Home() {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState<HTMLElement>();

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  //   setIsOpen(true);
  //   console.log(event);
  // };
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
