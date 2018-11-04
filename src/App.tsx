import * as React from 'react';
import * as Router from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import LandingPage from './Pages/LandingPage';

const Heading = styled.div`
  margin: 2em;
`
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Heading>
          <Container text={true}>
            <Header as='h1'>Robot Factory - QA and Shipping</Header>
          </Container>
        </Heading>

        <Router.Route exact={true} path="/" component={LandingPage} />
      </div>
    );
  }
}


export default App;
