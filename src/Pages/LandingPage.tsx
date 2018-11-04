import * as React from 'react';
import {Button, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const LandingPage = () => (
  <Container text={true }>
    <Link to="/qa"><Button>Start QA</Button></Link>
  </Container>
);

export default LandingPage;
