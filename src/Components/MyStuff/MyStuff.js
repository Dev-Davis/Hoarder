import React from 'react';

class MyStuff extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    return (
      <div className="Stuff col-10 offset-1">
        <h1>My Stuff</h1>
      </div>
    );
  }
}

export default MyStuff;
