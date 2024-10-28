// pages/index.js
import Head from 'next/head';
import styles from '../public/styles.css';

export default function Home({ backgroundImageUrl, blurAmount }) {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImageUrl})`, filter: `blur(${blurAmount}px)` }}>
      <Head>
        <title>Meow Java Library</title>
        <meta name="description" content="A simple Node.js app with a UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.box}>
          <h1 className={styles.title}>Meow Java Library</h1>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { backgroundUrl = 'https://via.placeholder.com/1920x1080', blur = 5 } = context.query;
  return {
    props: {
      backgroundImageUrl: backgroundUrl,
      blurAmount: parseInt(blur, 10),
    },
  };
}