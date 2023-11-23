import Image from 'next/image';

import styles from '@/styles/ninthBox.module.scss';
import Milk from '../../public/mobile/image-gallery-milkbottles.jpg';
import MilkDesktop from '../../public/desktop/image-gallery-milkbottles.jpg';
import Orange from '../../public/mobile/image-gallery-orange.jpg';
import OrangeDesktop from '../../public/desktop/image-gallery-orange.jpg';
import Cone from '../../public/mobile/image-gallery-cone.jpg';
import ConeDesktop from '../../public/desktop/image-gallery-cone.jpg';
import SugarCubes from '../../public/mobile/image-gallery-sugar-cubes.jpg';
import SugarCubesDesktop from '../../public/desktop/image-gallery-sugarcubes.jpg';
import { SCREEN_WIDTH_LAPTOP } from '@/lib/screenSizes';

const imagesData = [
  {
    src: Milk,
    alt: 'Picture of Milk',
    altImages: [{
      image: MilkDesktop,
      media: `(min-width: ${SCREEN_WIDTH_LAPTOP}px)`
    }]
  },
  {
    src: Orange,
    alt: 'Picture of Orange',
    altImages: [{
      image: OrangeDesktop,
      media: `(min-width: ${SCREEN_WIDTH_LAPTOP}px)`
    }]
  },
  {
    src: Cone,
    alt: 'Picture of Ice Cream Cone',
    altImages: [{
      image: ConeDesktop,
      media: `(min-width: ${SCREEN_WIDTH_LAPTOP}px)`
    }]
  },
  {
    src: SugarCubes,
    alt: 'Picture of Sugar Cubes',altImages: [{
      image: SugarCubesDesktop,
      media: `(min-width: ${SCREEN_WIDTH_LAPTOP}px)`
    }]
  }
];

const NinthBox = () => {
  return(
    <div className={styles.container}>
      {imagesData.map(image => 
        <div className={styles['image-container']} key={image.alt}>
          <picture>
            {image.altImages.map((altImage, index) => 
            <source key={index} srcSet={altImage.image.src} media={altImage.media}/>)}
            <Image 
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
          </picture>
        </div>
      )}
    </div>
  );
};

export default NinthBox;