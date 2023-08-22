import styles from '@/styles/Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className={styles.container}>
      sunnyside
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;