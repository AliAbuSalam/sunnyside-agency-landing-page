import { FC, ReactNode } from 'react';
import Image, { StaticImageData } from "next/image";

import styles from '@/styles/clientTestimony.module.scss';
import { fraunces } from '@/utils/fonts';

type clientTestimonyProps = {
  profilePicture: StaticImageData;
  profileAlt?: string;
  name: string;
  position: string;
  children: ReactNode;
}

const ClientTestimony: FC<clientTestimonyProps> = ({ profilePicture, name, profileAlt, position, children}) => {
  const defaultProfileAlt = 'Profile Image';
  return(
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <Image 
          src={profilePicture}
          alt={profileAlt || defaultProfileAlt}
          fill
          
        />
      </div>
      <div className={styles.testimony}>
        {children}
      </div>
      <div className={`${styles.name} ${fraunces.className}`}>{name}</div>
      <div className={styles.position}>{position}</div>
    </div>
  );
};

export default ClientTestimony;