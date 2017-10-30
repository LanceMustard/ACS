import styled, {css} from 'styled-components';
import Style, { Header, Paragraph } from './StyledComponents';

const LargeArticlePreview = styled.div`
  background-color: ${Style.LightBackgroundColor};
  height: 600px;
  display:flex;
  justify-content: space-evenly; 
  align-items: stretch;
`;

export default Style;
export { LargeArticlePreview }