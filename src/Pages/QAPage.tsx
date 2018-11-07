import * as React from 'react';
import { connect } from 'react-redux';
import {Container} from 'semantic-ui-react';
import ProcessStep from '../components/ProcessStep/ProcessStep';
import { fetchRobots, extinguishRobot } from '../actions/actions';

interface IQAPageInterface {
  fetchRobots: () => any;
  extinguishRobot: (id: number) => any;
  robots: any[];
  extinguishedRobots: any[];
}

export class QAPageComponent extends React.Component<IQAPageInterface, {}> {
  constructor(props: IQAPageInterface) {
    super(props);
  }

  public extinguishRobots() {
    this.props.robots.map((robot) => {
      robot.statuses.map((status: string) => {
        if (status === 'on fire') {
          this.props.extinguishRobot(robot.id);
        }
      });
    })
  }

  public componentDidMount() {
    this.props.fetchRobots()
      .then(() => {
        this.extinguishRobots();
      });
  }

  public render() {
    return (
      <Container text={true}>
        <ProcessStep>Loading Robots for QA</ProcessStep>
        {this.props.robots.length > 0 &&
          <ProcessStep>{`${this.props.robots.length} robots were loaded`}</ProcessStep>
        }
        {this.props.extinguishedRobots.length > 0 &&
          <ProcessStep>{`${this.props.extinguishedRobots.length} robots were extinguished`}</ProcessStep>
        }
      </Container>
    )
  }
}

const mapDispatchToProps = {
  fetchRobots,
  extinguishRobot,
}

const mapStateToProps = (state: any) => ({
  robots: state.robots.data,
  extinguishedRobots: state.robots.extinguished
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QAPageComponent);