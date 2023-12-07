import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from "next/image";

import styles from '@/styles/descriptionWithBackground.module.scss';
import { fraunces } from '@/utils/fonts';

type DescWithBackgroundProps = {
  title: string;
  sourceSet?: {
    image: StaticImageData,
    media: string
  }[];
  defaultBackground: StaticImageData;
  backgroundAlt: string;
  children: ReactNode;
  textColor?: string;
  id?: string;
}


const DescriptionWithBackground:FC<DescWithBackgroundProps> = ({ 
  title,
  sourceSet,
  defaultBackground,
  backgroundAlt,
  children,
  textColor,
  id 
  }) => {
  return(
  <div className={styles.container} id={id}>
    <picture className={styles['background-container']}>
      {sourceSet?.map((source, index) => <source key={index} srcSet={source.image.src} media={source.media}/>)}
      <Image 
        src={defaultBackground}
        alt={backgroundAlt}
        className={styles['background-image']}
        sizes='100vw'
      />
    </picture>
    <div className={styles['text-container']} style={{ color: textColor || 'black' }}>
      <h2 className={fraunces.className}>
        {title}
      </h2>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  </div>
  );
};

export default DescriptionWithBackground;