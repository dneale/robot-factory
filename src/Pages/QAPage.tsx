import * as React from 'react';
import { connect } from 'react-redux';
import {Container} from 'semantic-ui-react';
import ProcessStep from '../components/ProcessStep/ProcessStep';
import { fetchRobots, extinguishRobot, recycleRobots } from '../actions/actions';
import * as recycleService from '../services/recycleService';

interface IQAPageInterface {
  fetchRobots: () => any;
  extinguishRobot: (id: number) => any;
  recycleRobots: (ids: number[]) => any;
  recycledRobots: number[];
  robots: any[];
  extinguishedRobots: any[];
  recycleService: any
}

export class QAPageComponent extends React.Component<IQAPageInterface, {}> {
  public static defaultProps: Partial<IQAPageInterface> = {
    recycleService
  };
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

  public recycleRobots() {
    this.props.recycleRobots(this.props.recycleService.getFaultyRobots(this.props.robots));
  }

  public componentDidMount() {
    this.props.fetchRobots()
      .then(() => {
        return this.extinguishRobots()
      })
      .then(() => {
        this.recycleRobots();
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
        {this.props.recycledRobots.length > 0 &&
          <ProcessStep>{`${this.props.recycledRobots.length} robots were recycled`}</ProcessStep>
        }
      </Container>
    )
  }
}

const mapDispatchToProps = {
  fetchRobots,
  extinguishRobot,
  recycleRobots,
}

const mapStateToProps = (state: any) => ({
  robots: state.robots.data,
  extinguishedRobots: state.robots.extinguished,
  recycledRobots: state.robots.recycled
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QAPageComponent);