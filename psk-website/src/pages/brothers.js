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
        'Tim Werder',
        'James Bond',
        'Colby Chaffin',
        'Jared Davi',
        'Angelo Margiolas',
        'Anthony Baglino',
        'John Banya',
        'Matthew Colozzo',
        'Greg Milani',
        'Peter Oline',
        'Matt Roleke',
        'Edward Wilkins Jr.',
      ],
      118: [
        'Pat Song',
        'William Kraemer',
        'Kieran Joseph',
        'Mithin Nair',
        'Kuni Noubissi',
        'Derek Schwoyer',
        'Charles Attisani',
        'Emilio Domenech',
        'Karcsi Homoki',
        'Alex Kahn',
        'Carmine Marchionda',
        'Aristide Muscariello',
        'Andy Nyugen',
        'Lucas Payette',
      ],
      119: [
        'Gary Fernicola',
        'Brandon Soong',
        'Wyn Barnum',
        'Ricard Bilotti',
        'Anthony Ciccone',
        'Danny Collins',
        'Richard Dana',
        'Damon Del Priore',
        'Devin Dragon',
        'Stephen Forte',
        'Aiden Kates',
        'Kenneth Mason',
        'John McFarren',
        'Samuel Murphy',
        'Alexander Palmisano',
        'Joseph Roberti',
        'Austin Robertson',
        'Christopher Rovatsos',
        'Alexander Saltstein',
        'Erik Schneider',
        'Ben Segall',
        'Trent Slutzsky',
        'Michael Steck',
        'Kit Touch-Phong',
        'Adam Undus',
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
