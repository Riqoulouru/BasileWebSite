import '../styles/globals.css'
import styles from "@/styles/Default.module.css";
import {AnimatePresence} from "framer-motion";
import {useRouter} from 'next/router'


export default function App({Component, pageProps}) {
    return (
        <AnimatePresence initial={false}>
            <div className={styles.background}>
                <Component key={useRouter().pathname} {...pageProps} />
            </div>
        </AnimatePresence>

    );
}
