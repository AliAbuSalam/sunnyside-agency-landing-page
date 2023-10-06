import Description from './Description';
import styles from '@/styles/fifthBox.module.scss';

const FifthBox = () => {
  const header='Stand out to the right audience';

  return(
    <Description 
      header={header}
      highlightColor={styles.red}
    >
      Using a collaborative formula of 
      <br />designers, researchers, and photographers, videographers, and copywriters, we&apos;ll build and extend your brand in digital places
    </Description>
  );
};

export default FifthBox;