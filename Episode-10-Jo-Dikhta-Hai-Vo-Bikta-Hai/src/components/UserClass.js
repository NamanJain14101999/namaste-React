import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // state varibale
    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
        // avatar_url:
        //   "https://static4.depositphotos.com/1007248/289/i/600/depositphotos_2891812-stock-photo-plastic-dummy.jpg",
      },
    };

    console.log(this.props.name + " constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " component did mount");

    // API call over here
    const data = await fetch("https://api.github.com/users/NamanJain14101999");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }



  render() {
    console.log(this.props.name + " render");
    // const { name, location } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 bg-gray-200 rounded-lg flex flex-col">
        {/* <User/> */}
        {/* <h1>Count = {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img
          className="h-[500px] w-[500px] mx-auto rounded-full"
          src={avatar_url}
          alt="naman jain"
        />
        <h2 className="my-5 mx-auto text-xl">Name: {name} </h2>
        <h3 className="my-5 mx-auto text-xl">
          Location: {location || "Jaipur"}
        </h3>
        <h4 className="my-5 mx-auto text-xl">Contact: @jnaman09</h4>
      </div>
    );
  }
}
export default UserClass;

/*

 ----------- Mounting ---------
Constructor (Dummy)
Render (Dummy)
    < HTML Dummy >
Component Did Mount
    < API Call >
    < this.setState > -> state variable is updated

 ---- Updating ----------   
    render (API data)
    < HTML (new API data) >
 Component Did Update





*/
