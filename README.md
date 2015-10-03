# ionic-starter-menu
ionic starter template includes a simple food menu items

The template was integrated with:
* Karma unit test framework
* Ionic-Material
* Better gulp tasks

## Installation
```
npm install
bower install
```

## Unit test support
* Add karma to enable unit testing the angular app
* Run unit tests using ```npm test```.

## gulp tasks and watchers
* ```gulp build```: Concatenate and uglify app into one JS file. A sourcemap is included to enable easy debugging.
* ```gulp templates```: Concatenate templates into a single file that's included in the app (no requests during runtime). 
* ```gulp bump```: Better app version changing using [gulp-bump](https://github.com/stevelacy/gulp-bump)
