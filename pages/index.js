import Head from 'next/head';
import { useEffect, useRef } from 'react';

const backgroundImageUrl = 'https://pan.ofs.moe:65001/d/tuchuang/MeowJavaLibrary/background/th.dmg'; // 自定义背景图片 URL
const blurAmount = 5; // 自定义背景模糊程度

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    const text = 'Meow Java Library';
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        titleRef.current.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 调整这个值可以改变打字速度

    return () => clearInterval(interval);
  }, []);

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
          <h1 className="title" ref={titleRef}></h1>
        </div>
      </main>
    </div>
  );
}