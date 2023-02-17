import Link from "next/link";
import styles from "@/styles/LeftArrow.module.scss";

export default function leftArrow(props) {


    return (
        <Link href={props.link}>
            <div className={styles.arrowContainer}>
                <p className={styles.arrow}></p>
                <p className={styles.leftText}>{props.text}</p>
            </div>
        </Link>

    );
}