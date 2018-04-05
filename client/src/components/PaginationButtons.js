import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class PaginationButtons extends Component {
  static propTypes = {
    onBackClick: PropTypes.func,
    onForwardClick: PropTypes.func,
    canGoBackward: PropTypes.bool,
    canGoForward: PropTypes.bool,
    onLastEntry: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <FlatButton label='Back'
          disabled={!this.props.canGoBackward}
          onClick={this.props.onBackClick}
        />
        <RaisedButton label={this.props.onLastEntry ? 'Finish' : 'Next'}
          primary={true}
          disabled={!this.props.canGoForward}
          onClick={this.props.onForwardClick}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;



export default PaginationButtons;