import React, { Component } from 'react';
import { Wrapper } from './components/StyledComponents';
import SiteHeader from './components/SiteHeader';
import Introduction from './components/Introduction';
import Services from './components/Services';
import ClientTestimonials from './components/ClientTestimonials';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <SiteHeader />
        <Introduction />
        <Services />
        <ClientTestimonials />
      </Wrapper>
    );
  }
}

export default App;
