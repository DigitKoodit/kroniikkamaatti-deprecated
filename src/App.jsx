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
      store:immutableState,
      firebase: this.initializeFireBase
    }
  },
  initializeFireBase(){
    return getNewFirebase();
  },
  updateState(action){
    this.setState((state = this.state.store) => {
      switch(action.type) {
        case 'comment':
          console.log(action.payload);
        case 'activateStudent':
          console.log(action.payload);
          return state.set('activeStudent', action.payload);
        case 'activateGuild':
          return state.set('activeGuild', action.payload);
        default:
          return state;
      };
    });
  },
  componentWillMount(){
    console.log('componentWillMount', this.state.store)
  },
  render(){
    console.log(this.state.store)
    return <Page store={this.state.store} />
  }
});

App.childContextTypes = {
  name: PropTypes.string,
  dispatch: PropTypes.func
}

export default App;