# IsentiaTechtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

Install Angular CLI using command `npm install -g @angular/cli`
Intall Dependencies using command `npm install` in the project directory

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Development server

### Front end:
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Back end:
ExpressJS server is in file server.js. use command `node server.js` to initiate the server after building frontend Angular

ExpressJS server is configured to run on port 8080 as default. Custom port can be set through setting an environment variable **PORT** as given given below

`export PORT=80`



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

For running unit test on ExpressJS use `npm run test-exprees`
