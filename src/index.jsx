import ReactDOM from 'react-dom';
import React from'react';
import { immutableState } from './core/state';
import Page from './ui/Page';

export function changeState(payload, state){
  console.log(state, 'payload is', payload);
  renderComponents(state.set('active', payload));
};

const renderComponents = (state = immutableState) => {
  ReactDOM.render(
    <Page state={state} />,
    document.getElementById('app')
  );
}

renderComponents();