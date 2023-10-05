import BoxWithOnlyBackground from './BoxWithOnlyBackground';
import Egg from '../../public/mobile/image-transform.jpg';

const SecondBox = () => {
  return(
    <BoxWithOnlyBackground 
      imgSrc={Egg}
      alt='image of an egg'
    />
  );
};

export default SecondBox;