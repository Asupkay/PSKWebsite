import React from 'react';
import { Image, Header } from 'semantic-ui-react';

import housePic from '../house.jpg';

const Home = (props) => {
  
  return (
    <React.Fragment>
      <Image src={housePic} size='medium'/>
      <Header as='h2'>PHI SIGMA KAPPA</Header>
    </React.Fragment>
  );
}

export default Home;
