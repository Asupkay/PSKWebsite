import React from 'react';
import PledgeClass from './pledgeClass';
import {Grid} from 'semantic-ui-react';

const Brotherhood = (props) => {
  return (
    <React.Fragment> 
      <Grid container doubling columns={2}>
        { 
            Object.keys(props.brotherhood).map(
              (pledgeClass) => <Grid.Column><PledgeClass key={ pledgeClass } pledgeClassName={ pledgeClass } pledgeClass={ props.brotherhood[pledgeClass] }/></Grid.Column>
            ) 
        }
      </Grid>
    </React.Fragment>
  );

};

export default Brotherhood;
