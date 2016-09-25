import React, { PropTypes } from 'react';

const StudentForm = ({student}) => {
  return (
    <div className="modal-overlay">
      <div className="student-modal">
        This is student modal
      </div>
    </div>
  );
};

StudentForm.propTypes = {
  student: PropTypes.object.isRequired
};