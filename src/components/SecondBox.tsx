import Image from 'next/image';

import Egg from '../../public/mobile/image-transform.jpg';
import styles from '@/styles/secondBox.module.scss';

const SecondBox = () => {
  return(
    <div className={styles['img-container']}>
      <Image 
        alt='image of an egg'
        src={Egg}
        
        layout='responsive'
        sizes='(max-width: 351px) 350px'
      />
    </div>
  );
};

export default SecondBox;