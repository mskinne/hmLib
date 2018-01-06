# HM Javascript Library

This is a simple DOM manipulation Javascript library with the goal of being lightweight and modular.  It was created for use on my personal projects where the structure and abstraction of a library was desired, but the page weight of larger JS DOM manipulation libraries was a sore spot.

## Broswer Support

The following browser versions are supported:

* Chrome 23+
* Firefox 21+
* Edge 12+
* Internet Explorer 9+
* Safari 6+
* Opera 15+

This list is mainly based on full support for ES5 for each browsee.  The exception is IE9 which does not have full ES5 support, but supports the features used.  Earlier versions of some browsers may work based on what ES5 features they included.

## Build

To build your own copy of the library you need to have the latest Node.js + NPM and git.

Clone a copy of the repo in git with:

```bash
git clone https://github.com/mskinne/hmLib.git
```

Enter the directory and use grunt to build the library file:

```bash
grunt build
```

The following built files will be placed in the ```dist/``` directory:

* Latest Build: ```hmlib.js```, ```hmlib-vx.x.x.js```
* Latest Build Minified: ```hmlib.min.js```, ```hmlib-v0.0.1.min.js```
* Minification Source Map: ```source-map-hm-lib-v0.0.1.min.js.map```

### Custom Builds
You can build a custom version of the library by modifying the build configuration file (```dist/build.json```) and running the regular build command (```grunt build```).  By default, the build configuration file will build a version containing all the avaliable methods.

Here is the default build.josn:

```json
{
  "functions": {

    "core": [
      "argToArr",
      "forEach",
      "map",
      "mapOne"
    ],

    "dom": [
      "addClass",
      "attr",
      "changeClass",
      "hasClass",
      "html",
      "removeClass",
      "text",
      "toggleClass"
    ],

    "handler": [
      "click",
      "focus",
      "off",
      "on"
    ]
  }
}
```

Methods are grouped by functionality which reflects the directory structure of the source.

Note that some methods are dependancies of others.  I have not gotten far enough along yet for dependencies to be automatically included during the build procecss so you will have to check if a method you want works without the dependancies.  Auto include of dependencies is in the works.

## Licence

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

## What Does HM Stand For?

This is a reference to my personal website [HokieMatt.com](https://hokiematt.com) which is also the moniker I use to identify projects I work on.
