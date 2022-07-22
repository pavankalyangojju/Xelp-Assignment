import { useState } from "react";
import { Login } from "./Login";
import "./Register.css"
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        name: name,
        email: email,
        phone: phone,
        password: password
      }
    ]);
  };
  console.log("data", data);
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label for="name" id="Name">Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        /><br></br>
        <label for="email" id="Email">Email: </label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>
        <label for="phone" id="Phone">Phone Number: </label>
        <input
          type="number"
          placeholder="0000000000"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        /><br></br>
        <label for="password" id="Password">Password: </label>
        <input
          type="password"
          placeholder="xxxxxxxxxxx"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <button onClick={handlesubmit} className="Regi">Register</button>
      </form>
      <Login props={data} />
    </div>
  );
};
