import styles from "@/styles/Contact.module.css";
import {motion as m} from 'framer-motion'
import LeftArrow from "@/pages/portfolio/Component/LeftArrow/LeftArrow";
import ShowBurger from "@/pages/portfolio/burger/burger";

export default function Contact() {
    return (
        <m.main
            className={styles.root}
            initial={{x: "-100%"}}
            animate={{x: "0%"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            exit={{x: "100%"}}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <ShowBurger name="Contact"></ShowBurger>
            <div className={styles.spacing}></div>

            <div className={styles.centerText}>
                <h1>Contact</h1>
                <p>If you wanna get in touch, talk with me about project or just say hi, feel free to send me a mail
                    to </p> <a href="mailto: basile.thiry@hotmail.fr">basile.thiry@hotmail.fr</a><p> !</p> <br/>
                <p>If you want to know more about me, here is my <a
                    href="http://localhost:28000/file/resume">resume</a>.</p>
            </div>
            <LeftArrow text="SchoolCareer" link="/portfolio/schoolCareer" direction="right"/>
        </m.main>
    )
}