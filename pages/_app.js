import '../public/styles.css'; // 导入全局 CSS 文件
import 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;