import ReactDOM from 'react-dom';
import React from'react';

import App from './App';

function renderComponents(){
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
};

renderComponents();