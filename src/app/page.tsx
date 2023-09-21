import styles from "@/styles/page.module.scss";

import FirstBox from "@/components/FirstBox";
import SecondBox from '@/components/SecondBox';

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles['box-container']}>
        <FirstBox />
      </div>
      <div>
        <SecondBox />
      </div>
    </div>
  );
}

export default Home;
