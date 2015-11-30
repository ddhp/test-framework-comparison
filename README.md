# Test Framework Comparison
this repo demostrate difference between 
`jasmine` and `mocha + chai + sinon`

there is no 'source' file is this demo
all source are included in 'spec' files (i.e jasmine.js and mocha.js)
in real use case, just make sure source file is required before specs

## Checking on browser
- Run `npm install`
- open `jasmine.html` and `mocha.html` in browser

## Checking with grunt
- Run `npm install`
- execute `grunt jasmine` and `grunt mocha` 
- `grunt mochaTest` to see server-side result, runs on nodejs instead of phantomjs
