# ts-selenium
 A simple exercise into TypeScript, Mocha, and Selenium

### Dependencies

Run the following commands to resolve `package.json` 
```
% npm install
% npm install -g mocha
% npm install -g selenium--webdriver
% npm install -g chromedriver
% npm install -g ts-node
```

### Project configuration
```
% npm install --save-dev @types/mocha
% npm install --save-dev @types/node
% npm install --save-dev @types
% npm install --save-dev @types/selenium-webdriver
```

### Build

[TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html "TypeScript compiler options") Official Documentation

Run a compile based on a backwards look through the fs for a tsconfig.json
```
% tsc
```

Emit JS for just the test.ts with compiler defaults
```
% tsc test.ts
```

### Run 

```
ts-node "path-to-project/ts-selenium/tests/firstTest.ts"
```