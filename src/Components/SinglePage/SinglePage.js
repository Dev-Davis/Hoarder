import React from 'react';
// import { Link } from 'react-router-dom';

import stuffData from '../../helpers/data/stuffData';

class SinglePage extends React.Component {
  state = {
    stuff: {},
  }

  componentDidMount() {
    const stuffId = this.props.match.params.id;
    stuffData.getSingleStuff(stuffId)
      .then(stuffPromise => this.setState({ stuff: stuffPromise.data }))
      .catch(err => console.error('can not get stuff', err));
  }

  render() {
    const { stuff } = this.state;
    return (
      <div className="Single">
      <h1>Single Stuff</h1>
        <div className="card text-center">
          <div className="card-header">
            Item
          </div>
          <div className="card-body col-10 offset-1">
            <h5 className="card-title">{stuff.name}</h5>
            <p className="card-text">{stuff.description}.</p>
          </div>
          <div className="card-footer text-muted">
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePage;


// {stuff.category}
// {stuff.condition}
// {stuff.type}
