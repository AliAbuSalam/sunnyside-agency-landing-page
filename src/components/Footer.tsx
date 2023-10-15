import { Barlow } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookSquare, 
  faInstagram,
  faTwitter,
  faPinterest
 } from '@fortawesome/free-brands-svg-icons';

import styles from '@/styles/footer.module.scss';

const barlow = Barlow({
  subsets: ['latin'],
  weight: '900',
});

const barlowSmall = Barlow({
  subsets: ['latin'],
  weight: '600'
})

const iconList = [
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faPinterest
];

const TenthBox = () => {
  return(
    <div className={styles.container}>
      <h1 className={barlow.className}>sunnyside</h1>
      <div className={`${styles['link-container']} ${barlowSmall.className}`}>
        <div>About</div>
        <div>Service</div>
        <div>Projects</div>
      </div>
      <div className={styles['icon-container']}>
        {iconList.map((icon, index) => (
          <FontAwesomeIcon key={index} className={styles.icon} icon={icon} size='lg' style={{ color: styles.cyanColor }}/>
        ))}
      </div>
    </div>
  );
};

export default TenthBox;