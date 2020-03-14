# circleci-api-helper
Node.js helper :package: for CircleCI API (v2)

[![npm version](https://badge.fury.io/js/circleci-api-helper.svg)](https://badge.fury.io/js/circleci-api-helper) 
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/johnhiggs/circleci-api-helper)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
<a href="https://codeclimate.com/github/johnhiggs/circleci-api-helper/maintainability"><img src="https://api.codeclimate.com/v1/badges/5dabeb357b9abcdcf716/maintainability" /></a>
<a href="https://codeclimate.com/github/johnhiggs/circleci-api-helper/test_coverage">
<a href="https://codeclimate.com/github/johnhiggs/circleci-api-helper/test_coverage"><img src="https://api.codeclimate.com/v1/badges/5dabeb357b9abcdcf716/test_coverage" /></a>
[![Downloads](https://img.shields.io/npm/dt/circleci-api-helper.svg)](https://www.npmjs.com/package/circleci-api-helper.svg)
[![License: MIT](https://img.shields.io/github/license/johnhiggs/circleci-api-helper)](https://opensource.org/licenses/MIT)

#### Install with yarn
``` yarn add circleci-api-helper```

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

#### Trigger workflow (auto generates latest workflow ID based off of required values (requires circleToken, projectSlug, & workflowName)
`yarn runWorkflow`

#### Simply rerun an existing workflow (set a value to /utils/workflowID.js)
`yarn runSpecificWorkflow`
