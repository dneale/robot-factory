const DEFAULT_SEPARATOR = ['_'];
const DEFAULT_SUFFIXES = ['PENDING', 'FULFILLED', 'REJECTED'];

const promiseActionTypeNames = (actionType: string) => (
  [
    ...DEFAULT_SUFFIXES.map((suffix) => (
      actionType + DEFAULT_SEPARATOR + suffix
    )),
    actionType,
  ]

);

const arrayToDictionary = (array: string[]) => (
  Object.assign({}, ...array.map((item) => ({ [item]: item })))
);

export const promiseActionTypes = (actionType: string) => (
  arrayToDictionary(promiseActionTypeNames(actionType))
);
