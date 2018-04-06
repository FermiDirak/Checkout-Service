import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import Form from './Form';
import FormStepper from './FormStepper';
import PaginationButtons from './PaginationButtons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      forms: [
        {
          name: '',
          email: '',
          password: '',
        },
        {
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: '',
          phoneNumber: '',
        },
        {
          creditCardNumber: '',
          expiryDate: '',
          CVV: '',
          billingZip: '',
        },
      ],
    };
  }

  getFormFields = () => [
    [
      {stateName: 'name', hint: 'name', default: this.state.forms[0].name},
      {stateName: 'email', hint: 'email', default: this.state.forms[0].email},
      {stateName: 'password', hint: 'password', sensitive: true, default: this.state.forms[0].password},
    ],
    [
       {stateName: 'addressLine1', hint: 'address line 1', default: this.state.forms[1].addressLine1},
       {stateName: 'addressLine2', hint: 'address line 2', default: this.state.forms[1].addressLine2},
       {stateName: 'city', hint: 'city', default: this.state.forms[1].city},
       {stateName: 'state', hint: 'state', default: this.state.forms[1].state},
       {stateName: 'zipCode', hint: 'zip code', default: this.state.forms[1].zipCode},
       {stateName: 'phoneNumber', hint: 'phone number', default: this.state.forms[1].phoneNumber},
    ],
    [
       {stateName: 'creditCardNumber', hint: 'credit card number', default: this.state.forms[2].creditCardNumber},
       {stateName: 'expiryDate', hint: 'expiry date', default: this.state.forms[2].expiryDate},
       {stateName: 'CVV', hint: 'cvv', default: this.state.forms[2].CVV},
       {stateName: 'billingZip', hint: 'billing zip code', default: this.state.forms[2].billingZip},
    ],
  ];

  /** checks if the current form is filled out
   * @return {boolean} Whether the current form is filled out */
  isCurrentFormFilledOut = () => {
    let currentForm = this.state.forms[this.state.step];

    return !_(Object.values(currentForm)).some(field => {
      return field === undefined || field === '';
    });
  }

  onFieldChanged = (fieldName, fieldData) => {
    let forms = this.state.forms;
    forms[this.state.step][fieldName] = fieldData;

    this.setState({ forms });
  }

  onBackClick = () => {
    let step = this.state.step;
    step = Math.max(0, step - 1);
    this.setState({step});
  }

  onFowardClick = () => {
    let step = this.state.step;
    step = Math.min(2, step + 1);
    this.setState({step});
  }

  onSubmit = () => {
    console.log(this.state.forms);
  }

  render() {
    const paperStyle = {
      display:'flex',
      flexDirection: 'column',
      alignItems:'center',
      padding: '16px',
    };

    return (
      <Container>
        <Paper style={paperStyle}>
          <h2>Checkout</h2>
          <Form formFields={this.getFormFields()[this.state.step]}
            onFieldChanged={this.onFieldChanged}
          />

          <br/>

          <FormStepper step={this.state.step}/>

          <PaginationButtons
            onBackClick={this.onBackClick}
            onFowardClick={this.onFowardClick}
            canGoBackward={this.state.step > 0}
            canGoForward={this.isCurrentFormFilledOut()}
            onLastEntry={this.state.step === 2}
            onSubmit={this.onSubmit}
          />
        </Paper>
      </Container>
    );
  }
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
