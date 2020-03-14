const request = require('request')
const fs = require('fs-extra')

const circleToken = fs.readFileSync("./utils/circleToken.js", "utf-8").trim()
const projectSlug = fs.readFileSync("./utils/projectSlug.js", "utf-8").trim()
const workflowID = fs.readFileSync("./utils/workflowID.js", "utf-8").trim()
const workflowName = fs.readFileSync("./utils/workflowName.js", "utf-8").trim()

// console.log('Debug CircleCI Token: ' + circleToken)
// console.log('Debug workflowID: ' + workflowID)

// const insights = {
//   url: 'https://circleci.com/api/v2/insights/gh/HqOapp/react-native/workflows?circle-token=' + circleToken,
//   headers: {
//     'User-Agent': 'request'
//   }
// };

const getLatestWorkflowIdByBranch = {
  method: 'GET',
  url: 'https://circleci.com/api/v2/insights/' + projectSlug + '/workflows/' + workflowName + '?circle-token=' + circleToken,
  headers: {
    'User-Agent': 'request',
    'Accept': 'application/json'
  }
};

// const getPipelines = {
//   url: 'https://circleci.com/api/v2/project/' + projectSlug + '/pipeline?circle-token=' + circleToken,
//   headers: {
//     'User-Agent': 'request',
//     'Accept': 'application/json'
// },
//       body: "{\n\t{ \"branch\": \"staging\" }\n}"
// };

// const triggerPipeline = {
//   method: 'POST',
//   url: 'https://circleci.com/api/v2/project/' + projectSlug + '/pipeline?circle-token=' + circleToken,
//   headers: {
//     'User-Agent': 'request',
//     'Accept': 'application/json',
//     'x-attribution-login': 'higgs testing ci api',
//     'x-attribution-actor-id': 'higgs testing ci api'
// },
//       body: "{\n\t{ \"branch\": \"staging\" }\n}"
// };

// function getInsights() {
//     request(insights, getWorkflow)
// }

const triggerWorkflow = {
  method: 'POST',
  url: 'https://circleci.com/api/v2/workflow/' + workflowID + '/rerun?circle-token=' + circleToken,
  headers: {
    'Content-Type':'application/json',
    'Accept': 'application/json',
    'x-attribution-login': 'circleci-api-helper',
    'x-attribution-actor-id': 'circleci-api-helper'
    }
}

function getLatestWFlowIdByBranch() {
    request(getLatestWorkflowIdByBranch, getWorkflowId)
}

function getWorkflowId(error, response, body) {
    // console.log('statusCode:', response && response.statusCode);
  if (!error && response.statusCode == 200) {
    const response = JSON.parse(body)
    // grabs last workflow id
    // console.log('testy:' + response.items[0].id)
    // return response.items[0].id
    const workflowID = response.items[0].id
    fs.writeFileSync('./utils/workflowID.js', workflowID)
    console.log('circleci-api-helper: [workflow id: ' + workflowID + '] generated successfully!')
  }
}

// function getWorkflowName(error, response, body) {
//     console.log('statusCode:', response && response.statusCode)
//   if (!error && response.statusCode == 200) {
//     const response = JSON.parse(body)
//     console.log(response)
//     // grabs last workflow id
//     console.log(response.items[0].name)
//     return response.items[0].name
//   }
// }

// function getLastPipeline(error, response, body) {
//     console.log('statusCode:', response && response.statusCode)
//   if (!error && response.statusCode == 200) {
//     const response = JSON.parse(body)
//     // console.log(response)
//     console.log(response.items[0].id)
//     return response.items[0].id
//   }
// }

// function jobInfo(error, response, body) {
//     console.log('statusCode:', response && response.statusCode);
//   if (!error && response.statusCode == 200) {
//     const response = JSON.parse(body);
//     console.log(response);
//     console.log(response.items[0].name);
//   }
// }

function triggerFlow(error, response, body) {
    // console.log('statusCode:', response && response.statusCode);
  if (!error && response.statusCode == 202) {
    console.log('circleci-api-helper: Trigger flow was successful!')
  }
}

function runWorkflow() {
    request(triggerWorkflow, triggerFlow)
}

// request(helper.insights, helper.getWorkflow);
// request(getPipelines, getLastPipeline);
// request(triggerWorkflow, triggerwWorkflowById);
// request(triggerPipeline, getLastPipeline);

module.exports = {
    getLatestWFlowIdByBranch,
    getWorkflowId,
    runWorkflow,
    triggerFlow
}