'use client'
import React, { FC, Dispatch, useState, SetStateAction, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/navOptions.module.scss';
import { SCREEN_WIDTH_LAPTOP } from '@/lib/screenSizes';

interface navOptionsProps {
  options: string[];
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>
  dropdownRef: React.RefObject<HTMLDivElement>
}

const NavOptions:FC<navOptionsProps> = ({ options, toggleMenu, setToggleMenu, dropdownRef }) => {
  const [useSummarizedNavOptions, setUseSummarizedNavOptions] = useState(true);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu)
  };

  const handleMenuPressed = (event: React.MouseEvent) => {
    //prevents menu click event from being fired when dropdown is active
    if(document.activeElement === dropdownRef.current){
      event.preventDefault();
    }
  };

  const handleResizeWindow = () => {
    if(typeof document === 'undefined') return;
    const documentWidth = document.documentElement.clientWidth;
    if(documentWidth < SCREEN_WIDTH_LAPTOP){
      setUseSummarizedNavOptions(true);
    } else {
      setUseSummarizedNavOptions(false);
    }
  };

  useEffect(() => {
    if(typeof document !== 'undefined'){
      window.addEventListener('resize', handleResizeWindow);
      handleResizeWindow();
      return () => window.removeEventListener('resize', handleResizeWindow);
    }
  }, []);

  return(
    <div onResize={handleResizeWindow}>
      {useSummarizedNavOptions ?
        <FontAwesomeIcon 
          icon={faBars} 
          size='xl'
          onClick={handleMenuClick}
          onMouseDown={handleMenuPressed}
          className={`${toggleMenu ? styles['greyed-out'] : ''} ${styles['menu-icon']}`}
      /> 
      :<div className={styles['options-container']}>
        {options.map(option => <div key={option} title={option} className={styles.option}>{option}</div>)}
      </div>
      
      }
    </div>
  );
};

export default NavOptions;