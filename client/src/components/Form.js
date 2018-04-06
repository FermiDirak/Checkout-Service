import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

class Form extends Component {
  static propTypes = {
    onFieldChanged: PropTypes.func,
    formFields: PropTypes.array,
  };

  onTextChanged = (field, value) => {
    console.log(field, value);
  }

  render() {
    let style = {marginLeft: '20px'};
    console.log(this.props.formFields);

    return (
      <div style={{width: '300px'}}>
        {
          this.props.formFields.map((field, i) => {
            return (
              <div key={i}>
                <TextField hintText={field.hint}
                  value={field.default}
                  underlineShow={false}
                  onChange={(e) => {
                    this.props.onFieldChanged(
                      field.stateName,
                      e.target.value
                    )
                  }}
                  type={field.sensitive ? 'password' : undefined}
                />
                <Divider style={{margin: '6px', height: '2px'}}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Form;