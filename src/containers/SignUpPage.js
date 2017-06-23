import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signUpActions from '../actions/signUpActions';
import SignUpForm from '../components/user/SignUpForm';
import { Row, Column } from 'react-foundation';
import PromotionPage from './PromotionPage';

const SignUpPage = ({ actions: { signUp } }) => (
  <Row className="display expanded">
    <Column medium={6}>
      <Row className="display expanded">
        <Column medium={6} centerOnSmall>
          <p>SIGN UP</p>
          <SignUpForm onSubmit={signUp}/>
        </Column>
      </Row>
    </Column>
    <Column medium={6}>
      <PromotionPage/>
    </Column>
  </Row>
);

const { object } = PropTypes;

SignUpPage.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(signUpActions, dispatch)
  };
};

export default connect(null, mapDispatch)(SignUpPage);
