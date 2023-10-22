import React, { FC, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/navOptions.module.scss';

interface navOptionsProps {
  options: string[];
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>
  dropdownRef: React.RefObject<HTMLDivElement>
}

const NavOptions:FC<navOptionsProps> = ({ options, toggleMenu, setToggleMenu, dropdownRef }) => {
  const screenWidth = document.documentElement.clientWidth;

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu)
  };

  const handleMenuPressed = (event: React.MouseEvent) => {
    //prevents menu click event from being fired when dropdown is active
    if(document.activeElement === dropdownRef.current){
      event.preventDefault();
    }
  };

  return(
    <div>
      {screenWidth >= 351 ? 
        <FontAwesomeIcon 
          icon={faBars} 
          size='xl' 
          onClick={handleMenuClick}
          onMouseDown={handleMenuPressed}
          className={`${toggleMenu ? styles['greyed-out'] : ''} ${styles['menu-icon']}`}
      /> 
      :<div>
        {options.map(option => <div key={option}>{option}</div>)}
      </div>
      
      }
    </div>
  );
};

export default NavOptions;