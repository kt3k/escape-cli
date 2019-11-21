#!/usr/bin/env node
const fs = require('fs')
process.stdout.write(escape(fs.readFileSync(0, 'UTF-8')))
