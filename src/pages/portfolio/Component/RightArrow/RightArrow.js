import styles from "@/styles/RightArrow.module.scss"
import Link from "next/link";

export default function rightArrow(props) {

    return (
        <Link href={props.link}>
            <div className={styles.arrowContainer}>
                <p className={styles.arrow}></p>
                <p className={styles.rightText}>{props.text}</p>
            </div>
        </Link>

    );
}