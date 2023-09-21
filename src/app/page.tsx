import styles from "@/styles/page.module.scss";

import FirstBox from "@/components/FirstBox";

const Home = () => {
  return(
    <div className={styles.container}>
      <div>
        <FirstBox />
      </div>
    </div>
  );
}

export default Home;
