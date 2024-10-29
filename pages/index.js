import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const backgroundImageUrl = 'https://bing.img.run/rand.php';

export default function Home() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsHeaderVisible(true); // 显示导航栏
            setTimeout(() => {
                setIsContentVisible(true); // 显示内容
            }, 300); // 0.3秒后加载内容
        }, 200); // 0.2秒后开始加载导航栏

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (isContentVisible) {
            const titleText = 'Meow Java Library';
            let index = 0;

            const titleInterval = setInterval(() => {
                if (titleRef.current && index < titleText.length) {
                    titleRef.current.textContent += titleText.charAt(index);
                    index++;
                } else {
                    clearInterval(titleInterval);
                    // 开始加载副标题
                    const subtitleText = 'A Java Download Station';
                    index = 0;
                    const subtitleInterval = setInterval(() => {
                        if (subtitleRef.current && index < subtitleText.length) {
                            subtitleRef.current.textContent += subtitleText.charAt(index);
                            index++;
                        } else {
                            clearInterval(subtitleInterval);
                        }
                    }, 100);
                    return () => clearInterval(subtitleInterval);
                }
            }, 100);

            return () => clearInterval(titleInterval);
        }
    }, [isContentVisible]);

    return (
        <div className="container">
            <Head>
                <title>Meow Java Library</title>
                <meta name="description" content="A simple Node.js app with a UI" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>

            <div className="background" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>

            {isHeaderVisible && (
                <header className="header">
                    <a href="https://java.ofs.moe" className="site-name">Meow Java Library</a>
                    <nav className="nav">
                        <a href="#">下载</a>
                        <a href="#">版本列表</a>
                        <a href="#">赞助</a>
                        <a href="#">友情链接</a>
                    </nav>
                </header>
            )}

            {isContentVisible && (
                <main className="main">
                    <div className="box">
                        <h1 className="title" ref={titleRef}></h1>
                        <span className="subtitle" ref={subtitleRef}></span>
                    </div>
                </main>
            )}
        </div>
    );
}
