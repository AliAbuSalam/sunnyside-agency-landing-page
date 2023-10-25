import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from "next/image";

import styles from '@/styles/descriptionWithBackground.module.scss';
import { fraunces } from '@/utils/fonts';

type DescWithBackgroundProps = {
  title: string;
  background: StaticImageData;
  backgroundAlt: string;
  children: ReactNode;
  textColor?: string;
}


const DescriptionWithBackground:FC<DescWithBackgroundProps> = ({ 
  title, 
  background,
  backgroundAlt,
  children,
  textColor 
  }) => {
  return(
  <div className={styles.container}>
    <Image 
      src={background}
      alt={backgroundAlt}
      className={styles['background-image']}
      width={350}
      sizes='100vw'
    />
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