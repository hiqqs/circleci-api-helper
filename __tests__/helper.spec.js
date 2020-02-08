const helper = require('../utils/helpers')
const fs = require('fs-extra')

test('Verify the default workflowName', () => {
    const read = fs.readFileSync("./utils/workflowName.js", "utf-8")
    expect(read).toBe('default-flow')
});

test('Verify setting a new workflow', () => {
    const set = 'workflow2'
    fs.writeFileSync('./utils/workflowName.js', set)
    const read = fs.readFileSync("./utils/workflowName.js", "utf-8")
    expect(read).toBe('workflow2')
    fs.writeFileSync('./utils/workflowName.js', 'default-flow')
});