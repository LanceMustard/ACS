import React, { Component } from 'react';
import { PageHeader, Header, Link, Info } from './StyledComponents';
import Facebook from './../resources/fb.png';
import Twitter from './../resources/tw.png';
import LinkedIn from './../resources/in.png';

class SiteHeader extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <div>
            <Link active="true" href="">Home</Link>
            <Link href="">Blog</Link>
          </div>
          <div>
            <Info>example@email.com</Info>
            <Info>+6199991111</Info>
            <Link><img src={Facebook} /></Link>
            <Link><img src={Twitter} /></Link>
            <Link><img src={LinkedIn} /></Link>
          </div>
        </PageHeader>
        <Header>ACS</Header>
      </div>
    );
  }
}

export default SiteHeader;
