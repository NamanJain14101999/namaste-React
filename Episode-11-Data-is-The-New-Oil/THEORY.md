Assignment-10

## Q1: What is prop drilling?

A: Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.

## Q2: What is lifting the state up?

A: We lift the state up to make the parent state a single shared state and a sole "source of truth" and pass the parent's data to its children. This concept is called lifting state up. It is of great use to maintain data consistency in our react applications. This also make our child component as Controlled component.

## Q3: What are Context Provider and Context Consumer?

A: In React, the Context API is a way to manage and pass data down the component tree without the need to manually pass props through every level of components. The Context API consists of two main components: the Context Provider and the Context Consumer.

1. Context.Provider
   Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.

2. Context.Consumer
   A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. Requires a function as a child.

## Q4: If you don't pass a value to the provider does it take the default value?

A: yes
