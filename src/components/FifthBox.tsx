import Description from './Description';
import styles from '@/styles/fifthBox.module.scss';

const FifthBox = () => {
  const header='Stand out to the right audience';
  const description = 'Using a collaborative formula of designers, researchers, and photographers, videographers, and copywriters, we\'ll build and extend your brand in digital places'

  return(
    <Description 
      header={header}
      description={description}
      highlightColor={styles.red}
    />
  );
};

export default FifthBox;