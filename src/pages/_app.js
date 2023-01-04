import '../css/main.css';
import Analytics from '../components/Analytics';


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Analytics />
            <Component {...pageProps} />
        </>
    );
}
