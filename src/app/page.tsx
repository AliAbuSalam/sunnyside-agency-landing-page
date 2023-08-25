import styles from "@/styles/page.module.scss";

import Navbar from "@/components/Navbar";

const Home = () => {
  return(
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
