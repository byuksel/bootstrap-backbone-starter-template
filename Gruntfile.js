'use strict';

module.exports = function(grunt) {
  // we require path module to correctly concat paths
  var path = require('path');

  // measures the time each task takes
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),  // Parse package.json info
    projectparams: {   // These are the parameters for our project
      // README parameters
      readme_md_template: './README.md.template',
      readme_md_text_file: './README.md',
      readme_md_html_file: './README.md.html',
      // Directories that already exist
      src_dir: './src/',
      docs_dir: './docs/',
      dist_dir: './dist/',
      js_dir: './js',
      css_dir: './css',
      fonts_dir: './fonts',
      // Final file
      banner_for_production: '/*! <%= pkg.name %>.<%= pkg.version %>.<%= grunt.template.today("h:MM:ss yyyy-mm-dd") %> */\n'
    },
    clean: {
      external: [ path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'backbone-min.js'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'backbone-min.map'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'bootstrap.min.js'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'jquery.min.js') ,
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'jquery.min.map') ,
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'underscore-min.js') ,
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'underscore-min.map') ,
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'ie-emulation-modes-warning.js'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'ie8-responsive-file-warning.js'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.js_dir %>', 'ie10-viewport-bug-workaround.js'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.css_dir %>', 'ie10-viewport-bug-workaround.css'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.css_dir %>', 'bootstrap.min.css'),
                  path.join('<%= projectparams.dist_dir %>','<%= projectparams.css_dir %>', 'bootstrap.min.css.map'),
                  path.join('<%= projectparams.dist_dir %>', '<%= projectparams.fonts_dir %>', '/glyphicons-halflings-*')
                ],
      internal : [ path.join('<%= projectparams.dist_dir %>', 'index.html'),
                   path.join('<%= projectparams.dist_dir %>', 'favicon.ico'),
                   path.join('<%= projectparams.dist_dir %>', '*.js') ]
    },
    copy: {
      main: {
        files: [
          { src: [ path.join('<%= projectparams.src_dir %>', '**/*.js'),
                   path.join('<%= projectparams.src_dir %>', '**/*.css'),
                   path.join('<%= projectparams.src_dir %>', '/favicon.ico') ],
            dest: '<%= projectparams.dist_dir %>',
            flatten: true,
            expand: true
          }, {
            src: [ './node_modules/backbone/backbone-min.js',
                   './node_modules/backbone/backbone-min.map',
                   './node_modules/bootstrap/dist/js/bootstrap.min.js',
                   './node_modules/jquery/dist/jquery.min.js',
                   './node_modules/jquery/dist/jquery.min.map',
                   './node_modules/underscore/underscore-min.js',
                   './node_modules/underscore/underscore-min.map',
                   './assets/js/ie10-viewport-bug-workaround.js' ,
                   './assets/js/ie-emulation-modes-warning.js',
                   './assets/js/ie8-responsive-file-warning.js'],
            dest: path.join('<%= projectparams.dist_dir %>', '<%= projectparams.js_dir%>/'),
            flatten: true,
            expand: true }, {
              src: [ './node_modules/bootstrap/dist/css/bootstrap.min.css',
                     './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
                     './assets/css/ie10-viewport-bug-workaround.css' ],
              dest:  path.join('<%= projectparams.dist_dir %>','<%= projectparams.css_dir %>'),
              flatten: true,
              expand: true },
           { src:'./node_modules/bootstrap/dist/fonts/*',
            dest: path.join('<%= projectparams.dist_dir %>', './fonts/'),
            expand:true },
        ]
      }
    },
    jscs: {
      src : [
        path.join('<%= projectparams.src_dir %>', '/**/*.js'),
      ],
      options: {
        config: ".jscsrc",
        verbose: true // If you need output with rule names http://jscs.info/overview.html#verbose
      }
    },
    // jshint all the src files.
    jshint: {
      options: {
	eqeqeq: true,
	trailing: true
      },
      target: {
	src : [
          path.join('<%= projectparams.src_dir %>', '/**/*.js'),
        ]
      }
    },
    markdown: {
      all: {
        src: '<%= projectparams.readme_md_text_file %>',
        dest: '<%= projectparams.readme_md_html_file %>'
      }
    },
    replace: {
      // Replace distribution related variables to produce README.md
      dist: {
        options: {
          patterns: [
            {
              json: {
                'backbone.min.js': path.join('<%= projectparams.js_dir %>', 'backbone-min.js'),
                'jquery.min.js': path.join('<%= projectparams.js_dir %>', 'jquery.min.js'),
                'underscore.min.js': path.join('<%= projectparams.js_dir %>', 'underscore-min.js'),
                'bootstrap.min.js': path.join('<%= projectparams.js_dir %>', 'bootstrap.min.js'),
                'bootstrap.min.css': path.join('<%= projectparams.css_dir %>', 'bootstrap.min.css'),
                'author': '<%= pkg.author.name %>',
                'description': '<%= pkg.description %>',
                'name': '<%= pkg.name %>',
                'ie10-viewport-bug-workaround.js': path.join('<%= projectparams.js_dir %>', 'ie10-viewport-bug-workaround.js'),
                'ie10-viewport-bug-workaround.css': path.join('<%= projectparams.css_dir %>', 'ie10-viewport-bug-workaround.css'),
                'ie-emulation-modes-warning.js': path.join('<%= projectparams.js_dir %>', 'ie-emulation-modes-warning.js'),
                'ie8-responsive-file-warning.js': path.join('<%= projectparams.js_dir %>', 'ie8-responsive-file-warning.js')
              }
            }
          ]
        },
        files: [{
          src: ['<%= projectparams.src_dir %>/index.html.template'],
          dest: '<%= projectparams.dist_dir %>/index.html'
        }]
      }
    },
    watch: {
      scripts: {
        files: [ path.join('<%= projectparams.src_dir %>', '/**/*.css'),
                 path.join('<%= projectparams.src_dir %>', '/**/*.js'),
                 path.join('<%= projectparams.src_dir %>', '/**/*.html'),
                 path.join('<%= projectparams.src_dir %>', '/**/*.html.template')
               ],
        tasks: ['default']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task
  grunt.registerTask('default', ['clean', 'jshint', 'jscs', 'copy', 'replace']);
};
