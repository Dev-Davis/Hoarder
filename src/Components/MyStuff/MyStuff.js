import React from 'react';
import firebase from 'firebase/app';

import stuffData from '../../helpers/data/stuffData';
import StuffCard from '../StuffCard/StuffCard';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    const { uid } = firebase.auth().currentUser;
    stuffData.getStuff(uid)
      .then(stuff => this.setState({ stuff }))
      .catch(err => console.error('could not get stuff', err));
  }

  componentDidMount = () => {
    this.getStuff();
  }

  render() {
    const makeCards = this.state.stuff.map(stuff => (
      <StuffCard
        key={stuff.id}
        stuff={stuff}
      />
    ));

    return (
      <div className="Stuff col-10 offset-1">
        <h1>My Stuff</h1>
        {makeCards}
      </div>
    );
  }
}

export default MyStuff;
