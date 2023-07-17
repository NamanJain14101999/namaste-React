import UserClass from "./UserClass";
import React from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <UserClass name="Naman Jain (class)" location="Jaipur (Class)" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name="First Child" location="Jaipur (Class)" />
        {/* <UserClass name="Second Child" location="Jaipur (Class)" /> */}
      </div>
    );
  }
}

/*

- Parent Constructor
- Parent Render

  - First Constructor
  - First Render

  - Second Constructor
  - Second Render

  < DOM UPDATED - IN SINGLE BATCH  >

  - First ComponentDidMount
  - Second ComponentDidMount

- Parent ComponentDidMount

*/

export default About;
