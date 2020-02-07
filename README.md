# circleci-api-helper
Simplify and help people use the circleci api within a node.js application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### Files you can generate in CI helper uses for all requests tied to circleci's open api:
```/utils/branch.js
/utils/circleToken.js
/utils/projectSlug.js
/utils/workflowName.js
/utils/workflowID.js
```
#### Trigger workflow (requires circleToken, & workflowName)
`yarn runWorkflow`
