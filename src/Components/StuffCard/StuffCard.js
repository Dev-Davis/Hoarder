import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import stuffShapes from '../../helpers/propz/stuffShapes';

class StuffCard extends React.Component {
  static propTypes = {
    stuff: stuffShapes.stuffShape,
  }

  render() {
    const { stuff } = this.props;
    // const editLink = `edit/${stuff.id}`;
    const singleLink = `item/${stuff.id}`;
    return (
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title text-center">{stuff.name}</h3>
          <p className="card-title text-center">{stuff.condition}</p>
          <p className="card-title text-center">{stuff.category}</p>
          <Link className="btn btn-success" to={singleLink}>View</Link>
        </div>
      </div>
    );
  }
}

export default StuffCard;
