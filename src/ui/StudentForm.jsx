import React, { PropTypes } from 'react';

const StudentForm = React.createClass({
  onInputChange(event){
    event.preventDefault();
    const $input = event.target;
    if($input.value.length > 160){
      alert('Pidäthän viestisi alle 160 merkin pituisina koska bitit eivät ole ilmaisia. ;)')
      $input.value = $input.value.substring(0, $input.value.length-1)
      return;
    }
    this.setState({commentField: $input.value, charsLeft: 160 - $input.value.length})
  },
  onSubmitForm(event){
    event.preventDefault();
    if(this.state.commentField.length === 0) {
      alert('Tyhjistä kommenteista ei ole juuri kellekkään iloa.');
      return;
    }
    if(this.state.charsLeft >= 0) {
      this.context.dispatch({
        type: 'comment',
        payload: {
          student: this.props.student,
          message: this.state.commentField
        }
      });
      this.setState({modalReady: true});
    }
  },
  getInitialState(){
    return {
      studentName: this.props.student.get('name'),
      formId: `student-modal-form-${this.props.student.get('name')}`,
      charsLeft: 160,
      commentField: ''
    }
  },
  charsLeftStyle(){
    return this.state.charsLeft > 20
    ? 'high'
    : 'low';
  },
  render(){
    return (
      <div className="modal-overlay">
        <div className="student-modal">
          <CloseModal />
          <h2 className="student-modal__student-name">{this.state.studentName}</h2>
          <span className="student-modal__chars-left">Merkkejä jäljellä: </span>
          <span className={`student-modal__chars-left__number student-modal__chars-left__number--${this.charsLeftStyle()}`}>
          {this.state.charsLeft}</span>
          <form className="student-modal__form">
            <textarea 
              id={this.state.formId}
              onChange={this.onInputChange}
              className="student-modal__form__input"/>
          </form>
          <button
            onClick={this.onSubmitForm}
            className="student-modal__form__submit">
            Kronikoi
          </button>
        </div>
      </div>
    );
  }
});

StudentForm.propTypes = {
  student: PropTypes.object.isRequired
};

StudentForm.contextTypes = {
  dispatch: PropTypes.func.isRequired
}

const CloseModal = ({}, {dispatch}) => {
  const closeModal = () => {
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