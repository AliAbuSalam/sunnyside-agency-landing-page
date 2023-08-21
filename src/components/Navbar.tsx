import styles from '@/styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      sunnyside
      <div>
        <i className='fa-solid fa-bars'></i>
      </div>
    </div>
  );
};

export default Navbar;