import React, { Component } from 'react';
import { List, Header, Segment } from 'semantic-ui-react'


const renderBrothers = (brothers) => {
  console.log(brothers);
  return <React.Fragment> { 
    Object.keys(brothers).map(
      (key) => <Segment> <Header as='h2'>{key}</Header> <List horizontal>{renderPeople(brothers[key])}</List></Segment>
    ) 
  }</React.Fragment>
}

const renderPeople = (people) => {
  return <React.Fragment> { people.map(person => <List.Item> { person } </List.Item>) } </React.Fragment>
}

class Brothers extends Component{

  state = {
    brothers: {
      116: [
        'Ben Reydel',
        'Lior Idan',
      ],
      117: [
        'Alex Supkay',
        'Charlie Plate',
      ],
      118: [
        'Pat Song',
        'Will Kraemer',
      ],
      119: [
        'Gary Fernicola',
        'Brandon Soong',
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        { renderBrothers(this.state.brothers) }
      </React.Fragment>
    );
  }
}
export default Brothers;
