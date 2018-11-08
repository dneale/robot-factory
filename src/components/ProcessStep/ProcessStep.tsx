import * as React from 'react';
import {Segment} from 'semantic-ui-react';

const ProcessStep = (props: any) => (
  <Segment color='green'>{props.children}</Segment>
);

export default ProcessStep;
