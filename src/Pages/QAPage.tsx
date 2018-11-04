import * as React from 'react';
import { connect } from 'react-redux';
import {Container} from 'semantic-ui-react';
import ProcessStep from '../components/ProcessStep/ProcessStep';
import { fetchRobots } from '../actions/qaActions';

interface IQAPageInterface {
  fetchRobots: () => any;
}

export class QAPageComponent extends React.Component<IQAPageInterface, {}> {
  constructor(props: IQAPageInterface) {
      super(props);
  }

  public componentDidMount() {
    this.props.fetchRobots();
  }

  public render() {
    return (
      <Container text={true}>
        <ProcessStep>Loading Robots for QA</ProcessStep>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  fetchRobots
}

export default connect(
  null,
  mapDispatchToProps,
)(QAPageComponent);