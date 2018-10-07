// FILESYSTEM
const { readdirSync } = require('fs')

const current_dir = process.cwd()

const files = readdirSync(current_dir)

const [ bin, file, ...args ] = process.argv

const flags = args
  ? args
    .filter(arg => arg.startsWith('--'))
    .map(flag => flag.replace('--', ''))
  : false

const target = args 
  ? args
    .filter(arg => !arg.startsWith('--'))
    .join(' ') 
  : false

module.exports = { current_dir, files, target, flags }