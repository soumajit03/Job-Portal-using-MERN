import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import {FaFacebook,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  const {isAuthorized} = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" :"footerHide"}>
      <div>
        &copy; All Rights Reserved By Soumajit,Srijan and Omprakash.
      </div>
      <div>
        <Link to={'https://www.facebook.com/login/'} target="_blank">
        <FaFacebook />
        </Link>
        <Link to={'https://www.youtube.com/'} target="_blank">
        <FaYoutube />
        </Link>
        <Link to={'https://www.linkedin.com/in/soumajit-choudhury-b68b08257/'} target="_blank">
        <FaLinkedin />
        </Link>
        <Link to={'https://www.instagram.com/accounts/login/'} target="_blank">
        <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer