import React from 'react';

class SinglePage extends React.Component {
  render() {
    const singleId = this.props.match.params.id;
    return (
      <div className="Single">
        <h1>Single Stuff</h1>
        <h2>Single Page id is: {singleId}</h2>
      </div>
    );
  }
}

export default SinglePage;
