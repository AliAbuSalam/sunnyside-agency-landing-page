import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from '@/styles/boxWithOnlyBackground.module.scss';

interface boxProps {
  imgSrc: StaticImageData;
  alt: string;
}

const BoxWithOnlyBackground:FC<boxProps> = ({ imgSrc, alt }) => {
  return(
    <div className={styles['img-container']}>
      <Image 
        alt={alt}
        src={imgSrc}
        className={styles.img}
        layout='responsive'
        sizes='(max-width: 351px) 350px'
      />
    </div>
  );
};

export default BoxWithOnlyBackground;