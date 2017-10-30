import React, { Component } from 'react';
import styled from 'styled-components';
import { LargeHeader, Paragraph } from './StyledComponents';
import { LargeArticlePreview } from './StyledArticles';
import Image from './../resources/Planning.jpg';

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SectionRight = styled.div`
  text-align: right;
  align-self: right;
  height: 100%;

  > img {
   width: 600px; height: 100%;
  }
`;

class Introduction extends Component {
  render() {
    return (
      <LargeArticlePreview>
        <SectionLeft>
          <LargeHeader>Business start-up coaching and advice</LargeHeader>
          <Paragraph>
            Welcome to my website. Here you will find all sorts of information about my work as a Business Coach. I provide all the tools, guidance, and support my clients need in order to succeed in the competitive marketplace. Take a look around and explore the various services I offer, some of the clients that I’ve partnered with, and some examples of the kind of work I do.
          </Paragraph>
        </SectionLeft>
        <SectionRight>
          <img src={Image} />
        </SectionRight>
      </LargeArticlePreview>
    );
  }
}

export default Introduction;