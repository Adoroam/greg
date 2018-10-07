#!/usr/bin/env node

// TERMINAL
const { term } = require('./term')

// CURRENT DIRECTORY
let { current_dir, target, flags } = require('./constants')

// EXECUTE TERMINAL CMD
const { exec } = require('child_process')

// FILE SYSTEM
const { createReadStream } = require('fs')

// PATH JOINING
const { join } = require('path')

// TERMINAL COLORS
const colors = {
  reset: '\x1b[0m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
}

term.on('line', line => {
  if (line === 'ls') {
    exec('ls', (err, sout, serr) => {
      console.log(sout)
      term.prompt()
    })
  } else {
    const regex = new RegExp(target, 'i')
    const fileStream = createReadStream(join(current_dir, line))
      .on('data', data => data
        .toString()
        .split('\n')
        .filter((line, ind) => (flags && flags.some(flag => flag === 'all'))
          ? true
          : regex.test(line))
        .map(line => line
        .replace(regex, `${colors.green}${target}${colors.reset}`))
        .forEach(line => console.log(line)))
      .on('close', () => process.exit(0))
  }
})

if (!target) {
  term.question('input target string\n', answer => {
    target = answer
    term.prompt()
  })
} else {
  term.prompt()
}
