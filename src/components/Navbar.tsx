'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Barlow } from 'next/font/google';

import NavOptions from './NavOptions';
import styles from '@/styles/Navbar.module.scss';

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: '600', 
});

const dropdownOptions = ['About', 'Services', 'Projects', 'Contact'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleMenuPressed = (event: React.MouseEvent) => {
    //prevents menu click event from being fired when dropdown is active
    if(document.activeElement === dropdownRef.current){
      event.preventDefault();
    }
  }
  
  const handleMenuBlur = () => {
    setToggleMenu(false);
  }

  useEffect(() => {
    //focus the dropdown menu so it can be closed by firing on blur event when unfocused
    if(toggleMenu){
      dropdownRef.current?.focus();
    }
  }, [toggleMenu]);

  return (
    <div className={barlow.className}>
      <div className={styles['nav-container']}>
        <span>
          sunnyside
        </span>
        <NavOptions 
          options={dropdownOptions}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          dropdownRef={dropdownRef}
        />
      </div>
      <div 
        className={`${styles['dropdown-container']} ${!toggleMenu ? styles.hidden : ''}`}
        tabIndex={0}
        onBlur={handleMenuBlur}
        id='MENU'
        ref={dropdownRef}
      >
        <div className={styles['dropdown-arrow']}></div>
        <div className={styles.dropdown}>
          {dropdownOptions.map(opt => (
            <div key={opt} className={styles['dropdown-option']}>{opt}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;