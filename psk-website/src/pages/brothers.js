import React, { Component } from 'react';
import Brotherhood from '../components/brotherhood'

class Brothers extends Component{

  state = {
    brothers: {
      117: [
        'Tim Werder',
        'James Bond',
        'Colby Chaffin',
        'Jared Davi',
        'Angelo Margiolas',
        'Anthony Baglino',
        'John Banya',
        'Greg Milani',
        'Matt Roleke',
      ],
      118: [
        'Pat Song',
        'William Kraemer',
        'Kiran Joseph',
        'Mithin Nair',
        'Derek Schwoyer',
        'Charles Attisani',
        'Emilio Domenech',
        'Karcsi Homoki',
        'Carmine Marchionda',
        'Aristide Muscariello',
        'Andy Nyugen',
        'Lucas Payette'
      ],
      119: [
        'Gary Fernicola',
        'Brandon Soong',
        'Wyn Barnum',
        'Richard Bilotti',
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
        'Trent Slutzky',
        'Michael Steck',
        'Kit Touch-Phong',
        'Adam Undus'
      ],
      120: [
	'Matthew Bavoso',
	'Michael Bellocchio',
	'Ian Davis-Hoff',
	'Zack Edwards',
	'William Escamilla',
	'Zachary Fazal',
	'Charles Fee',
	'Cole Felsher',
	'Cosmo Gallaro',
	'Evan Headley',
	'Jared Kantor',
	{
	  name: 'Tim Leonard',
	  major: 'Computer Science',
	  mugName: 'Lying till Null',
	 gradYear: '2021'
	},
	'James Margiotta',
	'Jake Marshall',
	'Aidan McEnroe',
	'Jack Mork',
	'Zachary Salisbury',
	'Dylan Smith', 
	'Francesco Sparacio',
	'Edward Yaroslavsky'
      ]
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
