Assignment-7

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

## Q2: What would happend if we do console.log(useState())?

A: If we do console.log(useState()), we get an array [undefined, function] the first item is an array is state variable is undefined and the second item is an array is function which is setState function. This function through we can change the value of state variable.

## Q3: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## Q4: What is SPA?

A: A single page application works in the browser while they don't require any page reload and extra waiting time. As we change the routes only the components are changed on a single page instead of refreshing the whole page.
Advantages of SPA :

- Provide better user experience
- Increase efficiency (smooth navigation)
- Fast and responsive
  Some sites that use Single Page Application are :
- Facebook, Twitter, Gmail, Google Drive, Uber, Paypal, Skype, GoogleMaps, Pinterest.

## Q5: What is the difference between client side and server side routing?

A:

- (SSR) In server side routing when navigating a whole document is served to the user. It will request a new page from the server. It causes the whole page to refresh.

- (CSR) In client side route happens when the route is handled internally by the javascript that is loaded on the page.

- When a user clicks on a link, the URL changes but the request to the server is prevented. The whole page won't refresh when using client-side routing. All Single Page Applications uses client-side routing.
