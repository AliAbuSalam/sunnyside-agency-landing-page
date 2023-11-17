import DescriptionWithBackground from "./DescriptionWithBackground";

import Cherry from '../../public/mobile/image-graphic-design.jpg';
import CherryDesktop from '../../public/desktop/image-graphic-design.jpg';
import styles from '@/styles/sixthBox.module.scss';
import { SCREEN_WIDTH_PHONE } from "@/lib/screenSizes";

const SixthBox = () => {
  const title = 'Graphic Design';
  const sourceSet = [{
    image: Cherry,
    media: `(max-width: ${SCREEN_WIDTH_PHONE + 1}px)`
  }];
  return(
    <DescriptionWithBackground
      title={title}
      sourceSet={sourceSet}
      defaultBackground={CherryDesktop}
      backgroundAlt="close up image of cherries"
      textColor={styles.color}
    >
      Great design makes you memorable. We deliver
      artwork that underscores your brand message
      and captures potential clients&apos; attention.
    </DescriptionWithBackground>
  );
};

export default SixthBox;