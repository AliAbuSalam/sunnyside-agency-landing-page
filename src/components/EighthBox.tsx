import { fraunces } from '@/utils/fonts';

import ClientTestimony from "./ClientTestimony";
import styles from '@/styles/eighthBox.module.scss';
import Emily from '../../public/image-emily.jpg';
import Thomas from '../../public/image-thomas.jpg';
import Jennie from '../../public/image-jennie.jpg';

const clientsData = [
  {
    name: 'Emily R.',
    profilePicture: Emily,
    profileAlt: 'Picture of Emily',
    position: 'Marketing Director',
    testimony: <>We put our trust in Sunnyside and they delivered,
      making sure our needs were met and deadlines were always hit.</>
  },
  {
    name: 'Thomas S.',
    profilePicture: Thomas,
    profileAlt: 'Picture of Thomas',
    position: 'Chief Operating Officer',
    testimony: <>Sunnyside&apos;s enthusiasm coupled with their keen interest
      in our brand&apos;s success made it a satisfying and enjoyable experience.</>
  },
  {
    name: 'Jenny F.',
    profilePicture: Jennie,
    profileAlt: 'Picture of Jennie',
    position: 'Business Owner',
    testimony: <>Incredible end result! Our sales increased over 400% when we 
      worked with Sunnyside. Highly recommended!</>
  }
];

const EighthBox = () => {
  return(
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <h2 className={`${fraunces.className} ${styles['header-on-desktop']} ${styles.header}`}>
          CLIENT TESTIMONIALS
        </h2>
        <h4 className={`${fraunces.className} ${styles['header-on-mobile']} ${styles.header}`}>
          CLIENT TESTIMONIALS
        </h4>
      </div>
      <div className={styles['testimonial-container']}>
        {clientsData.map(client => (
          <ClientTestimony
            key={client.name}
            name={client.name}
            position={client.position}
            profilePicture={client.profilePicture}
            profileAlt={client.profileAlt}
          >
            {client.testimony}
          </ClientTestimony>
        ))}
      </div>
    </div>
  );
};

export default EighthBox;