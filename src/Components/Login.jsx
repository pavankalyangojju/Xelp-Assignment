import { useState } from "react";
import { Details } from "./Details";
import "./Login.css"
export const Login = ({ props }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const CheckPrime = (number) => {
    let n = +number;
    let flag = true;
    for (let i = 2; i <= n - 1; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    props.map((e) => {
      const value = Object.values(e);
      let flag = "your number is not prime";
      if (
        value.includes(email) &&
        value.includes(phone) &&
        value.includes(password)
      ) {
        if (CheckPrime(phone)) {
          window.alert("your number is prime");
          flag = "your number is prime";
        }
        setData([
          ...data,
          {
            phone: phone,
            flag: flag
          }
        ]);
      } else {
        window.alert("something went wrong check your email and password");
      }
    });
  };
  console.log("props", props);
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label for="email" id="Email1">Email:</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        /> <br></br>
        <label for="phone" id="Phone1">Phone Number:</label>
        <input
          type="number"
          placeholder="0000000000"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        /><br></br>
        <label for="password" id="Pass1">Password:</label>
        <input
          type="password"
          placeholder="xxxxxxxxxxx"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <button onClick={handlesubmit} className="Log">Login</button>
      </form>
      <Details props={data} />
    </div>
  );
};
