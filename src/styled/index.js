import { createGlobalStyle } from 'styled-components';
import Reset from './Reset';
import Unit from './units';
import Layout from './layout';
import External from './external';

const Index = createGlobalStyle`
  ${Reset}
  ${Layout}
  ${Unit}
  ${External}
`;

export default Index;
