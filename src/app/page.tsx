import styles from "@/styles/page.module.scss";

import Navbar from "@/components/Navbar";
import FirstBox from "@/components/FirstBox";

const Home = () => {
  return(
    <div className={styles.container}>
      <div>
        <Navbar />
        <FirstBox />
      </div>
    </div>
  );
}

export default Home;
