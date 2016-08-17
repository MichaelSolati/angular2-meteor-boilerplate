# angular2-meteor-boilerplate V0.0.1
This boilerplate is here to give you a simple starting point for your Angular2-Meteor projects.

```sh
# Assuming Meteor and Typescript is already installed
git clone https://github.com/MichaelSolati/angular2-meteor-boilerplate.git
cd angular2-meteor-boilerplate
npm install
npm start
```

## Folder Structure
    .
    ├── client                                        # Client files
    │   ├── index.html                                # First loaded view pulling from imports
    │   └── app.module.ts                             # Imports all required files - Bootstrap Angular2 app
    ├── imports                                       # A client/server folder
    │   └── components                                #
    │      ├── app                                    #
    │      │  ├── app.component.html                  # App component HTML
    │      │  ├── app.component.ts                    # App component
    │      │  └── app.routes.ts                       # Defines all routes for app
    │      └── home                                   #
    │         ├── index                               # App component HTML
    │         │  ├── index.component.html             # Index page component HTML
    │         │  ├── index.component.ts               # Index page component
    │         ├── app.component.html                  # App component HTML
    │         ├── app.component.ts                    # App component
    │         └── app.routes.ts                       # Defines all routes for app
    ├── private                                       # Assets only available to the Server
    │   └── docs                                      # YuiDoc for project
    ├── typings                                       #
    └── package.json                                  # node dependencies
    ├── README.md                                     # You are here
    ├── tsconfig.json                                 # Basic configurations to run an Angular 2.0 Meteor app
    └── typings.json                                  #
    └── yuidoc.json                                   # Settings for YuiDoc generation

## Yuidoc (Documentation)
All documentation is available in the `./private/docs` folder as created by [Yuidoc](http://yui.github.io/yuidoc/).

In order to install and run Yuidoc to generate new updates docs install Yuidoc on your computer with `npm -g install yuidocjs`. There is also a npm run script that will generate docs with the preferred settings called `npm run documentation`.

## Learn More
- [Angular2-Meteor](https://www.angular-meteor.com/angular2)
- [Angular 2](https://angular.io/)
- [Meteor](https://www.meteor.com/)
