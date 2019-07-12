import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import stuffShapes from '../../helpers/propz/stuffShapes';

class StuffCard extends React.Component {
  static propTypes = {
    stuff: stuffShapes.stuffShape,
    deleteStuff: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { stuff, deleteStuff } = this.props;
    deleteStuff(stuff.id);
  }

  render() {
    const { stuff } = this.props;
    const editLink = `edit/${stuff.id}`;
    const singleLink = `stuff/${stuff.id}`;
    return (
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title text-center">{stuff.name}</h3>
          <p className="card-title text-center">{stuff.condition}</p>
          <p className="card-title text-center">{stuff.category}</p>
          <Link className="btn btn-primary" to={singleLink}>View</Link>
          <Link className="btn btn-success" to={editLink}>Edit</Link>
          <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
        </div>
      </div>
    );
  }
}

export default StuffCard;
