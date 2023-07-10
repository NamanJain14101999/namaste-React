import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => ReactElement-JS Object => HTMLElement(render)

// JSX - is not HTML in JS
// JSX - is like a HTML syntax or HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS ) - PARCEL - Babel

// JSX =>Babel transplies it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = (
  <h1 id="heading" className="head">
    Namaste React using JSX 🍷
  </h1>
);

// React Component
// Class Based Component -  OLD way
// Functional Component  -  NEW way

// React Functional Component -

// const HeadingComponent = () => {
//   return <h1 id="heading">Namaste React Functional Component</h1>;
// };

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🍷
  </h1>
);

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🍷
  </h1>
);
{
  // Title();
}
{
  /* <Title/> */
}
{
  /* <Title></Title> */
}
const data = 1000;

const HeadingComponent = () => (
  // <div>
  //   <div id="container">
  //     <h1 id="heading">Namaste React Functional Component</h1>
  //   </div>
  //   <div id="container2">
  //     <h1 id="heading">Namaste React Functional Component</h1>
  //   </div>
  // </div>

  // React Fragment
  // <React.Fragment>
  <>
    <div id="container">
      <h1 id="heading">Namaste React Functional Component</h1>
    </div>
    <div id="container2">
      <h1 id="heading">Namaste React Functional Component</h1>
    </div>
  </>
);
{/* </React.Fragment> */}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
