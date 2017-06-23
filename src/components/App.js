// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

const App = ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
);

const { object } = PropTypes;

App.propTypes = {
  children: object.isRequired
};

export default App;
