import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookSquare, 
  faInstagram,
  faTwitter,
  faPinterest
 } from '@fortawesome/free-brands-svg-icons';

import styles from '@/styles/footer.module.scss';

const linkList = ['About', 'Services', 'Projects']

const iconList = [
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faPinterest
];

const Footer = () => {
  return(
    <div className={styles.container}>
      <h1>sunnyside</h1>
      <div className={styles['link-container']}>
        {linkList.map(link => (
          <a key={link} className={styles.link} href={`#${link.trim().toLowerCase()}`}>{link}</a>
        ))}
      </div>
      <div className={styles['icon-container']}>
        {iconList.map((icon, index) => (
          <FontAwesomeIcon key={index} className={styles.icon} icon={icon} size='lg'/>
        ))}
      </div>
    </div>
  );
};

export default Footer;