'use strict';

var test = require('tape');
var exec = require('child_process').exec;
var path = require('path');

var binPath=path.resolve('..', 'bin').replace(/\\/g, "\\\\");

function run(command, cb) {
  exec('cd ' + binPath + ' && bash -c "' + binPath + '/' + command + '"', {
    //stdio: 'inherit',
    env: process.env,
    //shell: 'bash.exe',
    encoding: 'utf8'
  }, cb);
}

test('windows flag', function (t) {
  run('cpath -w /c/mydir', function(error, stdout, stderr) {
    if(stderr) {
      t.end(stderr);
    }

    t.ok(stdout, 'output exists');
    t.equal(stdout, 'c:\\mydir', 'output is correct value');
    t.end();
  });
});