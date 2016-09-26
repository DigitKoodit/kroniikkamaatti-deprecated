import React, { PropTypes } from 'react';
import Page from './ui/Page';
import { immutableState } from './core/state';
import { getNewFirebase, addComment } from './core/firebase';

const App = React.createClass({
  contextTypes(){
    app: React.PropTypes.object.isRequired
  },
  getChildContext(){
    return {
      name: 'Kalle',
      dispatch: this.updateState
    }
  },
  getInitialState(){
    return {
      store: immutableState,
      firebase: getNewFirebase()
    }
  },
  getNewState(action, state){
    console.log('Action type:', action.type)
    switch(action.type) {
      case 'comment':
        addComment(this.state.firebase, action.payload.student, action.payload.message);
        return state.set('activeStudent', false);
      case 'activateStudent':
        return state.set('activeStudent', action.payload);
      case 'activateGuild':
        return state.set('activeGuild', action.payload);
      default:
        return state;
    };
  },
  updateState(action){
    const state = this.state.store;
    this.setState({store: this.getNewState(action, state)});
  },
  render(){
    return <Page store={this.state.store} />
  }
});

App.childContextTypes = {
  name: PropTypes.string,
  dispatch: PropTypes.func
}

export default App;