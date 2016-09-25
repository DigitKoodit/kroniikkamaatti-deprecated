import React, { PropTypes } from 'react';

const PlaceHolder = () => {
  return (
    <div className="placeholder">
      <h2>Kroniikkamaatti v.02.16</h2>
      <div className="placeholder-bread">
        <p>Valittuasi haluamasi yhdistyksen, pääset 
        jakamaan hauskoja muistojasi kanssafukseistasi.</p>
        <p>Kroniikat tullaan julkaisemaan yhdistysten yhteisessä File-lehdessä. Pidäthän viestisi asiallisena.</p>
        <p className="signature">- Filen toimitus</p>
      </div>
    </div>
  );
}

PlaceHolder.propTypes = {
};

export default PlaceHolder;