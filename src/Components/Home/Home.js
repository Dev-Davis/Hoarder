import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/single/${orderId}`);
  };

  render() {
    const newLink = '/new';
    const myStuffLink = '/stuff';
    return (
      <div className="Home col">
        <h1 className="header-title">Horder House</h1>
        <div className="home-box">
          <p>Welcome to the Horder House where you can
            actually keep up with the collection of junk you accumulate.
            Just Remeber to keep tabs on everything you collect to keep
            you horde up to date.</p>
          <Link className="btn btn-outline-dark" to={newLink}>New Stuff</Link>
          <Link className="btn btn-dark" to={myStuffLink}>My Stuff</Link>
        </div>
      </div>
    );
  }
}

export default Home;
