import DescriptionWithBackground from "./DescriptionWithBackground";

import Orange from '../../public/mobile/image-photography.jpg';
import styles from '@/styles/seventhBox.module.scss';

const SeventhBox = () => {
  const title = 'Photography';
  const backgroundAlt = 'Image of an orange';
  return(
    <DescriptionWithBackground 
      title={title}
      background={Orange}
      backgroundAlt={backgroundAlt}
      textColor={styles.color}
    >
      Increase your credibility by getting the most stunning,
      high-quality photos that improve your business image.
    </DescriptionWithBackground>
  );
};

export default SeventhBox;