'use client'

import React, { useState, useRef, useEffect } from 'react';

import NavOptions from './NavOptions';
import styles from '@/styles/navbar.module.scss';
import { fraunces } from '@/utils/fonts';

const dropdownOptions = ['About', 'Services', 'Projects',];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    setToggleMenu(false);
  }
  
  // const handleMenuBlur = () => {
  //   console.log('closed')
  //   setToggleMenu(false);
  // }
  // NOT USED FOR NOW!!!!

  // useEffect(() => {
  //   //focus the dropdown menu so it can be closed by firing on blur event when unfocused
  //   if(toggleMenu){
  //     dropdownRef.current?.focus();
  //   }
  // }, [toggleMenu]);
  // ALSO NOT USED FOR NOW!!!!!

  return (
    <div>
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
        id='MENU'
        ref={dropdownRef}
      >
        <div className={styles['dropdown-arrow']}></div>
        <div className={styles.dropdown}>
          {dropdownOptions.map(opt => (
            <a 
              key={opt} 
              className={styles['dropdown-option']} 
              href={`#${opt.trim().toLowerCase()}`}
              onClick={handleLinkClick}
            >
              {opt}
            </a>
          ))}
          <div className={`${styles['dropdown-option']} ${styles['contact-button']} ${fraunces.className}`}>
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;