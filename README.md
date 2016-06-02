# Sleuthy.js
Sleuthy will help you keep track of where all your console.logs are! Add Sleuthy to your projects and it will add file names and line numbers to all your console.logs.

Sleuthy is an npm module you install and run your code like you normally do!

## How-To
1. `npm install -g sleuthy` or `npm install --save-dev sleuthy`
2. `const minty = require('sleuthy');` in a file that's triggering most changes in your app
    (e.g. server.js would be a good place to require in Sleuthy)
3.  sleuthy.track()
