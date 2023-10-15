import Image from 'next/image';

import styles from '@/styles/ninthBox.module.scss';
import Milk from '../../public/mobile/image-gallery-milkbottles.jpg';
import Orange from '../../public/mobile/image-gallery-orange.jpg';
import Cone from '../../public/mobile/image-gallery-cone.jpg';
import SugarCubes from '../../public/mobile/image-gallery-sugar-cubes.jpg';

const coloredBackground = (color: string) => ({
  backgroundColor: color,
});

const imagesData = [
  {
    src: Milk,
    alt: 'Picture of Milk'
  },
  {
    src: Orange,
    alt: 'Picture of Orange'
  },
  {
    src: Cone,
    alt: 'Picture of Ice Cream Cone'
  },
  {
    src: SugarCubes,
    alt: 'Picture of Sugar Cubes'
  }
];

const NinthBox = () => {
  return(
    <div className={styles.container}>
      {imagesData.map(image => 
        <div className={styles['image-container']} key={image.alt}>
          <Image 
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
      )}
    </div>
  );
};

export default NinthBox;