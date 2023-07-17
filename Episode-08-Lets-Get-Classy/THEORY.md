Assignment-8

## Q: How do you create `Nested Routes` react-router-dom configuration?

A: We need to create a children array of objects and pass the routes in it as {path:"path",element:"component to which it is mapped"}

We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

- Now to load the children according to the path we use `<Outlet/>`.
- The `<Outlet/>` element is used as a placeholder. It enables the AppLayout's component to render it's child routes.

## Q2: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

A:

- createHashRouter - This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

- createMemoryRouter - Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

## Q3: What is the order of life cycle method calls in `Class Based Components`?S

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

## Q4: Why do we use `componentDidMount`?

A:

1. This method is invoked immediately after component is mounted(inserted into the tree).

2. This method is called during the Mounting in commit phase of the React Life-cycle i.e after the component is rendered.

3. This is an excellent place to instantiate network request (make API calls), to set up any subscriptions etc.

## Q5: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.

- Unmounting happens when we leave that particular component/page. It is used to perform necessary clean up such as invalidating timers,
  cancelling network requests,or cleaning any subscription.

- For eg : In componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted i.e users move to a different page, the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting a particular component.

## Q6: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## 7: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
