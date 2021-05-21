# webdriverioWithMochaChaiStandaloneAllure
Getting Started
Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our Gitter Channel or you can hit me on Twitter.

INFO
These are the docs for the latest version (>=7.x) of WebdriverIO. If you are still using an older version, please visit the old documentation websites!

Installation#
Use npm or Yarn to install the WebdriverIO test runner in your Node.js project. See system requirements.

npm
Yarn
npm install @wdio/cli
This single command downloads the WebdriverIO CLI tool that helps you set up WebdriverIO in your project.

Set Up#
Once you've installed the CLI you can bootstrap a Hello World test suite into your project by running:

npx wdio config
Set Up

This will prompt a set questions that guides you through the setup. You can pass a --yes parameter to pick a default set up which will use Mocha with Chrome using the Page Object pattern.

Run Test#
You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:

npx wdio run ./wdio.conf.js
If you like to run specific test files you can add a --spec parameter:

npx wdio run ./wdio.conf.js --spec example.e2e.js
or define suites in your config file and run just the test files defined by in a suite:

npx wdio run ./wdio.conf.js --suite exampleSuiteName
