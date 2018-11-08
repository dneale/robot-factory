import { isRobotFaulty } from './recycleService'
import { Robot } from './Robot';
import { Configuration } from './Configuration';

const getRobot = (details: any) => {
  const config = new Configuration(
    details.configuration.hasSentience,
    details.configuration.hasWheels,
    details.configuration.hasTracks,
    details.configuration.numberOfRotors,
    details.configuration.colour)
  return new Robot(details.id, details.name, config, details.statuses)
}

const testRobot = {
  id: 1,
  name: 'Robo',
  configuration: {
    hasSentience: true,
    hasWheels: true,
    hasTracks: false,
    numberOfRotors: 3,
    colour: 'white'
  },
  statuses: ['']
}

describe('recycle service', () => {
  describe('isRobotFaulty', () => {
    describe('should be faulty if robot', () => {
      it('has too many rotors', () => {
        const robot = getRobot({
          ...testRobot,
          configuration: {
            ...testRobot.configuration,
            numberOfRotors: 9
          }
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });

      it('has too few rotors', () => {
        const robot = getRobot({
          ...testRobot,
          configuration: {
            ...testRobot.configuration,
            numberOfRotors: 2
          }
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });

      it('is blue and has at least one rotor', () => {
        const robot = getRobot({
          ...testRobot,
          configuration: {
            ...testRobot.configuration,
            numberOfRotors: 1,
            color: 'blue'
          }
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });

      it('has both wheels and tracks', () => {
        const robot = getRobot({
          ...testRobot,
          configuration: {
            ...testRobot.configuration,
            hasTracks: true
          }
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });

      it('has wheels and is rusty', () => {
        const robot = getRobot({
          ...testRobot,
          statuses: ['rusty']
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });

      it('is sentient and has loose screws', () => {
        const robot = getRobot({
          ...testRobot,
          statuses: ['loose screws']
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });

      it('is on fire', () => {
        const robot = getRobot({
          ...testRobot,
          statuses: ['on fire']
        });
        expect(isRobotFaulty(robot)).toBe(true);
      });
    });

    describe('should not be faulty if robot', () => {
      it('meets all criteria', () => {
        const robot = getRobot(testRobot);
        expect(isRobotFaulty(robot)).toBe(false);
      });

      it('has no wheels and is rusty', () => {
        const robot = getRobot({
          ...testRobot,
          configuration: {
            ...testRobot.configuration,
            hasWheels: false,
          },
          statuses: ['rusty']
        });
        expect(isRobotFaulty(robot)).toBe(false);
      });

      it('has loose screws but is not sentient', () => {
        const robot = getRobot({
          ...testRobot,
          configuration: {
            ...testRobot.configuration,
            hasSentience: false,
          },
          statuses: ['loose screws']
        });
        expect(isRobotFaulty(robot)).toBe(false);
      });
    });
  });
});