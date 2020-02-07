# circleci-api-helper
Simplify and help people use the CircleCI API (v2) using node.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### Files in CI or local that the helper uses for requests to the [CircelCI API (v2)](https://circleci.com/docs/api/v2/)
```/utils/branch.js
/utils/circleToken.js
/utils/projectSlug.js
/utils/workflowName.js
/utils/workflowID.js
```
#### Trigger workflow (requires circleToken, & workflowName)
`yarn runWorkflow`
