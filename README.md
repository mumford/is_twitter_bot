# Invisible Sun Twitter Bot

The Invisible Sun Twitter Bot that is running my lead up campaign messages.

## TDD with mocha and Chai

In order to validate the functionality of the code, I've been working with the [mocha](https://mochajs.org/) test framework, and the [Chai Assertion Library](http://chaijs.com/).

### Installing mocha and Chai

Mocha should be installed globally so it can be invoked from the termina.

`npm install -g mocha`

Chai is included in the package.json for the project, and will be installed when `npm install` is executed.

### Running unit tests

Unit tests for the project can be run with the following command. This will run the tests found in the `tests` directory. The `--watch` parameter will run the tests and will rerun them whenever files are changed in the repository.

`mocha tests/ --recursive`

## Gitflow experimentation

The workflow that is being used is inspired by [Vincent Driessen's branching model](http://nvie.com/posts/a-successful-git-branching-model/).