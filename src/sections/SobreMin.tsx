import { useNav } from '@/hooks/useNav';

export default function SobreMim() {
  const sobreMinRef = useNav('Sobre mim');
  return (
    <section
      ref={sobreMinRef}
      style={{
        height: '600px',
        backgroundColor: 'yellowgreen',
        padding: '5rem 2rem',
      }}
      id="sobremimSection"
    >
      leandro leandro
    </section>
  );
}
