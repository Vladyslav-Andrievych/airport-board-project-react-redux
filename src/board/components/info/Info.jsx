import React from 'react';
import PropTypes from 'prop-types';

import './info.scss';

const Info = ({ message }) => {
  return <span className="info">{message}</span>;
};

Info.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Info;
