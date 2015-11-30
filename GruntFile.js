module.exports = function (grunt) {
  'use strict';

  // istanbul template mixin conflict with load-grunt-tasks
  // require('load-grunt-tasks')(grunt);

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
      },
      coverage: {
        src: ['script.js'],
        options: {
          specs: ['jasmine.js'],
          vendor: [
            'node_modules/jasmine-ajax/lib/mock-ajax.js',
            'node_modules/q/q.js'
            ],
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'bin/coverage/coverage.json',
            report: 'bin/coverage',
            thresholds: {
              lines: 75,
              statements: 75,
              branches: 75,
              functions: 90
            }
          }
        }
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
  
  // comment out following line if you use load-grunt-tasks
  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
