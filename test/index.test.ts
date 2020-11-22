import { expect, test } from '@oclif/test'

import cmd = require('../src')

describe('djdl', () => {
  test
    .stdout()
    .do(() => cmd.run([]))
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .do(() => cmd.run(['--name', 'github']))
    .it('runs hello --name github', ctx => {
      expect(ctx.stdout).to.contain('hello github')
    })
})
