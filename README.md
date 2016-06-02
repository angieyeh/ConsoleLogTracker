# sleuthy.js
Sleuthy will help you keep track of where all your console.logs are! Add Sleuthy to your projects and it will add file names and line numbers to all your console.logs.

Sleuthy is an node module you install and run your code like you normally do!

## How-To
1. `npm install -g sleuthy` or `npm install --save-dev sleuthy`
2. `const minty = require('sleuthy');` in a file that's triggering most changes in your app
    (e.g. server.js would be a good place to require in Sleuthy)
3.  `sleuthy.track(//path to directory)` the path must be an absolute path to a directory
    (e.g. sleuthy.track(__dirname))

Sleuthy analyzes all directories and its as long as they aren't listed in your gitignore file.
It will only search for console.logs in files that end in '.js' or '.jsx'.
Requires users to provide a directory to sleuthy.track().
Currently it will only ignore directories from gitignore, not files. So if you're gitignoring a .js file sleuthy will still analyze it.

## Roadmap
Allow users to sleuth console.logs from a single file.
Allow users to ignore files they don't want sleuthed.
