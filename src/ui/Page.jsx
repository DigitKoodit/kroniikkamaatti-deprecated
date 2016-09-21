import React, { PropTypes } from 'react';
import {changeState} from '../index';
// import Guild from './Guild';

const Navi = ({guilds, state}) =>
  <div>
    <ul>
      {
        guilds.map(guild => {
          console.log('guild is', guild);
          return <li onClick={() => changeState(guild.get('guild'), state)}> {guild.get('guild')} </li>
        })
      }
    </ul>
  </div>

Navi.propTypes = {
  guilds: PropTypes.object.isRequired
}

const Page = ({ state }) => {
  const guilds = state.get('guilds');
  const active = state.get('active');
  
  return (
    <div>
      <Navi guilds={guilds} state={state} />
      { !active
        ? <div>Nothing selected.</div> 
        : <div>Kroniikkamaatti initial.
        Active: {active}</div>
      }
    </div>
  );
};


Page.propTypes = {
  state: PropTypes.object.isRequired
};

export default Page;