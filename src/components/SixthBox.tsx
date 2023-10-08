import DescriptionWithBackground from "./DescriptionWithBackground";

import cherry from '../../public/mobile/image-graphic-design.jpg';
import styles from '@/styles/sixthBox.module.scss';

const SixthBox = () => {
  const title = 'Graphic Design';
  return(
    <DescriptionWithBackground
      title={title}
      background={cherry}
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