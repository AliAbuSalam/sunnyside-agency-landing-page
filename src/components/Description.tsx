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
}

const Description: FC<DescriptionProps> = ({ header, description, hyperlink}) => {
  return(
    <div className={styles.container}>
      <h1 className={`${fraunces.className} ${styles.header}`}>
        {header}
      </h1>
      <div className={`${barlow.className} ${styles.description}`}>
        {description}
      </div>
      <a href={hyperlink} className={`${barlow.className} ${styles.link}`}>
        LEARN MORE
      </a>
    </div>
  );
};

export default Description;