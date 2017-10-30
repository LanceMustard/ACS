import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #0B3259;
  color: white;
  margin: 0 50px 0 50px;
  max-width: 302px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;

    > h2 {
      text-align: center;
      font-size: 24px;
      font-weight: normal;
    }
  }
`;

class Card extends Component {
  render() {
    return (
      <CardWrapper className={`${this.props.className}`}>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <img src={this.props.image} />
      </CardWrapper>
    );
  }
}

export default Card;