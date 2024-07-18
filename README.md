# SecureworksProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Configuring the project

Once you have checked out to this project branch, please run the below command to install the dependencies. I am putting the dependency flag keeping in mind the various versions of Angular CLI we all might be having in our systems.

```ts
npm install --legacy-peer-deps
```

The above command should install all the dependencies.

## Development server

Run `ng serve` or `ng serve --open` or `ng s -o` for a dev server. If you run the command with the '--o' flag, a browser tab will open with the app loaded, else navigate to `http://localhost:6001/`. The application will automatically reload if you change any of the source files.

## GitHub Token

As soon as you move to the 'Grid Data' or 'Chart Data' routes, the app will make a call to GitHub GraphQL endpoint to fetch the repository data. In this regard, GitHub endpoint expects an authorization token to be in the header of the request.

You can get your GitHub access token from [here](https://github.com/settings/apps). Once you copy this token, please go to 'LocalStorage' of your browser and add a key-value pair there like this:

```js
token: ${your-token}
```

This will provide the app the required access token and your call will go through.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
