import styles from "@/styles/SchoolCareer.module.css";
import {motion as m} from 'framer-motion'
import LeftArrow from "@/pages/portfolio/Component/LeftArrow/LeftArrow";
import RightArrow from "@/pages/portfolio/Component/RightArrow/RightArrow";
import Card from "@/pages/Component/SchoolCard/Card";
import Burger from "@/pages/portfolio/burger/burger";
import ShowBurger from "@/pages/portfolio/burger/burger";

export default function SchoolCareer() {

    return (
        <m.main
            className={styles.root}
            initial={{x: "-100%"}}
            animate={{x: "0%"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            exit={{x: "100%"}}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <ShowBurger name="School carrer "></ShowBurger>
            <div className={styles.spacing}></div>
            <div className={styles.centerText}>
                <h1>School Career</h1>
                <p>Below, you will find information about my educational background and the knowledge that I have
                    acquired.</p>
            </div>
            <div className={styles.cardDisplay}>
                <Card source="http://localhost:28000/images/getImage/jesseDeForest.jpg" alt="test" title="SCIENTIFIC BACCALAUREATE" label={['Introduction to computers and programming', 'Science subjects']} link="https://jesse-de-forest-avesnes-sur-helpe.enthdf.fr/"/>
                <Card source="http://localhost:28000/images/getImage/iutmaubeuge.png" alt="test" title="UNIVERSITY TECHNOLOGICAL IN COMPUTER SCIENCE" label={['Application integration and deployment', 'Realisation of applications : design, development, validation','Database administration, project management']} link="https://formations.uphf.fr/fr/formations/bachelor-universitaire-de-technologie-but/but-informatique-L06G2DBP.html"/>
                <Card source="http://localhost:28000/images/getImage/Insa.png" alt="test" title="COMPUTER ENGINEERING SCHOOL INSA" label={['Computer programming (Java, C, SQL, HTML/CSS, JavaScript, Prolog, Python, Flutter)', 'Unix Commands, design Patterns, agile scrum method','Artificial Intelligence, Network and Systems Programming']} link="https://www.insa-hautsdefrance.fr/"/>
            </div>
            <LeftArrow text="Portfolio" link="/portfolio/portfolio"/>
            <RightArrow text="Contact" link="/portfolio/contact"/>
        </m.main>
    )

}