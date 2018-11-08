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

const invalidColour = (robot: IRobot) => {
  return robot.configuration.colour === 'blue'
};

const twoModesOfTravel = (robot: IRobot) => {
  return robot.configuration.hasWheels && robot.configuration.hasTracks
}

const hasProblematicWheels = (robot: IRobot) => {
  return robot.configuration.hasWheels && robot.statuses.some(status => status === Status.RUSTY)
}

const isOnFire = (robot: IRobot) => {
  return robot.statuses.some(status => status === Status.ON_FIRE)
};

export const isRobotFaulty = (robot: IRobot) => {
  const violationList = [
    hasInvalidRotorCount,
    hasProblematicScrews,
    invalidColour,
    twoModesOfTravel,
    hasProblematicWheels,
    isOnFire,
  ] as Array<(robot: IRobot) => boolean>;

  return violationList.some(violation => violation(robot));
};

export const getFaultyRobots = (robots: IRobot[]) => {
  return robots.reduce((acc: number[], robot: IRobot) => {
    if (isRobotFaulty(robot)) {
      acc.push(robot.id);
    }
    return acc;
  }, [])
}