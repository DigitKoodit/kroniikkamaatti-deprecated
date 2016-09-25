import React, { PropTypes } from 'react';

const Navi = ({guilds, changeState}) =>
  <div>
    Valitse järjestö: 
    <ul>
      {
        guilds.map(guild => {
          console.log('guild is', guild);
          return <li> {guild.get('guild')} </li>
        })
      }
    </ul>
  </div>

Navi.propTypes = {
  guilds: PropTypes.object.isRequired,
  changeState: PropTypes.func
};
