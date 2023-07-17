Assignment-9

## Q1: When and why do we need lazy()?

A: Suppose if our app is a large scale application and it has various components and files inside it.Bundlers will bundle all these files into a single file but when there are more files then it causes performance issues.Hence, solution to this is that we create small bundles for these files and this process is called as code-splitting/chunking/on demand loading/lazy loading.

- lazy() lets you code-split without adding another dependency to your codebase. It makes a best practice (code-splitting) easier, which will make writing performant React apps more seamless.

- lazy() is nothing but a function from 'react' library that contains a callback function.The callback function uses a import() function that takes the path of component to lazy load it.This must return a Promise which resolves to a module with a default export containing a React component.

- eg:Suppose if we have a grocery component in our food delivery app that contains many child components.Instead of bundling the restaurants and groceries data into a single file we'll create small bundles. We need to import (lazy load) the grocery component as following:
  const Grocery = lazy( () => import("path of Grocery component"));

## Q2: What is suspense?

A: Suspense lets the components “wait” for something before they can render. Suspense is not a data fetching library. It’s a mechanism for data fetching libraries to communicate to React that the data a component is reading is not ready yet. React can then wait for it to be ready and update the UI.

## Q3: Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error?

A: Suspense is a new feature in React that allows components to interrupt or "suspend" rendering in order to wait for some asynchronous resource (such as code, images or data) to be loaded; when a component "suspends", it indicates to React that the component isn't "ready" to be rendered yet, and won't be until the asynchronous resource it's waiting for is loaded. When the resource finally loads, React will try to render the component again.
When a component is suspended, we need to render a fallback in place of the component while we wait for it to become "ready". In order to do so, we use the Suspense component provided by React
eg :

`<Suspense fallback={<h1>Loading..</h1>}>
<Grocery>
</Suspense>`

## Q4: Advantages and Disadvantages of using this code splitting pattern?

A: Advantages :

- To bring down our App’s bundle size
- Improve the performance of your app

Disadvantages :

- It does not support Server Side Rendering (SSR).
- Each time we lazily load a component, we have to provide a fallback UI while it loads in the background. Also, each chunk comes with a little bit of overhead and network latency, which can accumulate to an even slower experience than doing nothing at all.

## Q5: When do we and why do we need suspense?

A: The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.
