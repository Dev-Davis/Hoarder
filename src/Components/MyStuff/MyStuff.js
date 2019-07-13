import React from 'react';
import firebase from 'firebase/app';

import stuffData from '../../helpers/data/stuffData';
import StuffCard from '../StuffCard/StuffCard';

class MyStuff extends React.Component {
  state = {
    stuffs: [],
  }

  getStuff = () => {
    const { uid } = firebase.auth().currentUser;
    stuffData.getStuff(uid)
      .then(stuffs => this.setState({ stuffs }))
      .catch(err => console.error('could not get stuff', err));
  }

  componentDidMount = () => {
    this.getStuff();
  }

  deleteStuff = (stuffId) => {
    stuffData.removeStuff(stuffId)
      .then(() => this.getStuff())
      .catch(err => console.error('unable to delete my stuff', err));
  }

  render() {
    const makeCards = this.state.stuffs.map(stuff => (
      <StuffCard
        key={stuff.id}
        stuff={stuff}
        deleteStuff={this.deleteStuff}
        />
    ));

    return (
      // <div className="row">
      <div className="Stuff col-8 offset-2">
        <h1 className="MyStuff">My Stuff</h1>
        <div className="d-flex">
          {makeCards}
        </div>
      </div>
      // </div>
    );
  }
}

export default MyStuff;
