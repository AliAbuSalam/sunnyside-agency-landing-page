import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Barlow } from 'next/font/google';

import styles from '@/styles/Navbar.module.scss';

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: '600', 
})

const Navbar = () => {
  return (
    <div className={`${styles.container} ${barlow.className}`}>
      <span>
        sunnyside
      </span>
      <div>
        <FontAwesomeIcon icon={faBars} size='xl'/>
      </div>
    </div>
  );
};

export default Navbar;