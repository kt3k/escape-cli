const { describe, it } = require('kocha')
const { execSync } = require('child_process')
const assert = require('assert')

describe('escape-cli', () => {
  it('escapes the stdin', () => {
    const output = execSync('node main.js', { input: 'ABC DEF', encoding: 'UTF-8' })
    assert.strictEqual(output, 'ABC%20DEF')
  })
})
