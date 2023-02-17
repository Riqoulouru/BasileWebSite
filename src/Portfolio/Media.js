import "./MediaCSS.css"
import About from "./About/About";
import Section from "./Section";
import Portfolio from "./Portfolio/Portfolio";
export const media = [
    {
        slug: "about",
        className: "slide",
        children: <About />
    },
    {
        slug: "portfolio",
        className: "slide",
        children: <Portfolio />
    },
    {
        slug: "page-two",
        className: "slide",
        children: (
            <Section wrapper={false} backgroundColor={"#000000"}>
                <h2>Test</h2>
                <h2>OK</h2>
                <p>OK</p>
            </Section>
        )
    },
];