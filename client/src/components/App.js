import React, { Component } from 'react';
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
      forms: {
        form1: {
          name: undefined,
          email: undefined,
          password: undefined,
        },
        form2: {
          addressLine1: undefined,
          addressLine2: undefined,
          city: undefined,
          state: undefined,
          zipCode: undefined,
          phoneNumber: undefined,
        },
        form3: {
          creditCardNumber: undefined,
          expiryDate: undefined,
          CVV: undefined,
          billingZip: undefined,
        },
      }
    };
  }

  static formFields = [
    [
      {stateName: 'name', hint: 'name'},
      {stateName: 'email', hint: 'email'},
      {stateName: 'password', hint: 'password', sensitive: true},
    ],
    [
       {stateName: 'addressLine1', hint: 'address line 1'},
       {stateName: 'addressLine2', hint: 'address line 2'},
       {stateName: 'city', hint: 'city'},
       {stateName: 'state', hint: 'state'},
       {stateName: 'zipCode', hint: 'zip code'},
       {stateName: 'phoneNumber', hint: 'phone number'},
    ],
    [
       {stateName: 'creditCardNumber', hint: 'credit card number'},
       {stateName: 'expiryDate', hint: 'expiry date'},
       {stateName: 'CVV', hint: 'cvv'},
       {stateName: 'billingZip', hint: 'billing zip code'},
    ],
  ];

  static formNames = [
    'form1',
    'form2',
    'form3',
  ];

  onFieldChanged = (formName, fieldName, fieldData) => {
    let forms = this.state.forms;
    forms[formName][fieldName] = fieldData;

    this.setState({ forms });
  }

  getCurrentForm() {
    return <Form formName={App.formNames[this.state.step]}
      formFields={App.formFields[this.state.step]}
      onFieldChanged={this.onFieldChanged}
    />
  }

  render() {
    return (
      <Container>
        <Paper style={{display:'flex', flexDirection: 'column', alignItems:'center', padding: '16px'}}>
          {
            this.getCurrentForm()
          }

          <br/>

          <FormStepper step={this.state.step}/>
          <PaginationButtons/>
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
`

export default App;
