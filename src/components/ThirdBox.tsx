import Description from './Description';

const ThirdBox = () => {
  const header = 'Transform your brand';
  const description = 
    'We are a full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visuals that do most of the marketing for you.'
  return(
    <Description 
      header={header}
      description={description}
      hyperlink=''
    />
  );
};

export default ThirdBox;