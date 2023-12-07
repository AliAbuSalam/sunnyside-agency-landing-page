import BoxWithOnlyBackground from './BoxWithOnlyBackground';
import Egg from '../../public/mobile/image-transform.jpg';
import EggDesktop from '../../public/desktop/image-transform.jpg';
import { SCREEN_WIDTH_PHONE } from '@/lib/screenSizes';

const SecondBox = () => {
  const sourceSet = [{
    img: Egg,
    media: `(max-width: ${SCREEN_WIDTH_PHONE + 1}px)`
  }];

  return(
    <BoxWithOnlyBackground
      sourceSet={sourceSet}
      defaultImg={EggDesktop}
      alt='image of an egg'
    />
  );
};

export default SecondBox;