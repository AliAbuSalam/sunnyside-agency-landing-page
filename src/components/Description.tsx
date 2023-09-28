import { FC } from 'react';
import { Barlow, Fraunces } from 'next/font/google';

import styles from '@/styles/description.module.scss'

const fraunces = Fraunces({
  weight: '900',
  subsets: ['latin']
});

const barlow = Barlow({
  weight: '600',
  subsets: ['latin']
});

interface DescriptionProps {
  header: string;
  description: string;
  hyperlink?: string;
  highlightColor?: string;
}

const Description: FC<DescriptionProps> = ({ header, description, hyperlink, highlightColor}) => {
  return(
    <div className={styles.container}>
      <h1 className={`${fraunces.className} ${styles.header}`}>
        {header}
      </h1>
      <div className={`${barlow.className} ${styles.description}`}>
        {description}
      </div>
      <div className={styles['link-container']}>
        <a href={hyperlink} className={`${barlow.className} ${styles.link}`}>
          LEARN MORE
        </a>
        <div className={styles.highlighter} style={{ backgroundColor: highlightColor}}></div>
      </div>
    </div>
  );
};

export default Description;