import React, { Component } from 'react';
import styled from 'styled-components';
import Style, { Header, Paragraph } from './StyledComponents';
import Card from './Card.js';
import Image1 from './../resources/BUSINESS-PERFORMANCE-CONSULTING.webp';
import Image2 from './../resources/CORPORATE-FINANCE-CONSULTING.webp';
import Image3 from './../resources/MARKETING-STRATEGY-ADVISING.webp';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class Services extends Component {
  render() {
    return (
      <div>
        <Header>My Services</Header>
        <Wrapper>
          <Card title='BUSINESS PERFORMANCE CONSULTING' image={Image1} />
          <Card title='CORPORATE FINANCE CONSULTING' image={Image3} />
          <Card title='MARKETING STRATEGY ADVISING' image={Image2} />
        </Wrapper>
      </div>
    );
  }
}

export default Services;