import * as React from 'react';
import { connect } from 'react-redux';
import {Container} from 'semantic-ui-react';
import ProcessStep from '../components/ProcessStep/ProcessStep';
import { fetchRobots } from '../actions/actions';

interface IQAPageInterface {
  fetchRobots: () => any;
  robots: any[];
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
        {this.props.robots &&
          <ProcessStep>{`${this.props.robots.length} robots were loaded`}</ProcessStep>
        }
      </Container>
    )
  }
}

const mapDispatchToProps = {
  fetchRobots
}

const mapStateToProps = (state: any) => ({
  robots: state.robots.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QAPageComponent);