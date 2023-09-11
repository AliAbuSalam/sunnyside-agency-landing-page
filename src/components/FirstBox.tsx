import { Fraunces } from "next/font/google";
import Image from "next/image";

// import longArrow from '../../public/mobile/Long white arrow.svg';
import styles from '@/styles/firstBox.module.scss';

const fraunces = Fraunces({ 
  weight: '900',
  subsets: ['latin']
 });



const FirstBox = () => {
  console.log('styles: ', styles);
  return(
    <div className={styles['firstbox-container']}>
      <h1>
        WE ARE CREATIVE
      </h1>
      <div className={styles['img-container']}>
        <Image
          className={styles.image}
          src={'/mobile/Long white arrow.svg'}
          alt='long white arrow'
          
          width={0}
          height={0}
        />
      </div>
    </div>
  )
};

export default FirstBox;