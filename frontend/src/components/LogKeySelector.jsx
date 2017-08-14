import React from 'react';
import PropTypes from 'prop-types';


const LogKeySelector = (props) => {
  const { logKey, logKeys, onChangeLogKey } = props;
  let options = [(<option disabled value="" key=""> -- select a key -- </option>)];
  options = options.concat(logKeys.map((key) => (<option value={key} key={key}>{key}</option>)));
  return (
    <div className="log-key-selector">
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="log-key-selector-select">log key:</label>
          <select id="log-key-selector-select" className="form-control" value={logKey} onChange={onChangeLogKey}>
            {options}
          </select>
        </div>
      </form>
    </div>
  );
};

LogKeySelector.propTypes = {
  logKey: PropTypes.string,
  logKeys: PropTypes.arrayOf(PropTypes.string),
  onChangeLogKey: PropTypes.func
};
LogKeySelector.defaultProps = {
  logKey: '',
  logKeys: [],
  onChangeLogKey: () => {}
};

export default LogKeySelector;
