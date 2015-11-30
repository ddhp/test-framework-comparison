module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    mocha: {
      unit: {
        src: 'mocha.html', // src is html file
        options: {
          run: true, // mocha runs after reporter setup
          reporter: 'Spec'
        }
      }
    },

    jasmine: {
      unit: {
        options: {
          specs: 'jasmine.js',
          vendor: [
            'node_modules/jasmine-ajax/lib/mock-ajax.js',
            'node_modules/q/q.js'
          ]
        }
        // src: '', // bad practice, src for test is setup inside each tests
      }
    },

    mochaTest: {
      unit: {
        options: {
          report: 'spec'
        },
        src: 'mocha.js'
      }
    }
  });
};
