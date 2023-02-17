import styles from "../styles/Home.module.css"
import React from "react";
import App from "@/pages/_app";

export default function Home() {
    return (
        <div className={styles.styled}>
            <div>
                <h1>Bienvenue sur mon site</h1>
                <p>Pour en savoir plus sur moi, cliquez sur le lien ci-dessous</p>
                <a href="/portfolio/about">En savoir plus</a>
            </div>
        </div>
    );
}