import React from 'react';

class Edit extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="Edit">
        <h1>Edit</h1>
        <h2>The edit id is {editId}</h2>
      </div>
    );
  }
}

export default Edit;
