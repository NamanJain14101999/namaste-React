Assignment-4

Q1: Is JSX mandatory for React?
ANS1:

- `JSX`is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So`JSX`is not mandatory but is used for writing better and clean code instead of writing code using`React.CreateElement`.

- JSX =>Babel transplies it to React.createElement => ReactElement-JS Object => HTMLElement(render)

Q2: Is ES6 mandatory for React?
ANS2:

- ES6 is not mandatory for react, but is highly recommended and commonly used while developing react applications.React in itself is build using javascript features and syntax which are part of ES6 specifications and later versions.

- ES6 enabled several powerful features to javascript that significantly imroves the development experience.

- Some of them are arrow functions, template literals, classes, destructuring assignment,spread syntax.

- It is worth noting that while working with react, we use Babel(Javascript compiler(or)transpiler) and parcel(bundler) which are build using ES6.

- ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

- If we don't use ES6 in react, there is an alternative to perform. We use create-react-class instead of ES6.

Q3: How can I write comments in JSX?
ANS3:

- JSX comments are written as follows:

- `{/*  */}` - for single or multiline comments

#### Example

```
{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/}
```

- Note: Only /\* \*/ is used inside the curly braces. Any other character like the popular double forward slash // , will throw an error.

Q4: What is `<React.Fragment></React.Fragment>` and `<></>`?
ANS:

- IMP JSX expressions must have one parent elements.

- `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
  `<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

#### Example

```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

Q5: What is `Reconciliation` in React?
ANS:

- The Virtual DOM is an in-memory representation or copy of the actual DOM structure. It is a JavaScript object that reflects the structure and properties of the real DOM elements in your web page.When you make changes to your React components, instead of directly updating the real DOM, React updates the Virtual DOM first.

Q6: What is `Reconciliation` in React?
ANS:

- `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

Q7: What is React Fiber?
ANS:

- React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
  The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
  Because Fiber is asynchronous, React can:

  - Pause, resume, and restart rendering work on components as new updates come in
  - Reuse previously completed work and even abort it if not needed
  - Split work into chunks and prioritize tasks based on importance

- React fiber divides the work of rendering and updation process,by breaking the components into smaller, managable units.

- Dividing work: While making changes to the react components,react fiber breaks the work into smaller units known as "fiber".Each fiber is a part of the component tree, which can be worked on independently.

Q8: Why do we need keys in react?when do we need keys in react?
ANS:

- In react, key props gives a unique id to elements in a collection while rendering it using map() or similar methods.Keys play a crucial role in efficently upadting the user interface.

- while rendering the list of elements, keys are used to identify the elements in the list.When list is updated,react uses a process called 'reconciliation' to identify the changes in the elements.This key helps in adding, updating, removing or reordering the elements efficiently.without keys react may re-render the entire list of elements which may reduce performance and can cause potential UI flickering.

- Keys help React identify when elements have been reordered in a list. When elements are reordered without keys, React may mistakenly assume that elements have been removed and new ones have been added, causing unnecessary re-renders.

Q9: Can we use index as keys in React?
ANS:

- Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

Q10: What is props in React? Ways to.
ANS:

- props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

Q11: What is Config Driven UI?
ANS:

- Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

Q12: Difference between Virtual DOM and Real DOM?
ANS:

- DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`

  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.

- `Real DOM`
  - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update.

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |
