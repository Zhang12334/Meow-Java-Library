// pages/index.js
import Head from 'next/head';
import styles from '../public/styles.css';

const backgroundImageUrl = 'https://bing.img.run/1920x1080.php'; // 自定义背景图片 URL
const blurAmount = 5; // 自定义背景模糊程度

export default function Home() {
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