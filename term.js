// READ/WRITE FROM TERMINAL
const { createInterface } = require('readline')

// FILES FOR COMPLETIONS
const { files, target } = require('./constants')

const tab_completer = line => {
  // AVAILABLE WORDS
  let completions = files
  let hits = completions // FILTERS MATCHING SUBSTRINGS
    .filter(comp => comp.startsWith(line))
  return [hits.length ? hits : completions, line] // COMPLETER Fn REQUIRED SYNTAX OUTPUT
}

// CREATE READLINE INSTANCE
const term = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  completer: tab_completer,
  prompt: '» '
})


module.exports = { term }