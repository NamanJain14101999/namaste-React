Assignment-3

Q1: What is JSX?
ANS1:

- JSX stands for JavaScript XML. JSX(Javascript syntax) is mainly not a part of react.Its kind of a mix of html like syntax and JS,but 'not HTML'.It allows us to create react elements in easier way which is more readable and developer friendly as compared to using 'React.creatElement' which is a core way of creating an react element.

- It does the same job of creating a react element but in more easier way.

- JSX and React are not inter related with each other.

- "JSX is not HTML inside JS"
- "JSX is a HTML likes Syntax"
- JSX (transpiled before it reaches the JS) - PARCEL - Babel
- JSX =>Babel transplies it to React.createElement => ReactElement-JS Object => HTMLElement(render)

Q2: Superpower of JSX?
ANS2:

- JSX is more powerful.It allow us to write any piece of Javascript code inside the JSX.It is done by using curly braces into it.

- It doesn't blindly executes the javascript which is passed onto it.It does a lot of checking behind the scenes, that there is any malicious code that got injected or not.

- Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

- JSX takes care of injection attacks.

Q3: Role of type attribute in script tag?what options can I use there?
ANS3:

- The type attribute specifies the type of the script. The type attribute identifies the content between the `{<script>}` and `{<script/>}` tags. It has a Default value which is “text/javascript”.

- It specifies the type of the script.It helps the browser how to interpret and execute the script code.

- options:

  - text/javascript: It indicates the content of the script is javascript.

  - module: It is used when you want to include javascript code as an ES6 module.It allows us to import/export the code.

  - application/javascript: similar to text/javascript which indicates the content of the script is javascript code.

  - text/ecmascript : this value indicates that the script is following the EcmaScript standards.

  - module: This value tells the browser that the script is a module that can import or export other files or modules inside it.

  - text/babel : This value indicates that the script is a babel type and required bable to transpile it.

  - text/typescript: As the name suggest the script is written in TypeScript.

Q4: {TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
ANS:

- All three of them does the samething.

  - {} : This notation is used to execute any piece of js code inside the JSX.'TitleComponent' is used inside this,as it is basically a js function which returns a JSX(React Element).

  - `<TitleComponent/>`:: This is the notation to render any react functional component.If it is used inside another functional component, it is called as 'Component Composition'.

  - `<TitleComponent><TitleComponent/>`: It is basically same as the above `<TitleComponent/>`.
