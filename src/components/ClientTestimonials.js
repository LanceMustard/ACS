import React, { Component } from 'react';
import styled from 'styled-components';
import Style, { Header } from './StyledComponents';
import ClientQuote from './ClientQuote';

const Wrapper = styled.div`
  height: 380px;
  background-color: ${Style.DarkColor};
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 40px 0;
`;

const ThisHeader = Header.extend`
  color: white;
  font-weight: 400;
`;

const SubHeader = styled.h3`
  color: white;
  text-align: center;
  font-weight: 400;
`;

class ClientTestimonials extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div>
            <ThisHeader color="white">Client Testimonials</ThisHeader>
            <SubHeader>Great Feedback</SubHeader>
          </div>
        </Wrapper>
        <ClientQuote content="You helped us expand our brand to a level we never thought possible. Thank you, Allira, for believing in us and pushing us forward. We really couldn’t have done it without you." person="Quinn Davis" />
        <ClientQuote content="I’m so happy I chose to work with Allira. From the initial consultation all the way through the project’s conclusion, the service I received was impeccable and the end result really brought my vision to life." person="Jessie Brown" />
        <ClientQuote content="When I needed advice, Allira was there to guide me through every step of the decision-making process. With their help, we managed to get back on track in no time." person="Sandy Williams" />
      </div>
    );
  }
}

export default ClientTestimonials;