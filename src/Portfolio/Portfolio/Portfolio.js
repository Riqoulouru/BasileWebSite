import "./PortfolioCSS.css"
import {
    withNavigationContext
} from "react-awesome-slider/dist/navigation";

export const Portfolio = withNavigationContext(() => {

    //window.history.pushState("", "Portfolio", 'http://localhost:3000/Portfolio/Portfolio/');

    return (

        <div className="root">
            <div style={{
                display: "block",
            }}>
                <p style={{
                    textAlign: "center",
                    fontSize: "50px"
                }}>mais je t'aime quand même</p>
                <h1>coucou ce truc me fait faire des caca mous</h1>

            </div>
        </div>
    );
});

export default Portfolio;