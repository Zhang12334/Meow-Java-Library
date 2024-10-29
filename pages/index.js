import Head from 'next/head';

const backgroundImageUrl = 'https://pan.ofs.moe:65001/d/tuchuang/MeowJavaLibrary/background/th.dmg'; // 自定义背景图片 URL
const blurAmount = 2; // 自定义背景模糊程度

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meow Java Library</title>
        <meta name="description" content="A simple Node.js app with a UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background" style={{ backgroundImage: `url(${backgroundImageUrl})`, filter: `blur(${blurAmount}px)` }}></div>

      <main className="main">
        <div className="box">
          <h1 className="title">Meow Java Library</h1>
        </div>
      </main>
    </div>
  );
}