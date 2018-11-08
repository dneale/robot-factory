import {IRobot, Status } from './Robot';

const hasInvalidRotorCount = (robot: IRobot) => {
  const count = robot.configuration.numberOfRotors;
  const MIN_VALID_ROTORS = 3;
  const MAX_VALID_ROTORS = 8;

  return count < MIN_VALID_ROTORS || count > MAX_VALID_ROTORS;
};

const hasProblematicScrews = (robot: IRobot) => {
  return robot.configuration.hasSentience && robot.statuses.some(status => status === Status.LOOSE_SCREWS);
};


export const isRobotFaulty = (robot: IRobot) => {
  return (
    hasInvalidRotorCount(robot) ||
    hasProblematicScrews(robot) ||
    (robot.configuration.colour === 'blue') ||
    (robot.configuration.hasWheels && robot.configuration.hasTracks) ||
    (robot.configuration.hasWheels && robot.statuses.some(status => status === Status.RUSTY)) ||
    (robot.statuses.some(status => status === Status.ON_FIRE))

  );
};