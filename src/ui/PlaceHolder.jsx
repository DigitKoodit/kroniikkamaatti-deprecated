import React, { PropTypes } from 'react';

const PlaceHolder = () => {
  return (
    <div>
      <h2> Valitse ensin yhdistys.</h2>
    </div>
  );
}

PlaceHolder.propTypes = {
  guildData: PropTypes.object.isRequired
};

export default PlaceHolder;