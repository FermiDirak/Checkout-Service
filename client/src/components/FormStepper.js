import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class FormStepper extends Component {
  static propTypes = {
    step: PropTypes.number,
  }

  static stepContent = [
    'User Information',
    'Shipping Information',
    'Checkout',
  ];

  render() {
    return (
      <div style={{width: '700px'}}>
        <Stepper activeStep={this.props.step}>
          {
            FormStepper.stepContent.map((stepTitle, i) => {
              return (
                <Step key={i}>
                  <StepLabel>{stepTitle}</StepLabel>
                </Step>
              );
            })
          }
        </Stepper>
      </div>
    )
  }
}

export default FormStepper;