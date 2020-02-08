# circleci-api-helper
Simplify and help people use the CircleCI API (v2) using node.js

[![npm version](https://badge.fury.io/js/circleci-api-helper.svg)](https://badge.fury.io/js/circleci-api-helper) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<a href="https://codeclimate.com/github/johnhiggs/circleci-api-helper/maintainability"><img src="https://api.codeclimate.com/v1/badges/5dabeb357b9abcdcf716/maintainability" /></a>
<a href="https://codeclimate.com/github/johnhiggs/circleci-api-helper/test_coverage"><img 

#### Files in CI or local that the helper uses for requests to the [CircelCI API (v2)](https://circleci.com/docs/api/v2/)
```/utils/branch.js
/utils/circleToken.js (Required)
/utils/projectSlug.js (Required)
/utils/workflowName.js (Required)
/utils/workflowID.js
```
#### Examples of these values
```branch: master
circleToken: FAKEGUID3adas23d69e532432d3x1f534852fs52
projectSlug: gh/johnhiggs/circleci-api-helper
workflowName: default-flow
```

#### Trigger workflow (requires circleToken, projectSlug, & workflowName)
`yarn runWorkflow`
