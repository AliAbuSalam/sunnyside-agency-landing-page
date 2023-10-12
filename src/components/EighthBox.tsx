import { Fraunces } from 'next/font/google';

import ClientTestimony from "./ClientTestimony";
import styles from '@/styles/eighthBox.module.scss';
import Emily from '../../public/image-emily.jpg';
import Thomas from '../../public/image-thomas.jpg';
import Jennie from '../../public/image-jennie.jpg';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: '700'
})

const EighthBox = () => {
  return(
    <div className={styles.container}>
      <h4 className={fraunces.className}>CLIENT TESTIMONIALS</h4>
      <div className={styles['testimonial-container']}>
        <ClientTestimony
          profilePicture={Emily}
          profileAlt="picture of Emily"
          name="Emily R."
          position="Marketing Director"
        >
          We put our trust in Sunnyside and they delivered,
          making sure our needs were met and deadlines
          were always hit.
        </ClientTestimony>
        <ClientTestimony
          profilePicture={Thomas}
          profileAlt='picture of Thomas'
          name='Thomas S.'
          position='Chief Operating Officer'
        >
          Sunnyside&apos;s enthusiasm coupled with their keen interest
          in our brand&apos;s success made it a satisfying and enjoyable
          experience.
        </ClientTestimony>
        <ClientTestimony
          profilePicture={Jennie}
          profileAlt='picture of Jennie'
          name='Jennie F.'
          position='Business Owner'
        >
          Incredible end result! Our sales increased over 400% when we
          worked with Sunnyside. Highly recommended!
        </ClientTestimony>
      </div>
    </div>
  );
};

export default EighthBox;