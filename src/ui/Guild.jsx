import React, { PropTypes } from 'react';

const StudentGroup = ({group}, {dispatch}) => {
  const tutors = group.get('tutors').join(' & ');
  const students = group.get('students');

  const setActiveStudent = student => {
    dispatch({
      type: 'activateStudent',
      payload: student
    });
  }
  
  return(
    <div className="guild__student-groups__group">
      <h2 className="guild__student-groups__group__title">
        {tutors}
      </h2>
      <ul className="guild__student-groups__group__list">
        {students.map(student => 
          <li 
            className="guild__student-groups__group__list__item"
            onClick={() => setActiveStudent(student)}
            key={student}>
            {student}
          </li>
        )}
      </ul>
    </div>
  );
};

StudentGroup.propTypes = {
  group: PropTypes.object.isRequired
};

StudentGroup.contextTypes = {
  dispatch: PropTypes.func
}


const Guild = ({active}, {dispatch}) => {
  const guildName = active.get('guild');
  const groups = active.get('groups');

  return (
    <div className="guild">
      <h2 className="guild-title">{guildName}</h2>
      <div className="guild__student-groups">
      { groups.map((group, i) => 
        <StudentGroup key={i} group={group} />
      )}
      </div>
    </div>
  );
}

Guild.propTypes = {
  active: PropTypes.object.isRequired
};

Guild.contextTypes = {
  dispatch: PropTypes.func
}

export default Guild;