import React, { Component } from 'react';
import Brotherhood from '../components/brotherhood';

class Alumni extends Component {
  
  state = {
    alumni: {
      '2018 Graduates': [
        'Craig Cheng',
        'Jake Roccasecca',
        'Jeremy Roche',
        'Bobby Rovito',
        'Chris Whittaker',
        'Justin De Martinis',
        'Troy Dermond',
        'James Doyle',
        'Yarden Flatow',
        'Hovig Hartounian',
        'Terence McEllen',
        'John Pristina',
        'Nicholas Rhein',
        'Mark Spaloss',
        'Taylor Wulff',
        'Stephen Mcardle',
        'Adam Banatt',
        'Josh Smith',
      ],
      '2017 Graduates': [
        'Thomas Pritchett',
        'Hachik Arslanyan',
        'Jesse Eichen',
        'Ian Klein',
        'Pingshi Haung',
        'George Papamakariou II',
        'Adam Suter',
        'Greg Ricci',
        'Mike Renna',
        'Ben Tucker',
        'Zeqi Shen',
        'Nick Basis',
      ],
      '2016 Graduates': [
        'Nick Dimitriades',
        'Eric Oswin',
        'Filip Szymanski',
        'Demitri Zoubroulis',
        'Troy D\'Angelo',
        'Edward Runyon',
        'Mark Shasha',
      ],
      '2015 Graduates': [
        'Zachary Buecher',
        'Vincent Cascella',
        'Tim Choma',
        'Colin Holt',
        'Valentino Ivezaj',
        'Bobby Krohn',
        'Joe Powers',
        'Alex Popa',
        'Christopher Stevens',
        'Dan O\'Sullivan',
        'Anton Yevelev',
      ],
      '2014 Graduates': [
        'Ryan Britt',
        'Steve Bukowski',
        'Vicent Cocchiarella',
        'Pete Donchak',
        'Samuel Gleit',
        'Matthew Hanni',
        'Austin Ip',
        'Tom Loop',
        'Mark Mallet',
        'Curtis Mele',
        'Hasan Shahid',
        'Salvatore Spinella',
        'Justin Ure',
        'Maike Wolff',
      ],
      '2013 Graduates': [
        'Dave Gordon',
        'Edan Golomb',
        'Anthony Kosaka',
        'George Lehaf',
        'Alex Lon',
        'Kevin Motyka',
        'Emal Rustemi',
        'Charly Steiner',
        'Jake Thibault'
      ],
      '2012 Graduates': [
        'Matt Schettino'
      ],
      '2011 Graduates': [
        'Colin Anderson',
        'Rev. Gerald Dimaso',
        'Steven Dipaola',
        'Kevin Fuhrman',
        'Joseph Geis',
        'Matthew Koelner',
        'Andrew J. Micallef',
        'Michael Miller',
        'Louis Nemeth',
        'Maickel Peck',
        'Timothy Ryan',
        'Andrew West',
      ],
      '2010 Graduates': [
        'Patrick Alfonzo',
        'Anthony Andrews',
        'Eddie Daniele',
        'Steve Defroda',
        'Steve Kozacik',
        'Tom Kudej',
        'Matt Kukis',
        'Dan Newman',
        'Nick Morffi',
        'Tom Paddack',
        'Andy Smith',
        'Tim Smith',
        'Scott Snyder',
        'Kieran Walters',
        'Mike Zavorskas',
      ],
      '2009 Graduates': [
        'Chris Dunford',
        'Jimmy Grillo',
        'Ben Hochberg',
        'Ryan Leppert',
        'Nick Mindos',
        'Jack I\'Connor',
        'Mike Ozols',
        'George Perry',
        'Andrew Rella',
        'Aaron Rella',
        'Joe Ricco',
        'Brendan Trotta',
        'Mike Vitello',
      ],
      '2008 Graduates': [
        'Jason Bulaclac',
        'Marc Castells',
        'Eric Eisenhardt',
        'John Paul Favara',
        'Brian Gardner',
        'Rostislav Goltser',
        'Tom Kopin',
        'Kevin Lee',
        'Jonathan A. Matos',
        'Bill Nyquist',
        'Giancarlo Schiano',
        'Dave Rivera',
        'Justin Rodriguez',
        'Mike Schulte',
        'Naiem Sulamanee',
        'Dan Taskalos',
      ]
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Brotherhood brotherhood={ this.state.alumni }/>
      </React.Fragment>
    );
  }
}

export default Alumni;
