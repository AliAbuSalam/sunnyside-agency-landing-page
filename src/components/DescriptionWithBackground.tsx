import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from "next/image";
import { Fraunces, Barlow } from 'next/font/google';

import styles from '@/styles/descriptionWithBackground.module.scss';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: '900',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: '600'
})

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
      <div className={`${barlow.className} ${styles.text}`}>
        {children}
      </div>
    </div>
  </div>
  );
};

export default DescriptionWithBackground;