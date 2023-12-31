import styles from "@/styles/page.module.scss";

import FirstBox from "@/components/FirstBox";
import SecondBox from '@/components/SecondBox';
import ThirdBox from '@/components/ThirdBox';
import FourthBox from "@/components/FourthBox";
import FifthBox from '@/components/FifthBox';
import SixthBox from '@/components/SixthBox';
import SeventhBox from '@/components/SeventhBox';
import EighthBox from "@/components/EighthBox";
import NinthBox from "@/components/NinthBox";

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles.first}>
        <FirstBox />
      </div>
      <div className={styles.second}>
        <SecondBox />
      </div>
      <div className={styles.third}>
        <ThirdBox />
      </div>
      <div className={styles.fourth}>
        <FourthBox />
      </div>
      <div className={styles.fifth}>
        <FifthBox />
      </div>
      <div className={styles.sixth}>
        <SixthBox />
      </div>
      <div className={styles.seventh}>
        <SeventhBox />
      </div>
      <div className={styles.eighth}>
        <EighthBox />
      </div>
      <div className={styles.ninth}>
        <NinthBox />
      </div>
    </div>
  );
}

export default Home;
