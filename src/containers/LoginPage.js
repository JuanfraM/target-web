import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/session/LoginForm'; // eslint-disable-line import/no-named-as-default
import { routes } from '../constants/routesPaths';
import { Row, Column } from 'react-foundation';

const LoginPage = ({ actions: { login } }) => (
  <Row className="display">
    <Column medium={6}>
      <p>LOGIN</p>
      <LoginForm onSubmit={login}/>
      <Link to={routes.signUp}> Sign up </Link>
    </Column>
  </Row>
);

const { object } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(LoginPage);
