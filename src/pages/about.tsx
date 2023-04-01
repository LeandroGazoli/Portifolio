import useTranslation from 'next-translate/useTranslation';
export default function About() {
  const { t } = useTranslation();
  return <div>{t('common:title')}</div>;
}
