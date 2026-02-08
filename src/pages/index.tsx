import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type ServiceItem = {
  title: string;
  iconSrc: string;
  url: string;
  docPath: string;
  description: ReactNode;
};

const ServiceList: ServiceItem[] = [
  {
    title: 'Fotók (Immich)',
    iconSrc: '/img/apps/immich.ico',
    url: 'https://photos.gyurus.hu',
    docPath: '/docs/szolgaltatasok/immich',
    description: <>Automatikus fotó- és videómentés iPhone-ról a szerverre.</>,
  },
  {
    title: 'Fájlok (Seafile)',
    iconSrc: '/img/apps/seafile.png',
    url: 'https://drive.gyurus.hu',
    docPath: '/docs/szolgaltatasok/seafile',
    description: <>Felhőtárhely, fájlok megosztása családtagokkal.</>,
  },
  {
    title: 'TV/Film (Jellyfin)',
    iconSrc: '/img/apps/jellyfin.ico',
    url: 'https://tv.gyurus.hu',
    docPath: '/docs/szolgaltatasok/jellyfin',
    description: <>Filmek és sorozatok nézése, saját Netflix.</>,
  },
  {
    title: 'Sorozat/film kérés (Jellyseerr)',
    iconSrc: '/img/apps/jellyseerr.ico',
    url: 'https://sorozat.gyurus.hu',
    docPath: '/docs/szolgaltatasok/jellyseerr',
    description: <>Új filmek és sorozatok kérése a könyvtárba.</>,
  },
  {
    title: 'Dokumentumok (Paperless)',
    iconSrc: '/img/apps/paperless.png',
    url: 'https://paperles.gyurus.hu',
    docPath: '/docs/szolgaltatasok/paperless',
    description: <>Számlák és szerződések archiválása, kereshetően.</>,
  },
  {
    title: 'E-mail (Maildrop)',
    iconSrc: '/img/apps/maildrop.svg',
    url: 'https://maildrop.gyurus.hu',
    docPath: '/docs/szolgaltatasok/maildrop',
    description: <>Egyszeri kódok, regisztrációs e-mailek.</>,
  },
  {
    title: 'Okosotthon (Home Assistant)',
    iconSrc: '/img/apps/homeassistant.png',
    url: 'https://home.gyurus.hu',
    docPath: '/docs/szolgaltatasok/homeassistant',
    description: <>Lámpák, kapcsolók, automatizálások vezérlése.</>,
  },
  {
    title: 'Fiókkezelés (Authentik)',
    iconSrc: '/img/apps/authentik.svg',
    url: 'https://auth.gyurus.hu',
    docPath: '/docs/szolgaltatasok/authentik',
    description: <>Központi belépés, jelszócsere az összes szolgáltatáshoz.</>,
  },
  {
    title: 'Nyomtató (HP_LaserJet_P1005)',
    iconSrc: '/img/apps/printer.svg',
    url: 'http://192.168.1.11',
    docPath: '/docs/szolgaltatasok/nyomtato',
    description: <>AirPrint kompatibilis otthoni nyomtató Macen és iOS-en.</>,
  },
];

function ServiceCard({title, iconSrc, url, docPath, description}: ServiceItem) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '1.5rem'}}>
      <div className="card">
        <div className="card__header">
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>
              <img src={useBaseUrl(iconSrc)} alt="" loading="lazy" />
            </span>
            <Heading as="h3" className={styles.cardTitle}>
              {title}
            </Heading>
          </div>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className={styles.cardFooter}>
            <Link className="button button--primary" to={docPath}>
              Útmutató
            </Link>
            <Link className="button button--secondary" href={url}>
              Megnyitás
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Kezdés itt
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Kezdőlap"
      description="Gyürüs Homelab szolgáltatások használati útmutatója">
      <HomepageHeader />
      <main>
        <section className={styles.services}>
          <div className="container">
            <div className="row">
              {ServiceList.map((props, idx) => (
                <ServiceCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
