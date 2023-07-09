Assignment-1

Q1: What is Emmet?
ANS1: Its type of an addon to your text editor, which allows to type shortcuts that are then expanded to full piece of code when they are executed.


Q2: Difference between library and a framework?
ANS2: 
- Library:
  -  A library is used to enhance the functionality of an application. 
  -  A library is a collection of pre-written code modules or functions that developers can use to perform specific tasks or provide specific functionality. 
  - React is a library not a framework, which can be applied to small specific portion in our existing application.

- Framework:
  - Set of rules that provides a foundation for developing software applications.set of rules that provides a foundation for developing software applications. 
  - When we use a framework, we can use resources to facilitate faster development and a greater user experience.


Q3: What is CDN?why do we use it?
ANS3: 
- CDN stands for Content Delivery Network or content distribution network.. It is a geographically distributed network of servers that work together to deliver web content, such as images, videos, CSS files, JavaScript files, and other static assets, to users based on their geographic location.
- The main purpose of using a CDN is to improve the performance and availability of web content for end-users.


Q4: Why React is known as React?
ANS: 
- The name "React" refers to the reactive nature of the library. In React, the user interface is broken down into small, reusable components, and these components react to changes in data or state. When the underlying data or state of a component changes, React efficiently updates only the necessary parts of the user interface, rather than re-rendering the entire page. 
- React is one of many libraries and it's completely frontend and specializes in things that the user interacts with when they're using a website. This could be buttons, search bars and menus. “And it's called React because it reacts.


Q5: What is crossorigin in script tag?
ANS:
- When you include a JavaScript file from a different domain (cross-origin request), the browser, by default, enforces a security policy called the "Same Origin Policy." This policy restricts scripts from accessing resources (like data or cookies) from a different domain, which helps protect against cross-site scripting attacks.
- crossorigin attribute in script tag is basically used to fetch the Javascript files that are hosted on different origins.
- The crossorigin attribute sets the mode of the request to an HTTP CORS Request.


Q6: Difference between React and ReactDOM.
ANS: 
- React: React is the core JavaScript library that provides the building blocks for building user interfaces. 
- ReactDOM: It provides the integration between React and the browser's rendering engine.It focuses on the rendering aspects, ensuring that React components are properly displayed in the browser's DOM.
- React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser. 


Q7: What is the difference between react.development.js and react.production.js files via CDN?
ANS: 
- react.development.js file is intended for development purposes.It contains the full, uncompressed version of the React library with additional warning messages and helpful development tools. It is larger in size and includes extra code for providing meaningful error messages.This version is not optimized for performance but offers a better development experience.
- react.production.js: This file is optimized for production environments. It is a minified and compressed version of the React library, resulting in a smaller file size and improved performance.So faster loading time for users.


Q8: what are async and defer?
ANS: 
- Both are boolean attributes used along with script tags to load the external scripts efficiently in our webpage.
- 2 major things happen when we are loading our webpage.
  - Html parsing.
  - loading scripts.
      - fetching scripts.
      - executing scripts.
- async: When this attribute is used the fetching of script is done in parallel with the html parsing, and is immediately executed once after it got completely fetched.During the execution,html parsing remains paused.
    - Doesn't maintain the order of execution if scripts are interconnected to eachother.
- defer: When this attribute is used,fetching of script is done in parallel with the html parsing,but is executed once after the html parsing has been completed.
    - guarantees the order of execution of scripts.


 



