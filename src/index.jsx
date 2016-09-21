import ReactDOM from 'react-dom';
import React from'react';
import { fromJS } from 'immutable';
import Page from './ui/Page';

const initialState = {
  'active':'',
  'guilds': [
      {
        'guild': 'Digit',
        'tutors': 'A&J',
        'students': [
          {'name':'Juha'},
          {'name':'Kalle'},
          {'name':'Heimo'}
        ]
      },
      {
        'guild': 'Asteriski',
        'tutors': 'P&K',
        'students': [
          {'name':'Jenni'},
          {'name':'Kiia'},
          {'name':'Helmi'}
        ]
      }
  ]
}
const state = fromJS(initialState);

export function changeState(payload, state){
  console.log(state, 'payload is', payload);
  state = state.set('active', payload);
}


ReactDOM.render(
  <Page state={state} />,
  document.getElementById('app')
);