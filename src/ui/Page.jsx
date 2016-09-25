import React, { PropTypes } from 'react';
import PlaceHolder from './PlaceHolder';
import Guild from './Guild';
import StudentForm from './StudentForm';
import Navi from './Navi';


const Page = ({ store }, name) => {
  const guilds = store.get('guilds');
  const activeGuild = store.get('activeGuild') && 
    store.get('guilds')
      .filter(guild => guild.get('guild') === store.getIn(['activeGuild', 'guild']))
      .first();
  const activeStudent = store.get('activeStudent');

  return (
    <div className="page">
      <Navi guilds={guilds}/>
      { activeGuild !== ''
        ? <Guild active={activeGuild} />
        : <PlaceHolder />        
      }     
      { activeStudent && 
        <StudentForm student={activeStudent} />
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