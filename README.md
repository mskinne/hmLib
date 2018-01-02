# HM Javascript Library

This is a simple DOM manipulation Javascript library with the goal of being lightweight and modular.  It was created for use on my personal projects where the structure and abstraction of a library was desired, but the page weight of larger JS DOM manipulation libraries was a sore spot.

## Build

To build your own copy of the library you need to have the latest Node.js + NPM and git.

Clone a copy of the repo in git with:

```bash
git clone https://github.com/mskinne/hmLib.git
```

Enter the directory and use grunt:

```bash
grunt
```

The following built files will be in the ```dist/``` directory:

* Latest Build: ```hmlib.js```
* Latest Build with Version: ```hmlib-vx.x.x.js```
* Latest Build Minified: ```hmlib.min.js```
* Latest Build with Version inified: ```hmlib-v0.0.1.min.js```
* Minification Source Map: ```source-map-hm-lib-v0.0.1.min.js.map```

### Custom Builds
By default, the build configuration file (```dist/build.json```) will build a version containing all the avaliable methods.  If you want to pick and choose which methods you want in the build, just remove them from the build.json file and run grunt.

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

		"class": [

			"addClass",
			"changeClass",
			"hasClass",
			"removeClass",
			"toggleClass"

		]
		
	}
}
```

Note that some methods are dependancies of others.  I have not gotten far enough along yet for dependencies to be automatically included so you will have to check if a method you want works without the dependancies.  Auto includes of dependencies is in the works.

## Licence

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

## What Does HM Stand For?

This is a reference to my personal website [HokieMatt.com](https://hokiematt.com) which is also the moniker I use to identify projects I work on.
