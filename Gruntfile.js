module.exports = function (grunt) {

  var fs = require('fs'),

  templates = {
    name: '<%= pkg.name %>-v<%= pkg.version %>',
    latest: '<%= pkg.name %>',
    bannerContent: '/*! <%= pkg.name %> v<%= pkg.version %> | ' + 
                    '(c) <%= pkg.author %> | ' +
                    'License: <%= pkg.license %> */'
  },
  
  paths = {

    src: 'src',
    build: 'build',
    dist: 'dist',
    docs: 'docs',

    devRelease: 'dist/' + templates.name + '.js',
    minRelease: 'dist/' + templates.name + '.min.js',
    sourceMapMin: 'dist/source-map-' + templates.name + '.min.js.map',

    lDevRelease: 'dist/' + templates.latest + '.js',
    lMinRelease: 'dist/' + templates.latest + '.min.js'
  },

  buildfunctions = [],
  buildops = JSON.parse(fs.readFileSync('dist/build.json')),

  read = function( fileName ) {
    return grunt.file.read( fileName );
  },

  wrapper = read( paths.src + "/hm.js" ).split( /[\x20\t]*\/\/ @CODE\r*\n(?:[\x20\t]*\/\/[^\n]+\n)*/ );  

  for (cat in buildops.functions) {
    buildops.functions[cat].forEach(function(fun){
      buildfunctions.push(paths.build + '/modules/' + cat + '/' + fun + '.js');
    })
  }

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {

      build: {

        cwd: paths.src,
        src: '**',
        dest: paths.build,
        expand: true
      },

      development: {
        src: paths.devRelease,
        dest: paths.lDevRelease
      },

      minified: {
        src: paths.minRelease,
        dest: paths.lMinRelease
      }
    },

    clean: {

      befbuild: {

        src: [ paths.build ]
      },

      afbuild: {

        src: [ paths.build + '/' ]
      },

      dist: {

        src: [ paths.dist + '/*.js', paths.dist + '/*.map' ]
      },

      docs: {

        src: [ paths.docs ]
      }
    },

    concat: {

      build: {
        
        options: {

          banner: templates.bannerContent + wrapper[0],
          footer: wrapper[1]
        },
        src: buildfunctions,
        dest: paths.devRelease
      }
    },

    browserify: {
      dist: {
        src: 'src/hm.js',
        dest: paths.devRelease
      }
    },

    jshint: {

      options: {
        trailing: true
      },

      target: {
        src: ['src/**/*.js']
      }
    },

    uglify: {
      options: {
        banner: templates.bannerContent,
        sourceMap: true,
        sourceMapName: paths.sourceMapMin
      },

      build: {
        src: [paths.devRelease],
        dest: paths.minRelease
      }
    },

    documentation: {
        default: {
            files: [{
                "src": paths.devRelease
            }],
            options: {
                destination: "docs",
                name: "HM Javascript Library"
            }
        },
    }
  });

  var tasks = {scope: ['devDependencies']};
  require('load-grunt-tasks')(grunt, tasks);

  grunt.registerTask(
    'build-test', 
    [ 
      'jshint',
      'clean:befbuild',
      'clean:dist',
      'copy:build',
      'browserify',
      'uglify',
      'copy:development',
      'copy:minified',
      'clean:afbuild'
    ]
  );

  grunt.registerTask(
    'build', 
    [ 
      'jshint',
      'clean:befbuild',
      'clean:dist',
      'copy:build',
      'wrap:functionsdefs',
      'concat:build',
      'uglify',
      'copy:development',
      'copy:minified',
      'clean:afbuild'
    ]
  );

  grunt.registerTask(
    'devclean', 
    [ 
      'clean:afbuild',
      'clean:dist'
    ]
  );

  grunt.registerTask(
    'default', 
    'build'
  );

  grunt.registerTask(
    'builddocs', 
    [
      'clean:docs',
      'documentation:default'
    ]
  );

}