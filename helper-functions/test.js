let { beautifyLogs } = require("./beautifyLogs");

/**
 * @param {string} testName
 * @param {Function} testingFunc
 */
function test(testName, testingFunc) {
  let testResult = testingFunc();
  beautifyLogs(testName, !!testResult);
}

module.exports = test;
