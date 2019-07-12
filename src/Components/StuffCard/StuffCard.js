import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import stuffShapes from '../../helpers/propz/stuffShapes';

class StuffCard extends React.Component {
  static propTypes = {
    stuff: stuffShapes.stuffShape,

    render() {
      const { stuff } = this.props;
      return (
        <div class="card col-10 offset-1">
          <div class="card-header">
            {stuff.name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      );
    }
  }
}

export default StuffCard;
