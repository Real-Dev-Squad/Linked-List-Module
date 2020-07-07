const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const bgCyan = "\x1b[46m";
const Reset = "\x1b[0m";

function beautifyLogs(msg, passed) {
  console.log(
    "[Test]",
    msg,
    passed ? fgGreen : fgRed,
    passed ? "- Passed" : "- Failed",
    Reset
  );
}

module.exports = { beautifyLogs };
