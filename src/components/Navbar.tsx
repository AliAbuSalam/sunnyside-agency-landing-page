import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Barlow } from 'next/font/google';

import styles from '@/styles/Navbar.module.scss';

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: '600', 
});

const dropdownOptions = ['About', 'Services', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <div className={barlow.className}>
      <div className={styles['nav-container']}>
        <span>
          sunnyside
        </span>
        <div>
          <FontAwesomeIcon icon={faBars} size='xl'/>
        </div>
      </div>
      <div className={styles.dropdown}>
        {dropdownOptions.map(opt => (
          <div key={opt} className={styles['dropdown-option']}>{opt}</div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;