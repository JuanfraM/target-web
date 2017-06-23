import React from 'react';
import PropTypes from 'prop-types';
import { Link, Colors } from 'react-foundation';

const BlackButton = ({label}) => (
  <Link color={Colors.PRIMARY}>{label}</Link>
);

const { string } = PropTypes;

BlackButton.propTypes = {
  label: string,
};

export default BlackButton;
