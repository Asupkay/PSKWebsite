import React from 'react';
import PledgeClass from './pledgeClass';

const Brotherhood = (props) => {
  return (
    <React.Fragment> { 
      Object.keys(props.brotherhood).map(
        (pledgeClass) => <PledgeClass key={ pledgeClass } pledgeClassName={ pledgeClass } pledgeClass={ props.brotherhood[pledgeClass] }/>
      ) 
    }</React.Fragment>
  );

};

export default Brotherhood;
