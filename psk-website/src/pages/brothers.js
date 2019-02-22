import React, { Component } from 'react';
import Brotherhood from '../components/brotherhood'

class Brothers extends Component{

  state = {
    brothers: {
      116: [
        'Nicholas Bernier',
        'Jacob Ciesielski',
        'Ian Fan',
        'Jason Farkas',
        'Geoffrey Goldin',
        'Lior Idan',
        'Matthew Morandi',
        'Anthony Palandro',
        'Anthony Picone',
        'Ben Reydel',
        'Henry Tapanes',
        'Chris Zoubroulis'
      ],
      117: [
        {
          name: 'Alex Supkay',
          major: 'Computer Science',
          mugName: 'Not A Number',
          gradYear: '2019'
        },
        'Charlie Plate',
      ],
      118: [
        'Pat Song',
        'Will Kraemer',
      ],
      119: [
        'Gary Fernicola',
        'Brandon Soong',
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Brotherhood brotherhood={ this.state.brothers }/>
      </React.Fragment>
    );
  }
}
export default Brothers;
