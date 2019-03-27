import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './index.css';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className="input-wrapper">
      <label className="control-label">{label}</label>
      <TextField InputProps={{
        onChange: onChange,
        value: value,
        type: type,
        name: field,
        }} />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextFieldGroup.defaultProps = {
  type: 'text',
  error: '',
};

export default TextFieldGroup;
