import React from 'react';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/single/${orderId}`);
  };

  render() {
    return (
      <div className="Home col-10 offset-1">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
