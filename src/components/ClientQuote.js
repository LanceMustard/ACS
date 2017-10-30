import React, { Component } from 'react';
import styled from 'styled-components';
import Style, { Header, Paragraph } from './StyledComponents';

const Wrapper = styled.div`
  text-align: center;  
  margin: 40px 0 40px 0;
  color: color: ${Style.DarkColor};
  width: 100%;

  > p {
    padding: 10px 0 0 0;
    text-align: center;
    max-width: ${Style.MaxContentWidth};
    display: block;
    margin: auto;
  }

  > i {
    padding: 10px 0 0 0;
    color: ${Style.MediumColor}
  }
`;

class ClientQuote extends Component {
  render() {
    return (
      <Wrapper>
        <i className="fa fa-3x fa-quote-left"></i>
        <p>
          "{this.props.content}""
        </p>        
        <br />
        <small>{this.props.person}</small>
      </Wrapper>
    );
  }
}

export default ClientQuote;