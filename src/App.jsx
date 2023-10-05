import { useState } from "react";
import "./App.css";
import { Form } from "./assets/components/Form";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "type your username",
      label: "Username",
      errormessage: "Username should be 3-16 characters and shouldn't includ any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "type your email",
      label: "Email",
      errormessage: "It should be a valid email adress",
      pattern: "",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "",
      label: "Birth Day",
      errormessage: "",
      pattern: "",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "type your password",
      label: "Password",
      errormessage: "Passwords must contain at least one letter, one number and one special character.",
      pattern: "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm your password",
      label: "Confirm Password",
      errormessage: "Password don't match",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form>
        {inputs.map((input) => (
          <Form key={input.id} {...input} onChange={onChange} value={values[input.name]} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
