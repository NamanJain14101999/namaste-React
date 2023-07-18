import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1 className="flex justify-center my-5 text-4xl">About</h1>
        <h2 className="flex justify-center text-lg font-bold">This is Namaste React Web Series</h2>
        <UserClass name="First Child" location="Jaipur (Class)" />
      </div>
    );
  }
}


export default About;
