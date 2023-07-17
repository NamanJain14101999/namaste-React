import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  console.log("1");
  useEffect(() => {
    console.log("3");
  }, []);
  return (
    <div className="user-card">
      {console.log("2")}
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name} </h2>
      <h3>Location: Jaipur</h3>
      <h4>Contact: @jnaman09</h4>
    </div>
  );
};

export default User;
