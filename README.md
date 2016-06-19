#TIY Starter Kit

Lightweight scaffolding and build tools to quickly and easily develop a web application. 

  - transpiles scss into css
  - transpiles es6 and jsx into es5
  - concatenates all required/imported modules together into one minified file
  - runs a simple express server that is deployable on heroku
  
##Getting started

  - clone this repo with `git clone git@github.com:magentanova/tiy-starter-kit.git THE-LOCAL-FOLDER-YOU-WANT-TO-CREATE`
  - change your remote so that it points to your remote repo, not mine (see [Publishing](##Publishing))
  - `cd` into the local folder
  - `npm install`
  - `npm run go`
  - that's it! visit [](http://localhost:3000) to make sure it's working
  
##Workflow
  
  - you'll *only* write code in the files in the `src/` folder
  - every time you save in that folder, your code will be read and transpiled into the `dist/` folder 
  - view and test your app at localhost:3000
  
##Publishing
