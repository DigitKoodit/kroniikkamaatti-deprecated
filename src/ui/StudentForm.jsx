import React, { PropTypes } from 'react';

const StudentForm = ({student}, {dispatch}) => {
  console.log('student is', student)
  return (
    <div className="modal-overlay">
      <div className="student-modal">
        <CloseModal />
        This is student modal
      </div>
    </div>
  );
};

StudentForm.propTypes = {
  student: PropTypes.object.isRequired
};

const CloseModal = ({}, {dispatch}) => {
  const closeModal = () => {
    console.log('CloseModal clicked')
    dispatch({
      type: 'activateStudent',
      payload: false
    })
  }
  return (
      <div className="student-modal-close" onClick={() => closeModal()} >
      x
      </div>
  )
}

CloseModal.contextTypes = {
  dispatch: PropTypes.func.isRequired
}

export default StudentForm;