import BoxWithOnlyBackground from "./BoxWithOnlyBackground";

import Glass from '../../public/mobile/image-stand-out.jpg';
import GlassDesktop from '../../public/desktop/image-stand-out.jpg';
import { SCREEN_WIDTH_PHONE } from "@/lib/screenSizes";


const FourthBox = () => {
  const sourceSet = [{
    img: Glass,
    media: `(max-width: ${SCREEN_WIDTH_PHONE + 1}px)`
  }];

  return(
    <BoxWithOnlyBackground 
      sourceSet={sourceSet}
      defaultImg={GlassDesktop}
      alt="Image of a glass"
    />
  );
};

export default FourthBox;