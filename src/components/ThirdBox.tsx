import Description from './Description';
import styles from '@/styles/thirdBox.module.scss';

const ThirdBox = () => {
  const header = 'Transform your brand';
  
  return(
    <Description 
      header={header}
      hyperlink=''
      highlightColor={styles.yellow}
    >
      We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your client through compelling visuals that do most of the marketing for you.
    </Description>
  );
};

export default ThirdBox;