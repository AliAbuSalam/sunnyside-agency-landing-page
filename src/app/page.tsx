import styles from "@/styles/page.module.scss";

import FirstBox from "@/components/FirstBox";
import SecondBox from '@/components/SecondBox';
import ThirdBox from '@/components/ThirdBox';

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles['box-container']}>
        <FirstBox />
      </div>
      <div>
        <SecondBox />
      </div>
      <div>
        <ThirdBox />
      </div>
    </div>
  );
}

export default Home;
