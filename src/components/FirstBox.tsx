import { Fraunces } from "next/font/google";

import styles from '@/styles/firstBox.module.scss';
import WhiteArrow from './WhiteArrow';

const fraunces = Fraunces({ 
  weight: '900',
  subsets: ['latin']
 });



const FirstBox = () => {
  console.log('styles: ', styles);
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