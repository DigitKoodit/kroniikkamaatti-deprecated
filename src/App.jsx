import React, { PropTypes } from 'react';
import Page from './ui/Page';
import { immutableState } from './core/state';
import { getNewFirebase } from './core/firebase';

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
      firebase: this.initializeFireBase
    }
  },
  initializeFireBase(){
    return getNewFirebase();
  },
  getNewState(action, state){
    console.log('Action type:', action.type)
    switch(action.type) {
      case 'comment':
        console.log('Comment written', action.payload);
      case 'activateStudent':
        console.log(action.payload);
        return state.set('activeStudent', action.payload);
      case 'activateGuild':
        console.log('setting active guild');
        return state.set('activeGuild', action.payload);
      default:
        console.log('Returning earlier state');
        return state;
    };
  },
  updateState(action){
    const state = this.state.store;
    this.setState({store: this.getNewState(action, state)});
  },
  componentWillMount(){
    console.log('componentWillMount', this.state.store)
  },
  render(){
    console.log('Render method called');
    return <Page store={this.state.store} />
  }
});

App.childContextTypes = {
  name: PropTypes.string,
  dispatch: PropTypes.func
}

export default App;