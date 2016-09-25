import React, { PropTypes } from 'react';
import {addComment, setActivateStudent} from '../index';
import StudentForm from './StudentForm';

const StudentGroup = ({group}) => {
  const tutors = group.get('tutors').join(' & ');
  const students = group.get('students');
  console.log(addComment);
  
  return(
    <div className="guild__student-groups__group">
      <h2 className="guild__student-groups__group__title">
      {tutors}</h2>
      <ul>
        {students.map(student => <li>{student}</li>)}
      </ul>
    </div>
  );
};

StudentGroup.propTypes = {
  group: PropTypes.object.isRequired
};

const Guild = ({guildData, state}) => {
  const guildName = guildData.get('guild');
  const groups = guildData.get('groups');
  const activeStudent = state.get('activeStudent');

  return (
    <div className="guild">
      <h2>{guildName}</h2>
      <div className="guild__student-groups">
      { groups.map(group => <StudentGroup group={group} activateStudent={changeActiveStudent} />) }
      </div>
      {activeStudent && <StudentForm student={activeStudent} />}
    </div>
  );
}

Guild.propTypes = {
  guildData: PropTypes.object.isRequired
};

export default Guild;