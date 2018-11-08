export interface IConfiguration {
  hasSentience: boolean;
  hasWheels: boolean;
  hasTracks: boolean;
  numberOfRotors: number;
  colour: string;
}

export class Configuration implements IConfiguration {
  public hasSentience: boolean;
  public hasWheels: boolean;
  public hasTracks: boolean;
  public numberOfRotors: number;
  public colour: string;

  public constructor(hasSentience: boolean, hasWheels: boolean, hasTracks: boolean, numberOfRobots: number, colour: string) {
    this.hasSentience = hasSentience;
    this.hasWheels = hasWheels;
    this.hasTracks = hasTracks;
    this.numberOfRotors = numberOfRobots;
    this.colour = colour;
  }
}
