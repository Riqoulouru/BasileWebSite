import {Squash as Hamburger} from 'hamburger-react'
import {useEffect, useState} from "react";
import "./BurgerCSS.css"


function ShowBurger(props) {
    const [burgerVisible, setBburgerVisible] = useState(false);

    useEffect(() => {

    }, [burgerVisible]);

    function HamburgerCLicked(){
        setBburgerVisible(!burgerVisible);
    }



    return (
        <div>
            <nav style={{top: burgerVisible? "0" : "-100%"}} className="nav-box">
                <a><span className={ props.name === "About" ? "selected" : "" }>About</span></a>
                <a><span className={ props.name === "Portfolio" ? "selected" : "" }>Portfolio</span></a>
                <a><span className={ props.name === "School carrer" ? "selected" : "" }>School carrer</span></a>
                <a><span className={ props.name === "Contact" ? "selected" : "" }>Contact</span></a>
            </nav>
            <div className="burger">
                <Hamburger onToggle={HamburgerCLicked}></Hamburger>
            </div>

        </div>
    )
}

export default ShowBurger;