#TIY Starter Kit

Lightweight scaffolding and build tools to quickly and easily develop a web application. 

  - transpiles scss into css
  - transpiles es6 and jsx into es5
  - concatenates all required/imported modules together into one minified file
  - runs a simple express server that is deployable on heroku
  
##Getting started

  - clone this repo with `git clone git@github.com:magentanova/tiy-starter-kit.git THE-LOCAL-FOLDER-YOU-WANT-TO-CREATE`
  - `cd` into the local folder
  - disconnect from my remote repo and point to your own (see [Publishing](#publishing))
  - `npm install`
  - `npm run go`
  - that's it! visit [http://localhost:3000](http://localhost:3000) to make sure it's working
  
##Workflow
  
  - you'll *only* write code in the files in the `src/` folder
  - every time you save in that folder, your code will be read and transpiled into the `dist/` folder. only files in `dist/` will be served up to the browser.
  - view and test your app at [http://localhost:3000](http://localhost:3000)
  
##Publishing

  - disconnect your local repo from this one with `git remote remove origin`
  - `hub create YOUR-APP-NAME` -- this will simultaneously (1) create you a remote repo with the given name and (2) create a local reference connecting the directory you're in to the remote you just created
  - add, commit and push per usual

##Deploying 

The easiest thing to do is deploy to heroku. Once you have an account and you've installed the heroku command line tools, simply run: 
 
  - `heroku create YOUR-APP-NAME`
  - `git push heroku master`

Have fun!
