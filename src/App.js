import React from "react";
import './App.css';

function App() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onChangeFirstName = (e) => {
    setFirstname(e.target.value);
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onChangeLastName = (e) => {
    setLastname(e.target.value);
  }
  const onSubmit = () => {
    localStorage.setItem("formData", JSON.stringify({ "fname": firstname, "lname": lastname, "em": email, "pass": password }))
    alert("successfully signedup")
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <h2>Signup Form</h2>
          </div>
          <div>
            <input className='input' type='text' value={firstname} onChange={onChangeFirstName} placeholder='First  Name' required />
          </div>
          <div>
            <input className='input' type='text' value={lastname} onChange={onChangeLastName} placeholder='Last Name' required />
          </div>
          <div>
            <input className='input' type="email" value={email} onChange={onChangeEmail} placeholder='Email' required />
          </div>
          <div>
            <input className='input' type="password" value={password} onChange={onChangePassword} placeholder='Password' required />
          </div>
          <div>
            <button type='submit' style={{ cursor: 'pointer' }} >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
