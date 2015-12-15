<img align="right" height="300" src="https://raw.githubusercontent.com/byuksel/bootstrap-backbone-starter-template/master/logo.png">

# Bootstrap Backbone Starter Template

[![npm version](https://badge.fury.io/js/bootstrap-backbone-starter-template.svg)](https://badge.fury.io/js/bootstrap-backbone-starter-template)

This repository provides scaffolding for Bootstrap Starter Template with Backbone.JS. It is
the fastest way to start with a Bootstrap project that implements Backbone.JS's Model-View-Router
model.

You also get a fully automated document creation from source code, automatic updating of your final
module/library name and version in README.md, and an html version of your README.md file.

## Quick Installation

Clone it from github:
```
git clone https://github.com/byuksel/bootstrap-backbone-starter-template.git
```

After cloning, change to the repository directory. Type `npm install` and this scaffolding will install
all the necessary dependencies.
```
npm install
```

## Quick Start

Type:
```
grunt
```
This should build your project into dist/ directory. You can type ```grunt watch``` and this will continously build your sources into dist/ directory.

In order to test your web app, you can change to dist/ directory and run a simple http server. For example:
```
python -m SimpleHTTPServer 8000
```
You can now find your webapp at *http://localhost:8000*.

## Scaffolding Explained ##

In this section, we describe what each file does in this template and how you can modify them to your needs.

### Directory Structure

Once everything is installed, you will see a project structure like below:
```
├── .editorconfig                                # EditorConfig file for unifying settings across multiple editors.
├── .flowconfig                                  # Config file for flow static type checker.
├── .gitignore                                   # Config file for git to ignore files.
├── .jscsrc                                      # Config file for jscs coding style checker.
├── Gruntfile.js                                 # File of magic. All grunt tasks are in here.
├── README.md                                    # This very file.
├── assets                                       # Directory which includes all the Bootstrap assets for edge cases.
│   ├── css
│   │   └── ie10-viewport-bug-workaround.css
│   └── js
│       ├── ie-emulation-modes-warning.js
│       ├── ie10-viewport-bug-workaround.js
│       └── ie8-responsive-file-warning.js
├── package.json                                 # NPM package.json file.
└── src                                          # Source files for your webapp.
|   ├── favicon.ico                              # favicon icon file for your webapp.
|   ├── index.html.template                      # Modified version of index.html from Bootstrap Starter Template.
|   ├── models.js                                # Backbone models.
|   ├── router.js                                # Backbone router.
|   ├── starter-template.css                     # Starter template CSS.
|   └── views.js                                 # Backbone views.
```

#### ./.editorconfig

From their website, "EditorConfig is a file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs." This file has a bunch of settings that various editors can read and adjust their behaviour accordingly. You can read more about it on [their website](http://editorconfig.org)

#### ./.flowconfig

Configuration file for flow type checker. Flow is a static type checker which is helpful in catching null dereferences and unintentional type conversions. You can read more about it on [their website](http://flowtype.org).

#### ./.jscsrc

Configuration file for JSCS coding style checks. We use a modified version of Google JS coding style and full JSDoc3 checks.

#### ./Gruntfile.js

This is where all the magic lives. Gruntfile.js describes all the tasks, and how they interact
with each other. It can run your tests, create browser version of your tests, run them in
the browser, create their coverage reports, create documentation, create your dynamically
generated README.md, and README.md.html files and create your final browserified library along
with its minimized version.

#### ./jsdoc.conf

JSDoc configuration file. You can modify this file to change the behaviour of JSDoc which is used to create
documentation from the source code.

#### ./package.json

NPM package.json file. You describe your module in this file. The values for 'name' and 'version' fromthis file are later used in producing README.md file.

#### ./src/models.js, ./src/views.js, ./src/router.js 

These three files are the BackboneJS files for our Model-View-Router schema. In the template, they control a button and a simple view to print a simple message when the button is clicked.

#### ./src/favicon.ico

Tiny icon file for your web app.

#### ./src/starter-template.css

Main CSS file.

#### ./src/index.html.template

Main index.html file for your webapp. This file is a template because *replace* task in Grunt file will replace template variables with the correct values to produce index.html file in your dist/ directory. These variables include @@name, @@author, @@description (which are read from package.json), and the locations of various JS library dependencies such as jquery, backbone, underscore, etc. 

#### ./assets/*

All the files under this directory are Bootstrap dependencies that are referenced in the original [Bootstrap Starter Template](https://getbootstrap.com/examples/starter-template/).

## Generated Files and Directories

When you run the Grunt tasks, this scaffolding generates a whole bunch of files. They are explained below.

#### ./docs/*

Generated by 'jsdoc' task. All documentation in the src files should follow jsdoc format so that
this task can produce all the documentation.

#### ./dist/*

Generated by 'replace', and 'copy'. Your full webapp is under this directory.

## ./Gruntfile.js and Tasks ##

Gruntfile.js tasks are closely coupled. Please be careful when you change them.

#### clean ####

* **clean: docs**

Deletes docs.

* **clean: external**

Deletes js, css and html files that are copied as external dependencies.

* **clean:internal**

Deletes js, css and html files created by the project itself.

#### copy

Copies files from various source directories to dist/ directory. Copies external JS libraries from node_modules directory to dist/, asset files from assets/ to dist/, and js/css/html files from src/ to dist/.

#### flow

Runs Flow static type checker.

#### jscs

Runs the code through jscs for coding style checks. This uses a modified version of Google coding style.

#### jsdoc

Creates documentation from src files using jsdoc.

#### jshint

Runs the code through jshint.

#### markdown

Creates an html version of the README.md file called README.md.html.

#### replace:dist

Replaces text patterns in index.html.template.

#### watch

Runs a continuous task which listens for changes in src/ directory and when there is a change, watch runs the 'default' Grunt task.

## Custom Tasks ##

Gruntfile.js comes with one custom and one default task.

#### default

Runs 'clean', 'jshint', 'jscs', 'flow', 'copy', 'replace' respectively.

#### docs  (custom task) 

Runs 'clean:docs', 'markdown', 'jsdoc' respectively.

## 'projectparams' section of Gruntfile.js

This section has all the parameters necessary to run the scaffolding correctly. You can change these parameters according to your project's specifics.

Description of the variables in projectparams:

* **banner_for_production:** The first line for both the browserified output file and the minimized version.
* **docs_dir:** (Generated) Directory for the docs.
* **dist_dir:** (Generated) Directory for the full fledged web app.
* **readme_md_html_file:** (Generated) README.md.html file name.
* **readme_md_text_file:** README.md file name.
* **src_dir:** Directory where source files are located.
* **js_dir:** Directory where external JS dependencies are copied into under *dist_dir*
* **css_dir:** Directory where external CSS dependencies are copied into under *dist_dir*
* **fonts_dir:** Directory where external fonts dependencies are copied into under *dist_dir*

# License

[Apache 2.0 License](LICENSE.md) - &copy; 2015 Baris Yuksel

# Bugs, Requests and Support #

For bug reports, feature requests and general questions, please feel free to email baris@onehundredyearsofcode.com.


