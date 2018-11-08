import {IConfiguration} from './Configuration';

export enum Status {
  LOOSE_SCREWS = 'loose screws',
  ON_FIRE = 'on fire',
  RUSTY = 'rusty',
  PAINT_SCRATCHED = 'paint scratched'
}

export interface IRobot {
  id: number;
  name: string;
  configuration: IConfiguration;
  statuses: Status[];
}
export class Robot implements IRobot {
  public id: number;
  public name: string;
  public configuration: IConfiguration;
  public statuses: Status[]

  public constructor(id: number, name: string, configuration: IConfiguration, statuses: Status[]) {
    this.id = id;
    this.name = name;
    this.configuration = configuration;
    this.statuses = statuses;
  }
}