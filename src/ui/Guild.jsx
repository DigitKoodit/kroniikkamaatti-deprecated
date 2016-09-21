import React, { PropTypes } from 'react';

const StudentGroup = ({group}) => {
  const tutors = group.get('tutors').join(' & ');
  const students = group.get('students');
  console.log(tutors);

  return(
    <div className="guild__student-groups__group">
      <h2 className="guild__student-groups__group">
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

const Guild = ({guildData}) => {
  const guildName = guildData.get('guild');
  const groups = guildData.get('groups');

  return (
    <div>
      <h2>{guildName}</h2>
      <div className="guild__student-groups">
      { groups.map(group => <StudentGroup group={group} />) }
      </div>
    </div>
  );
}

Guild.propTypes = {
  guildData: PropTypes.object.isRequired
};



export default Guild;