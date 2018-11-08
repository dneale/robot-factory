# Robot Factory QA Processing

The web application component of the Robot Factory QA Processing workflow.

## Local development

Run the following to begin:
```
yarn install
yarn start
```

To run unit tests:
```
yarn test
```

## Storybook
This project makes use of storybook to maintain a component library. Run the following command to run locally:
```
yarn storybook
```

## CircleCI
CircleCI (version 2) is used for continuous integration. The web interface can be accessed here:

https://circleci.com/gh/dneale/robot-factory/


## Trello Board

A kanban board for the project can be found here:

https://trello.com/b/8x6GMCx6/robot-factory

## Future Work
A few notes for the reviewer of this code on the future work intended for this codebase, given more time:
- The QAPage component has gotten quite large, this needs to be refactored into smaller components. At least separate HTML into a stateless component.
- The use of the Robot interface and class was introduced in the recycle service. Refactor the rest of the codebase and tests to include this for better compile time validation.
- Due to limitations of the mock API, the exact interface to the API has been tweaked. Namely, the extinguish endpoints are called with a GET, and the recycle endpoint's response is not suitable. Instead, the actions `meta` field was used instead.
- The cascading actions that have been introduced in the QA process could be much better managed with middleware such as Thunk or Saga.
- Test coverage can be improved. Especially for Passed QA list and redux connect functionality.
- The rest of the functionality of the project.
- The proper connection of storybook. This tool was not straightforward to set up in Typescript.
