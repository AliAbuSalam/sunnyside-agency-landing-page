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
      <div>
        <FirstBox />
      </div>
      <div className={styles.second}>
        <SecondBox />
      </div>
      <div>
        <ThirdBox />
      </div>
      <div>
        <FourthBox />
      </div>
      <div>
        <FifthBox />
      </div>
      <div>
        <SixthBox />
      </div>
      <div>
        <SeventhBox />
      </div>
      <div>
        <EighthBox />
      </div>
      <div>
        <NinthBox />
      </div>
    </div>
  );
}

export default Home;
