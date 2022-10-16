import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";

// useRef instead of useState
// useEffect before the function to get the instant value
// render both first and lastname

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const adjustCount = (amount) => {
    setCount((currentCount) => currentCount + amount);
  };
  // you can use function here as well...
  // function adjustCount(amount) {
  //   setCount((currentCount) => {
  //     return currentCount + amount;
  //   });
  //   // console.log(count);
  // }

  // first and lastname
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="App">
      <h1>Hello Feynman!!</h1>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <h4>Counter</h4>
        <button onClick={() => adjustCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => adjustCount(+1)}>+</button>
      </div>
      <br />
      <div>
        <h4>Fist and Last Name..</h4>
        <input
          type="text"
          placeholder="first name.."
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name.."
          onChange={(e) => setLastName(e.target.value)}
        />
        <p>My full name is {fullName}. 👽</p>
      </div>
      <br />
      <PersonForm />
    </div>
  );
}

export default App;
