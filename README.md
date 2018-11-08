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

## Technologies / Techniques used
- React and Redux
- Redux Promise used for REST API calls. This was chosen as it was familar and simple to implement. However include Thunk or transitioning to Saga would be helpful (see Future Work)
- Semantic UI React components used for UI components. This expedited interface development well, since no custom designs needed to be followed.
- Styled Components for CSS. This technology is a simple way to incorporate manage CSS alongside component code. It avoids the unmanageability of inline CSS and the separation of CSS files.
- Test Driven Development. In almost all cases, tests were written before code. For logic as well as component code.
- No over engineering at first. Functionality was developed in a simple way, and then refactored as needed. For example, instead of guessing the composition of a component, a single component was made, and then it was broken down as it got too large.
- Jest is used for unit testing. Enzyme is used for testing the correct rendering of components.

## Future Work
A few notes for the reviewer of this code on the future work intended for this codebase, given more time:
- The QAPage component has gotten quite large, this needs to be refactored into smaller components. At least separate HTML into a stateless component.
- The use of the Robot interface and class was introduced in the recycle service. Refactor the rest of the codebase and tests to include this for better compile time validation.
- Due to limitations of the mock API, the exact interface to the API has been tweaked. Namely, the extinguish endpoints are called with a GET, and the recycle endpoint's response is not suitable. Instead, the actions `meta` field was used instead.
- The cascading actions that have been introduced in the QA process could be much better managed with middleware such as Thunk or Saga.
- Test coverage can be improved. Especially for Passed QA list and redux connect functionality.
- The rest of the functionality of the project.
- A functional configuration of storybook (problems came up using Typescript here).
