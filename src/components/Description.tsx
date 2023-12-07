import React, { FC, ReactNode } from 'react';

import styles from '@/styles/description.module.scss'
import { fraunces } from '@/utils/fonts';

interface DescriptionProps {
  header: string;
  hyperlink?: string;
  highlightColor?: string;
  headerStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  children?: ReactNode;
  id?: string;
}

const Description: FC<DescriptionProps> = 
({ header, hyperlink, highlightColor, headerStyle, descriptionStyle, children, id}) => {
  return(
    <div className={styles.container} id={id}>
      <div className={styles['content-container']}>
        <h1 className={`${fraunces.className} ${styles.header}`} style={headerStyle}>
          {header}
        </h1>
        <div className={`${styles.description}`} style={descriptionStyle}>
          {children}
        </div>
        <div className={styles['link-container']}>
          <a href={hyperlink} className={`${fraunces.className} ${styles.link}`}>
            LEARN MORE
          </a>
          <div className={styles.highlighter} style={{ backgroundColor: highlightColor}}></div>
        </div>
      </div>
    </div>
  );
};

export default Description;