import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from '@/styles/boxWithOnlyBackground.module.scss';

interface boxProps {
  sourceSet?: {
    img: StaticImageData;
    media: string;
  }[];
  defaultImg: StaticImageData;
  alt: string;
}

const BoxWithOnlyBackground:FC<boxProps> = ({ defaultImg, alt, sourceSet }) => {
  console.log('sourceSet: ', sourceSet)
  return(
    <div className={styles['img-container']}>
      <picture>
        {sourceSet?.map((source, index) => <source srcSet={source.img.src} media={source.media} key={index}/>)}
        <Image 
          alt={alt}
          src={defaultImg}
          className={styles.img}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>
    </div>
  );
};

export default BoxWithOnlyBackground;