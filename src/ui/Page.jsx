import React, { PropTypes } from 'react';
import PlaceHolder from './PlaceHolder';
import Guild from './Guild';
import Navi from './Navi';

const Page = ({ store }, name) => {
  const guilds = store.get('guilds');
  const active = store.get('activeGuild') && 
    store.get('guilds')
      .filter(guild => guild.get('guild') === store.get('activeGuild'))
      .first();

  return (
    <div>
      <Navi guilds={guilds}/>
      { active !== ''
        ? <Guild active={active} />
        : <PlaceHolder />        
      }
    </div>
  );
};


Page.propTypes = {
  store: PropTypes.object.isRequired
};

Page.contextTypes = {
  name: PropTypes.string
}

export default Page;