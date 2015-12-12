# Bootstrap Backbone Starter Template

[![npm version](https://badge.fury.io/js/node-module-with-unittests-template.svg)](https://badge.fury.io/js/node-module-with-unittests-template)

This repository provides scaffolding for Bootstrap Starter Template with Backbone.JS added. It is
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
