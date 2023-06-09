import NavProvider from '@/context/NavContext';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}
