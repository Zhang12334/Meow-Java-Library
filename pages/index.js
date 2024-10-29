import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const backgroundImageUrl = 'https://bing.img.run/uhd.php'; // 自定义背景图片 URL

export default function Home() {
  const [bgImageUrl, setBgImageUrl] = useState(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // 获取背景图片 URL
    fetch(backgroundImageUrl)
      .then(response => {
        if (response.ok) {
          return response.url; // 获取重定向后的 URL
        } else {
          throw new Error('Failed to fetch background image');
        }
      })
      .then(url => {
        setBgImageUrl(url);
      })
      .catch(error => {
        console.error('Error fetching background image:', error);
      });

    // 打字效果
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

      {bgImageUrl && (
        <div className="background" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>
      )}

      <main className="main">
        <div className="box">
          <h1 className="title" ref={titleRef}></h1>
        </div>
      </main>
    </div>
  );
}