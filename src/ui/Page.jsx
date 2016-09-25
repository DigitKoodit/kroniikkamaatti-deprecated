import React, { PropTypes } from 'react';
import PlaceHolder from './PlaceHolder';
import Guild from './Guild';
import Navi from './Navi';

const Page = ({ store }, name, dispatch) => {
  const guilds = store.get('guilds');
  console.log('guilds', guilds)
  console.log('Hi, my name is', name)
  const active = store.get('activeGuild') && 
    store.get('guilds')
      .filter(guild => guild.get('guild') === store.get('activeGuild'))
      .first();

  return (
    <div>
      <Navi guilds={guilds} changeState={dispatch} />
      <PlaceHolder />
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