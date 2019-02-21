import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import Brother from './brother';

const renderBrothers = (pledgeClass) => {
  return pledgeClass.map((brother, index) => {
    return <Brother key={ index } brother={ brother }/>
  });
}

const PledgeClass = (props) => {
  return (
    <Segment style={{height: '215px'}} key = {props.pledgeClassName}> 
      <Header as='h2'>{props.pledgeClassName}</Header> 
      <List horizontal>{ renderBrothers(props.pledgeClass) }</List>
    </Segment>
  )
};

export default PledgeClass;
