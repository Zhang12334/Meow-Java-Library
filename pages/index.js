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
            setIsHeaderVisible(true);
            setTimeout(() => {
                setIsContentVisible(true);
            }, 300);
        }, 200);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        async function fetchFont() {
            try {
                const response = await fetch('https://pan.ofs.moe:65001/d/tuchuang/MeowJavaLibrary/fonts/GenJyuuGothic-Normal-2.ttf', {
                    method: 'GET',
                    mode: 'cors',
                });

                if (response.redirected) {
                    // 处理重定向
                    const newUrl = response.url;
                    console.log('Font redirected to:', newUrl);
                    const fontFace = new FontFace('GenJyuuGothic', `url(${newUrl})`);
                    document.fonts.add(fontFace);
                    await fontFace.load();
                    document.body.style.fontFamily = 'GenJyuuGothic, sans-serif';
                } else {
                    const fontFace = new FontFace('GenJyuuGothic', response.url);
                    document.fonts.add(fontFace);
                    await fontFace.load();
                    document.body.style.fontFamily = 'GenJyuuGothic, sans-serif';
                }
            } catch (error) {
                console.error('Error loading font:', error);
            }
        }

        fetchFont();
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
