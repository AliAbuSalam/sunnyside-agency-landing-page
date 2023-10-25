import styles from '@/styles/firstBox.module.scss';
import WhiteArrow from './WhiteArrow';
import { fraunces } from '@/utils/fonts';

const FirstBox = () => {
    return(
    <div className={styles['firstbox-container']}>
      <h1 className={`${styles.h1} ${fraunces.className}`}>
        WE ARE <br />CREATIVES
      </h1>
      <div className={styles['img-container']}>
        <WhiteArrow 
          className={styles.image}
        />
      </div>
    </div>
  )
};

export default FirstBox;