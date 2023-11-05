import Image from 'next/image';

import styles from '@/styles/firstBox.module.scss';
import WhiteArrow from './WhiteArrow';
import DesktopHeader from '../../public/desktop/image-header.jpg';
import MobileHeader from '../../public/mobile/image-header.jpg';
import { fraunces } from '@/utils/fonts';
import Navbar from './Navbar';


const FirstBox = () => {
    return(
    <div className={styles['firstbox-container']}>
      <div className={styles['background-container']}>
        <picture>
          <source srcSet={MobileHeader.src} media='(max-width: 400px)'/>
          <Image 
              src={DesktopHeader}
              alt='picture of oranges'
              width={0}
              height={0}
              sizes='100vw'
              className={styles.background}
              style={{ width: '100%', height: 'auto', zIndex: -1, }}
            />
        </picture>

      </div>
      <div className={styles.content}>
        <Navbar/>
        <h1 className={`${styles.h1} ${fraunces.className}`}>
          WE ARE <br />CREATIVES test
        </h1>
        <div className={styles['img-container']}>
          <WhiteArrow 
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
};

export default FirstBox;