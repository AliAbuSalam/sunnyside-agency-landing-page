import BoxWithOnlyBackground from "./BoxWithOnlyBackground";

import Glass from '../../public/mobile/image-stand-out.jpg';

const FourthBox = () => {
  return(
    <BoxWithOnlyBackground 
      imgSrc={Glass}
      alt="Image of a glass"
    />
  );
};

export default FourthBox;