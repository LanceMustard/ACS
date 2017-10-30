import styled, {css} from 'styled-components';


const Style = {
  LightColor: '#9ddae1',
  MediumColor: '#41B7C4',
  DarkColor: '#0B3259',
  LightBackgroundColor: '#ebf8f9',
  DefaultFont: 'raleway, sans-serif',
  MaxContentWidth: '800px'
};

const Wrapper = styled.div`
  
`;

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between; 
  padding: 10px;
  margin: 10px 20px 10px 10px;
  border-bottom: 1px solid ${Style.MediumColor};
`;

const Header = styled.h1`
  color: ${Style.DarkColor};
  Font Family: ${Style.DefaultFont};
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
`;

const LargeHeader = styled.h1`
  color: #0B3259;
  Font Family: ${Style.DefaultFont};
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 700;
  max-width: ${Style.MaxContentWidth};
`;

const Link = styled.a`
  color: 
  Font Family: ${Style.DefaultFont};
  padding: 0 10px 0 10px;

  color: ${
    (props) => 
      props.active === 'true' ? Style.MediumColor:
      Style.DarkColor
  };

  :link, :visited, :hover, :active {
    text-decoration: none;
  }

  :hover {
    color: ${Style.LightColor};
  }

`;

const Info = styled.label`
  color: ${Style.DarkColor};
  Font Family: ${Style.DefaultFont};
  padding: 0 10px 0 10px;
`;

const Paragraph = styled.p`
  color: ${Style.DarkColor};
  Font Family: ${Style.DefaultFont};
  padding: 20px;
  max-width: ${Style.MaxContentWidth};
  text-align: justified;
`;

export default Style;
export { Wrapper, PageHeader, LargeHeader, Header, Link, Info, Paragraph }