import DescriptionWithBackground from "./DescriptionWithBackground";

import Orange from '../../public/mobile/image-photography.jpg';
import OrangeDesktop from '../../public/desktop/image-photography.jpg';
import styles from '@/styles/seventhBox.module.scss';
import { SCREEN_WIDTH_PHONE } from "@/lib/screenSizes";

const SeventhBox = () => {
  const title = 'Photography';
  const backgroundAlt = 'Image of an orange';
  const sourceSet = [{
    image: Orange,
    media: `(max-width: ${SCREEN_WIDTH_PHONE + 1}px)`
  }]
  return(
    <DescriptionWithBackground 
      title={title}
      sourceSet={sourceSet}
      defaultBackground={OrangeDesktop}
      backgroundAlt={backgroundAlt}
      textColor={styles.color}
    >
      Increase your credibility by getting the most stunning,
      high-quality photos that improve your business image.
    </DescriptionWithBackground>
  );
};

export default SeventhBox;