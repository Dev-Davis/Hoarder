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

  deleteStuff = () => {
    const stuffId = this.props.match.params.id;
    stuffData.removeStuff(stuffId)
      .then(() => this.props.history.push('/stuff'))
      .catch(err => console.error('unable to delete stuff', err));
  }

  render() {
    const { stuff } = this.state;
    return (
      <div className="Single col-4 offset-4">
        <br></br>
        <div className="card text-center">
          <div className="card-header">
          <h1>{stuff.name}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">({stuff.type})</h5>
            <h4 className="card-text">{stuff.description}.</h4>
            <button className="btn btn-danger" onClick={this.deleteStuff}>Delete</button>
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
