import Image from 'next/image';

import styles from '@/styles/firstBox.module.scss';
import WhiteArrow from './WhiteArrow';
import DesktopHeader from '../../public/desktop/image-header.jpg';
import { fraunces } from '@/utils/fonts';

const FirstBox = () => {
    return(
    <div className={styles['firstbox-container']}>
      <div className={styles['background-container']}>
        <Image 
          src={DesktopHeader}
          alt='picture of oranges'
          width={0}
          height={0}
          sizes='100vw'
          className={styles.background}
          style={{ width: '99vw', height: 'auto', zIndex: -1, }}
        />
      </div>
      <div className={styles.content}>
        <h1 className={`${styles.h1} ${fraunces.className}`}>
          WE ARE <br />CREATIVES
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