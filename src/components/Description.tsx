import React, { FC, ReactNode } from 'react';
import { Barlow, Fraunces } from 'next/font/google';

import styles from '@/styles/description.module.scss'

const fraunces = Fraunces({
  weight: '900',
  subsets: ['latin']
});

const frauncesThin = Fraunces({
  weight: '700',
  subsets: ['latin']
});

const barlow = Barlow({
  weight: '600',
  subsets: ['latin']
});

interface DescriptionProps {
  header: string;
  hyperlink?: string;
  highlightColor?: string;
  headerStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  children?: ReactNode;
}

const Description: FC<DescriptionProps> = 
({ header, hyperlink, highlightColor, headerStyle, descriptionStyle, children}) => {
  return(
    <div className={styles.container}>
      <h1 className={`${fraunces.className} ${styles.header}`} style={headerStyle}>
        {header}
      </h1>
      <div className={`${barlow.className} ${styles.description}`} style={descriptionStyle}>
        {children}
      </div>
      <div className={styles['link-container']}>
        <a href={hyperlink} className={`${frauncesThin.className} ${styles.link}`}>
          LEARN MORE
        </a>
        <div className={styles.highlighter} style={{ backgroundColor: highlightColor}}></div>
      </div>
    </div>
  );
};

export default Description;