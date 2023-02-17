import styled from 'styled-components';
import background from '../images/testbackground.jpg';

const PortoflioCSS = styled.div`

  .bg-overlay {
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${background}) no-repeat center center;
    background-size: cover;
    padding: 20px 0;
    height: 100vh;

  }

  .ba1 {
    font-weight: 900;
    font-size: 3.5em;
  }

  .ba1 .letter {
    display: inline-block;
    line-height: 1em;
    color: white;
    font-family: "Georgia", serif;
  }

  .block {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  .img-basile {
    margin: auto;
    width: 40vh;
    border-radius: 53% 47% 33% 67% / 61% 66% 34% 39%;
    animation: corner 3s linear infinite;
  }

  .profile h1 {
    font-family: 'Georgia', serif;
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: 900;
    font-size: 4em;
    text-decoration: underline;
  }

  .profile p {
    font-family: 'Georgia', serif;
    font-size: 1.6em;
    line-height: normal;

  }

  .profile a {
    color: inherit;
    font-family: 'Georgia', serif;
  }

  .profile a:hover {
    box-shadow: inset 100vw 0 0 0 black;
    color: white;
    font-family: 'Georgia', serif;
  }

  .school {
    background-color: #f2f2f2;

  }

  .school h1 {
    font-family: 'Georgia', serif;
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: 900;
    font-size: 4em;
    text-decoration: underline;
    color: #000;
  }

  .school .bottom-spacing {
    height: 40px;
  }

  /* image part */

  .school .container {
    position: relative;
    width: 1160px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin: auto;
  }

  .school .container .box {
    position: relative;
    width: 274px;
    height: 274px;
    transition: 0.5s;
    transform-style: preserve-3d;
    overflow: hidden;
    margin-right: 50px;
    margin-top: 45px;
    border-radius: 10px;
  }

  /*
  .school .container:hover .box {
      transform: rotateY(25deg);
      color: black;
  }
  
   ~ Selects every <box> element that is preceded by a <box:hover> element
  .school .container .box:hover ~ .box {
      transform: rotateY(-25deg);
  }
  
  */

  .school .container .box:hover {
    transform: rotateY(0deg) scale(1.25);
    z-index: 1;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
  }

  .school .container .box .imgBx {
    position: center;
    object-fit: cover;
  }

  .school .container .box .imgBx:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #f00, #000);
    z-index: 1;
    opacity: 0;
    transition: 0.5s;
    mix-blend-mode: multiply;

  }

  .school .container .box:hover .imgBx:before {
    opacity: 1;

  }

  .school .container .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }

  /* content part */

  .school .container .box .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    padding: 20px;
    align-items: flex-end;
    box-sizing: border-box;
  }

  .school .container .box .content h2 {
    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 20px;
    transform: translateY(300px);
    transition-delay: 0.3s;
  }

  .school .container .box:hover .content h2 {
    transform: translateY(0px);
  }

  .school .container .box .content h4 {
    color: #fff;
    transition: 0.5s;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 20px;
    transform: translateY(300px);
    transition-delay: 0.3s;
  }

  .school .container .box:hover .content h4 {
    transform: translateY(0px);
  }

  .school .container .box .content p {
    color: #fff;
    transition: 0.5s;
    font-size: 14px;
    transform: translateY(300px);
    transition-delay: 0.4s;
  }

  .school .container .box:hover .content p {
    transform: translateY(0px);
  }

  .school .container .box .content li {
    color: #fff;
    transition: 0.5s;
    font-size: 14px;
    transform: translateY(300px);
    transition-delay: 0.4s;
  }

  .school .container .box:hover .content li {
    transform: translateY(0px);
  }


  .technicalSkills h1 {
    font-family: 'Georgia', serif;
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: 900;
    font-size: 4em;
    text-decoration: underline;
  }

  .technicalSkills .technicalSkillsIcons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex: auto;

  }


  .technicalSkills .technicalSkillsIcons img {
    top: 0;
    left: 0;
    width: 6%;
    object-fit: fill;
    transition: 0.5s;
  }

  .technicalSkills .technicalSkillsIcons img:hover {
    transform: scale(1.1);
  }

  .technicalSkills .bottom-spacing {
    height: 40px;
  }

  .technicalSkills .technicalSkillsIcons .SVG {
    filter: brightness(0) saturate(100%);
  }

  .footer-SVG {
    filter: brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7500%) hue-rotate(359deg) brightness(107%) contrast(96%);
  }

  .projects {
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
  }

  .projects h1 {
    font-family: 'Georgia', serif;
    padding-top: 40px;
    padding-bottom: 40px;
    font-weight: 900;
    font-size: 4em;
    text-decoration: underline;
    text-align: center;
  }

  .projects .container {
    position: center;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  .projects .project-info-right {
    position: relative;
    justify-content: left;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin-bottom: 5%;
    display: flex;
    height: 100%;
  }

  .projects .project-info-right p {
    font-family: 'Georgia', serif;
    padding-right: 20px;
    padding-top: 20px;
    color: black;
  }

  .projects .project-info-right .projectText {
    font-family: 'Georgia', serif;
    text-align: center;
  }


  .projects .project-info-right .projectText h3 {
    font-weight: bold;
  }

  .projects .project-info-right .projectText a {
    color: inherit;
    font-family: 'Georgia', serif;
  }


  .projects .project-info-right .projectText a:hover {
    box-shadow: inset 100vw 0 0 0 black;
    color: white;
    font-family: 'Georgia', serif;
  }

  .projects .project-info-right .projectText img {
    font-family: 'Georgia', serif;
    float: left;
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    margin: 0 2vw 0 0;
  }


  .projects .project-info-left {
    position: relative;
    justify-content: right;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    margin-bottom: 5%;
    display: flex;
    height: 100%;
  }


  .projects .project-info-left p {
    font-family: 'Georgia', serif;
    padding-right: 20px;
    padding-top: 20px;
    color: black;
  }

  .projects .project-info-left .projectText {
    font-family: 'Georgia', serif;
    text-align: center;
  }


  .projects .project-info-left .projectText h3 {
    font-weight: bold;
  }

  .projects .project-info-left .projectText a {
    color: inherit;
    font-family: 'Georgia', serif;
  }

  .projects .project-info-left .projectText a:hover {
    box-shadow: inset 100vw 0 0 0 black;
    color: white;
    font-family: 'Georgia', serif;
  }

  .projects .project-info-left .projectText img {
    font-family: 'Georgia', serif;
    float: right;
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    margin: 0 0 0 2vw;
  }

  .projects p {
    text-align: center;
  }

  .projects a {
    color: inherit;
    font-family: 'Georgia', serif;
  }

  .projects a:hover {
    box-shadow: inset 100vw 0 0 0 black;
    color: white;
    font-family: 'Georgia', serif;
  }


  .projects .bottom-spacing {
    height: 40px;
  }


  .liens a img {
    padding-top: 3vh;
    margin-right: 5vw;
    top: 0;
    left: 0;
    width: 6%;
    height: auto;
    object-fit: fill;
    transition: 0.5s;
  }


  @keyframes corner {
    0%, to {
      border-radius: 53% 47% 33% 67% / 61% 66% 34% 39%;
    }
    25% {
      border-radius: 41% 59% 40% 60% / 46% 66% 34% 54%;
    }
    50% {
      border-radius: 34% 67% 27% 40% / 40% 66% 34% 54%;
    }
    75% {
      border-radius: 61% 39% 67% 33% / 46% 66% 34% 54%;
    }
  }
`;

export default PortoflioCSS;