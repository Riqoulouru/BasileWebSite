import {motion as m} from 'framer-motion'
import styles from "@/styles/Portfolio.module.css";
import LeftArrow from "./Component/LeftArrow/LeftArrow";
import ShowBurger from "@/pages/portfolio/burger/burger";
import Project from "@/pages/Component/Project";
import RightArrow from "./Component/RightArrow/RightArrow";

export default function portfolio() {
    return (
        <m.main
            initial={{x: "100%"}}
            animate={{x: 0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            exit={{x: "100%"}}
            className={styles.root}
        >
            <ShowBurger name="Portfolio"></ShowBurger>
            <div className={styles.spacing}></div>
            <div className={styles.centerText}>
                <h1>Welcome to my portfolio</h1>
                <p>Explore my latest project below, which showcases both web and software development expertise.</p>
            </div>
            <div className={styles.divGrid}>
                <ul className={styles.gridContainer}>
                    <Project title="This website" imageSource="http://localhost:28000/images/getImage/WebSite.png"
                             label={['REACTJS', 'NEXTJS', 'CSS', 'HTML5', 'ANIMATION']}
                             alt={"ThisWebsiteImage"}
                             link={"https://www.google.com/"}
                    ></Project>
                    <Project title="Discord bot" imageSource="http://localhost:28000/images/getImage/bot.png"
                             label={['JAVA', 'JDA', 'AUDIO PLAYER', 'DATA BASE']}
                             alt={"DiscordBotImage"}
                             link={"https://github.com/Riqoulouru/DiscordBot/"}
                    ></Project>
                    <Project title="Done&Gone" imageSource="http://localhost:28000/images/getImage/PostIt.png"
                             label={['FLUTTER', 'DART', 'FIGMA', 'TRELLO', 'FIREBASE', 'SCHOOL PROJECT']}
                             alt={"Done&GoneImage"}
                             link={"https://gitlab.com/Barbary-Theo/projet-flutter"}></Project>
                    <Project title="fis'eat" imageSource="http://localhost:28000/images/getImage/FastFood.png"
                             label={['JAVA', 'HTML', 'CSS', 'JAVASCRIPT', 'SPRING BOOT', 'SCHOOL PROJECT']}
                             alt={"Fis'eatImage"}
                             link={"https://github.com/Riqoulouru/Projet1InsaPOO"}></Project>
                    <Project title="Old Portfolio" imageSource="http://localhost:28000/images/getImage/oldPortfolio.png"
                             label={['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'DJANGO']}
                             alt={"OldPortfolioImage"}
                             link={"https://gitlab.com/Riqou/basilewebsite"}></Project>
                </ul>
            </div>
            <div className={styles.centerText}>
                <p>For more, you can check on my&nbsp;<a href="https://github.com/Riqoulouru">Github</a>&nbsp;or&nbsp;<a
                    href="https://gitlab.com/Riqou">Gitlab</a>.</p>
            </div>
            <LeftArrow text="About" link="/portfolio/about"/>
            <RightArrow text="SchoolCareer" link="/portfolio/schoolCareer"/>

        </m.main>
    )
}