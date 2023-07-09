Assignment-2

Q1: What is NPM?
ANS1:

- NPM is a package manager which consist of plether of packages which we can use in our project and is used to keep track of all the packages (or) dependencies. Package.json sia configuration for npm.

Q2: What is Parcel/Webpack? Why do we need it?
ANS2:

- 'Parcel/Webpack' is a bundler which we use in our project to bundle the files before we ship it to production.Not only the react which makes our app fast,but the bundlers such as parcel,webpack and vite which adds power to our application.

Parcel Features:

- HMR (Hot Module Replacement) - parcel keeps track of file changes - via file watcher algorithm and renders the changes in the files
- File watcher algorithm - made with C++
- Minification
- Cleaning our code
- DEV and production Build
- Super fast building algorithm
- Image optimization
- Caching while development
- Compresses
- Compatible with older version of browser
- HTTPS in dev
- Port Number
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting

Q3: What is .parcel-cache?
ANS3:

- .parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

Q4: What is npx?
ANS:

- npx is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

- npx is similar to npm but it is used to execute the dependencies that have been installed using npm.

- NPX stands for Node Package eXecute.

Q5: What is difference between dependencies vs devDependencies?
ANS:

- "dependencies" : Packages required by your application in production.
- "devDependencies" : Packages that are only needed for local development and testing.

Q6: What is Tree Shaking?
ANS:

- Tree shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.
  or
- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

Q7: What is Hot Module Replacement?
ANS:

- Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.
  or
- Hot Module Replacement is a feature that enables you to see code changes in the browser without having to refresh it, allowing you to preserve the state of your front-end application. But implementing HMR can be tricky because it can incur side effects.

Q8: List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
ANS:

- HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.

- File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.

- Minification - Minification is the process of minimizing code and markup in your web pages and script files.

- Image optimization

- Caching while development

- Local server: Basically it creates a port and deploys our application in the server.

- Dev build: when parcel is executed, it generates the development build and stores inside the 'dist' folder, which we see in our browsers.

- Gives a way to host the application in HTTPS when you want to test something that only uses SSL.

Q9: What is .gitignore? What should we add and not add into it?
ANS:

- The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.

- It's used to store the dependencies and folders that are not pushed on to production.we need to add those files which can be regenerated and not the ones that can't.

Q10: What is the difference between package.json and package-lock.json?
ANS:

- package.json keeps track on the dependencies that we use.It can also be used to keep track the exact version by removing the caret or the tilde in it.

- package-lock.json used to keep track on the exact version of the packages and keeps record of it.

Q11: Why should I not modify package-lock.json?
ANS:

- package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

- Because these are used to keep track of exact version of the dependencies and their own dependencies and so on. Basically it maintains the transitive dependencies.

Q12: What is node_modules ? Is it a good idea to push that on git?
ANS:

- node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). Don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.

- Kind of transitive dependencies.

Q13: What is the dist folder?
ANS:

- The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

- 'dist' is the development build that is build when parcel is executed.

Q14: What is browserslist?
ANS:

- Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

- To make our app compactable with older version of browsers we use browser list.We need to tell it what are all the versions of browsers we need our app to support with in.
