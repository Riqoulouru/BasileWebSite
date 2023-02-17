import PortoflioCSS from "./PortoflioCSS";
import moi from "../images/moi.jpg";
import jesseDeForest from "../images/jesseDeForest.jpg";
import iutmaubeuge from "../images/iutmaubeuge.png";
import insaHDF from "../images/insaHDF.png";
import github from "../images/iconmonstr-github-1.svg";
import gitlab from "../images/gitlab-logo-600.svg";
import figma from "../images/figma-icon.svg";
import flutter from "../images/flutter-svgrepo-com.svg";
import java from "../images/java-icon.svg";
import python from "../images/python-seeklogo.com.svg";
import javascript from "../images/javascript-2.svg";
import html5 from "../images/html5-svgrepo-com.svg";
import sql from "../images/sql-file-format-svgrepo-com.svg";
import sap from "../images/sap.svg";
import bash from "../images/Bash_(Unix_shell)-Logo.wine.svg";
import fastFoodImage from "../images/fastFoodImage.jpg";
import loutreImageBot from "../images/loutreImageBot.jpg";
import applicationsMobile from "../images/applications-mobile.jpg";
import cv from "../ressource/CV_Basile_Thiry.pdf";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const Portfolio = () => {
    return (
        <PortoflioCSS>
            <div className="container-fluid bg-overlay">
                <div className="row text-center">
                    <div className="block">

                        <img className="img-basile" src={moi} alt="me"/>
                    </div>
                    <div className="col-sm-1"></div>
                    <h1 className="ba1 col-sm-10"
                        datatype='["Hi, I&#39;m Basile Thiry.","Computer science engineer.","Student at Insa Hauts-de-France."]'
                        id="Presentation">Hi, i'm Basile
                        Thiry</h1>
                    <div className="col-sm-1"></div>
                </div>
            </div>
            <div className="container-fluid profile">
                <div className="row text-center">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h1>Profile</h1>
                        <p>Technology is such a wonderful thing. As long as you are willing to put in the work, you
                            can improve so
                            many things. That's exactly what I'm passionate about, improving company productivity
                            using
                            technology.</p>
                        <p>Currently in my second year of computer science engineering, I'm working half-time at a
                            company called
                            Framatome as a developer and the other half I'm a student at INSA Hauts-de-France.</p>
                        <br/>
                        <br/>
                        <p>French is my native language. I'm also fluent in English (TOEIC exam passed with
                            865) which allows me to
                            keep being updated on new technologies (especially in computer science).</p>
                        <p>On the side, I like to take part in various events, in 2022 I was one of the
                            organiser & developer of <a
                                href="https://codinsa.org/" target="_blank" rel="noopener noreferrer">Cod'INSA</a> which
                            is an AI
                            coding competition. Training
                            the mind is
                            nice, but training the mind with the
                            body is better ! I'm practicing bodybuilding and airsoft during my free time.
                        </p>

                        <br/>
                        <br/>

                        <p>If you want to learn more about me, click <a href={cv} target="_blank" rel="noopener noreferrer">here</a> to get my resume.</p>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="col-sm-3"></div>

                </div>
            </div>

            <div className="container-fluid school">
                <div className="row text-center">
                    <h1>School career</h1>
                    <div className="container">
                        <div className="box">
                            <div className="imgBx">
                                <img src={jesseDeForest} alt="Jesse de Forest"/>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Scientific Baccalaureate</h2>
                                    <h4>2019</h4>
                                    <ul>
                                        <li>Introduction to computers and programming</li>
                                        <li>Science subjects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBx">

                                <img src={iutmaubeuge} alt="IUT Maubeuge"/>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>UNIVERSITY TECHNOLOGICAL IN COMPUTER SCIENCE</h2>
                                    <h4>2021</h4>
                                    <ul>
                                        <li>Application integration and deployment</li>
                                        <li>Realisation of applications : design, development, validation</li>
                                        <li>Database administration, project management</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBx">

                                <img src={insaHDF} alt="INSA Hauts-de-France"/>
                            </div>

                            <div className="content">
                                <div>
                                    <h2>computer engineering school</h2>
                                    <h4>2021 - 2024</h4>
                                    <ul>
                                        <li>Computer programming (Java, C, SQL, HTML/CSS, JavaScript, Prolog,
                                            Python, Flutter)
                                        </li>
                                        <li>Unix Commands, design Patterns, agile scrum method</li>
                                        <li>Artificial Intelligence, Network and Systems Programming</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-spacing"></div>
            </div>

            <div className="container-fluid technicalSkills">
                <div className="row text-center">
                    <h1>Technical skills</h1>
                </div>
                <div className="container technicalSkillsIcons">
                    <img className="SVG" title="GitHub" src={github} alt=""/>
                    <img className="SVG" title="GitLab" src={gitlab} alt=""/>
                    <img className="SVG" title="Figma" src={figma} alt=""/>
                    <img className="SVG" title="Flutter"
                         src={flutter} alt=""/>
                    <img className="SVG" title="Java" src={java}
                         alt=""/>
                    <img className="SVG" title="Python"
                         src={python} alt=""/>
                    <img className="SVG" title="Javascript"
                         src={javascript} alt=""/>
                    <img className="SVG" title="Html5"
                         src={html5} alt=""/>
                    <img className="SVG" title="SQL"
                         src={sql}
                         alt=""/>
                    <img className="SVG" title="SAP"
                         src={sap} alt=""/>
                    <img className="SVG" title="Bash"
                         src={bash}
                         alt=""/>
                </div>
                <div className="bottom-spacing"></div>
            </div>
            <div className="projects">
                <h1>Projects</h1>
                <div className="container-sm">
                    <div className="project-info-right" data-aos="fade-right">

                        <div className="projectText">
                            <a href="https://github.com/Riqoulouru/Projet1InsaPOO" target="_blank"
                               rel="noopener noreferrer">
                                <img src={fastFoodImage}
                                     alt="FisEat"/></a>
                            <h3>Project fis'eat</h3>
                            <p>This project was a school project. We were in group of two to do it and the subject
                                was to do a fast
                                food ordering kiosk. We decided to use java as main language with the framework Java
                                Spring. For the
                                front, we use basic html / css with jquery to make a link between our back and our
                                front. </p>
                            <a href="https://github.com/Riqoulouru/Projet1InsaPOO" target="_blank"
                               rel="noopener noreferrer">You can click
                                here to access to
                                the code</a>
                        </div>
                    </div>
                    <div className="project-info-left" data-aos="fade-left">
                        <div className="projectText">
                            <a href="https://github.com/Riqoulouru/DiscordBot" target="_blank"
                               rel="noopener noreferrer">
                                <img src={loutreImageBot}
                                     alt="Bot discord"/></a>
                            <h3>Discord bot</h3>
                            <p>This is one of my personal project. I frequently use discord to speak with friends,
                                but sometimes I
                                want to automate some tasks or just make some fun with a robot, so this project was
                                born. I use my
                                own server to host this bot. </p>
                            <a href="https://github.com/Riqoulouru/DiscordBot" target="_blank"
                               rel="noopener noreferrer">You can click here to
                                access to the
                                code</a>
                        </div>
                    </div>
                    <div className="project-info-right" data-aos="fade-right">
                        <div className="projectText">
                            <a href="https://gitlab.com/Riqou/basilewebsite" target="_blank" rel="noopener noreferrer">
                                <img src={moi}
                                     alt="Website"/></a>
                            <h3>This website</h3>
                            <p>This is the website you're in, built with python and Django framework for backend and
                                html / css / js
                                for frontend. It was created to improve my website development skill and my
                                resume.</p>
                            <a href="https://gitlab.com/Riqou/basilewebsite" target="_blank" rel="noopener noreferrer">You
                                can click here to
                                access to the
                                code</a>
                        </div>
                    </div>
                    <div className="project-info-left" data-aos="fade-left">
                        <div className="projectText">
                            <a href="https://gitlab.com/Barbary-Theo/projet-flutter" target="_blank"
                               rel="noopener noreferrer">
                                <img src={applicationsMobile}
                                     alt="Done&Gone"/></a>
                            <h3>Done&Gone</h3>
                            <p>This project is a mobile application based on flutter / dart with firebase database.
                                This was a
                                school project in group of fourth, so we decided to use the agile-scrum methodology.
                                The purpose of
                                this project was to create an app to manage task or project. More information on
                                project readme (in
                                French)</p>
                            <a href="https://gitlab.com/Barbary-Theo/projet-flutter" target="_blank"
                               rel="noopener noreferrer">You can click
                                here to access to
                                the code</a>
                        </div>
                    </div>
                </div>
                <p>For more project, you can travel in my <a href="https://github.com/Riqoulouru"> GitHub</a> / <a
                    href="https://gitlab.com/Riqou">GitLab.</a></p>
                <div className="bottom-spacing"></div>
            </div>
            <div className="container-fluid text-center liens">

                <a href="https://www.linkedin.com/in/basile-thiry-6222951aa/" target="_blank" rel="noopener noreferrer"><img
                    className="footer-SVG"
                    title="Linkedin"
                    src="ui/src/Portfolio/images/linkedin.svg"
                    alt="Linkedin"/></a>
                <a href="https://github.com/Riqoulouru" target="_blank" rel="noopener noreferrer"><img
                    className="footer-SVG" title="GitHub"
                    src="ui/src/Portfolio/images/iconmonstr-github-1.svg"
                    alt="Github"/></a>
                <a href="https://gitlab.com/Riqou" target="_blank" rel="noopener noreferrer"><img className="footer-SVG"
                                                                                                  title="GitLab"
                                                                                                  src="ui/src/Portfolio/images/gitlab-logo-600.svg"
                                                                                                  alt="Gitlab"/></a>
                <a href="mailto: basile.thiry@hotmail.fr" target="_blank" rel="noopener noreferrer"><img
                    className="footer-SVG" title="Mail"
                    src="ui/src/Portfolio/images/mail.svg"
                    alt="Mail"/></a>

            </div>
        </PortoflioCSS>

    );
}

export default Portfolio;