import BoxWithOnlyBackground from './BoxWithOnlyBackground';
import Egg from '../../public/mobile/image-transform.jpg';
import styles from '@/styles/secondBox.module.scss';

const SecondBox = () => {
  return(
    <BoxWithOnlyBackground
      imgSrc={Egg}
      alt='image of an egg'
    />
  );
};

export default SecondBox;