import React from 'react';
import {styles} from '../style';
import {logo} from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faHeart} style={{color: "#f7f7f8",}} />
const Footer = () => {
  return (
    <footer
    className={`${styles.paddingX} w-full flex items-center py-5 bg-primary`}> 
    <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
  <img src={logo} alt="logo" className="w-15 h-14 object-contain" />
  <div className="text-white text-[18px] font-bold cursor-pointer">Thanks for Visiting !</div>
  <div className="items-center justify-end"> Made with  {element}  by  RG </div>
</div>
  </footer>
  )
}
export default Footer;