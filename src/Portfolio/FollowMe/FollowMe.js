import React from 'react';
import {motion} from 'framer-motion';
import './FollowMeCSS.css';

const listVariants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

const socialVariants = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: -50,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};


const List = ({children}) => {
    return (
        <motion.ul variants={listVariants} className="follow-me-placement">
            {children}
        </motion.ul>
    );
};
const GitHub = () => {

    return (
        <div className='follow-me'>
            <div>
                <a href="https://github.com/Riqoulouru" className='github'><span></span></a>
            </div>


        </div>

    );
};

const Linkedin = () => {

    return (
        <div className="follow-me">
            <a href="https://www.linkedin.com/in/basile-thiry-6222951aa/" className="linkedin"><span></span></a>

        </div>

    );
};
const GitLab = () => {

    return (
        <div className="follow-me">

            <a href="https://gitlab.com/Riqou" className='gitlab'><span></span></a>
        </div>

    );
};

const SuivezMoi = () => {
    return (
        <List>
            <GitHub/>
            <Linkedin/>
            <GitLab/>
        </List>
    );
};

export default SuivezMoi;