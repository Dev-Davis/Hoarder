import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import stuffData from '../../helpers/data/stuffData';

const defaultStuff = {
  name: '',
  type: '',
  condition: '',
  category: '',
};

class New extends React.Component {
  state = {
    newStuff: defaultStuff,
  }

  forFieldStringState = (name, e) => {
    const stuffCopy = { ...this.state.newStuff };
    stuffCopy[name] = e.target.value;
    this.setState({ newStuff: stuffCopy });
  }

  nameChange = e => this.forFieldStringState('name', e);

  typeChange = e => this.forFieldStringState('type', e);

  conditionChange = e => this.forFieldStringState('condition', e);

  categoryChange = e => this.forFieldStringState('category', e);

  submitForm = (e) => {
    e.preventDefault();
    const saveStuff = { ...this.state.newStuff };
    saveStuff.uid = firebase.auth().currentUser.uid;
    stuffData.postStuff(saveStuff)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newStuff } = this.state;
    return (
      <div className="NewStuff col-10 offset-1">
        <h1>New Stuff</h1>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="stuffName">Name of Stuff</label>
            <input
            type="text"
            className="form-control"
            id="stuffName"
            placeholder="Focusrite ISA One"
            value={newStuff.name}
            onChange={this.nameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="stuffType">Type of Stuff</label>
            <input
            type="text"
            className="form-control"
            id="stuffType"
            placeholder="Pre Amp"
            value={newStuff.type}
            onChange={this.typeChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="stuffCondition">Condition of Stuff</label>
            <input
            type="text"
            className="form-control"
            id="stuffCondition"
            placeholder="Good"
            value={newStuff.condition}
            onChange={this.conditionChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="stuffCategory">Category of Stuff</label>
            <input
            type="text"
            className="form-control"
            id="stuffCategory"
            placeholder="Electronics"
            value={newStuff.category}
            onChange={this.categoryChange}/>
            <small id="stuffCategory" className="form-text text-muted">Make sure everything is correct before submitting.</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default New;
