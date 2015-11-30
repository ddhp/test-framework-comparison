# Test Framework Comparison
this repo demostrate difference between `jasmine` and `mocha + chai + sinon`

#### NOTICE
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

## If you want something quick
following are some conclusion from my comparison
- jasmine spy method works as sinon.stub, and sinon.spy invokes spied function  
like jasmine.spy.and.callThrough
- sinon has **mock** feature, provide a different way of statement to assert  
(in my point of view, by far I don't find this useful, even worse it might confuse developer who read source code of test cases)
- chai has [should](http://chaijs.com/guide/styles/#differences) syntax along with 'expect'.
- with should applied, chai-as-promised can be exploited, which makes statement much clear while testing on promise
