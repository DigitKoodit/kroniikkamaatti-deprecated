import React, { PropTypes } from 'react';

const Navi = ({guilds}, {dispatch}) => {

  const changeGuild = guild =>
    dispatch({
      type: 'activateGuild',
      payload: guild
    });

  return (  
    <div className="navi">
      <h2 className="navi-title"> Kroniikkamaatti </h2>
      <ul className="guild-list">
        {
          guilds.map(guild => {
            return (
              <li 
                key={ guild.get('guild') }
                className={`guild-list-item guild-list-item--${guild.get('guild')}`}
                onClick={() => changeGuild(guild)}
              > 
                {guild.get('guild')} 
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

Navi.propTypes = {
  guilds: PropTypes.object.isRequired,
  changeState: PropTypes.func
};

Navi.contextTypes = {
  dispatch: PropTypes.func.isRequired
}

export default Navi;