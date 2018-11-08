import * as React from 'react';
import { connect } from 'react-redux';
import {Container, Header, List, Divider, Label} from 'semantic-ui-react';
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
  passedQA: any[]
}

export class QAPageComponent extends React.Component<IQAPageInterface, {}> {
  public static defaultProps: Partial<IQAPageInterface> = {
    recycleService
  };
  constructor(props: IQAPageInterface) {
    super(props);
  }

  public extinguishRobots() {
    return this.props.robots.reduce((acc: any[], robot) => {
      robot.statuses.map((status: string) => {
        if (status === 'on fire') {
          acc.push(this.props.extinguishRobot(robot.id));
        }
      });
      return acc;
    }, []);
  }

  public recycleRobots() {
    this.props.recycleRobots(this.props.recycleService.getFaultyRobots(this.props.robots));
  }

  public componentDidMount() {
    this.props.fetchRobots()
      .then(() => {
        Promise.all(this.extinguishRobots())
        .then(() => {
          this.recycleRobots();
        })
      });
  }

  public render() {
    return (
      <Container text={true}>
        <Header>QA Steps</Header>
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
        <Divider />
        {this.props.passedQA.length > 0 &&
          <List>
          <Header>Passed QA</Header>

          {this.props.passedQA.map(robot => {
            return (
              <List.Item key={robot.id}>
                <List.Content><Label>{robot.name}</Label></List.Content>
              </List.Item>)
          })}
          </List>
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
  recycledRobots: state.robots.recycled,
  passedQA: state.robots.passedQA
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QAPageComponent);