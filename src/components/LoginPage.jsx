
import React, { useState } from 'react';
import LibraryButton from './LibraryButton';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [doYouHaveAccount, setDoYouHaveAccount] = useState(true);

  function checkLogin() {
    alert('Username: ' + userName + ' | Password: ' + password);
  }

  function createAccount() {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Account created for ' + userName + ' (' + email + ')');
    setDoYouHaveAccount(true);
  }

  const pageStyle = {
    border: '2px solid black',
    margin: '100px auto',
    padding: '30px',
    width: '350px',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    boxSizing: 'border-box',
    border: '1px solid black'
  };

  return (
    <>
      {doYouHaveAccount ? (
        <div style={pageStyle}>
          <h1 style={{ color: 'black' }}>Sign In</h1>

          <label>UserName:</label>
          <input
            style={inputStyle}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Please enter your user name"
          />

          <label>Password:</label>
          <input
            style={inputStyle}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <LibraryButton buttonLabel="LOGIN" actionButton={checkLogin} />

          <p> AM New here?</p>

          <LibraryButton
            buttonLabel="Create an Account"
            actionButton={() => setDoYouHaveAccount(false)}
          />
        </div>
      ) : (
        <div style={pageStyle}>
          <h1 style={{ color: 'black' }}>Create an Account</h1>

          <label>Student ID:</label>
          <input
            style={inputStyle}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your Student ID"
          />

          <label>Email:</label>
          <input
            style={inputStyle}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            style={inputStyle}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:</label>
          <input
            style={inputStyle}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <LibraryButton
            buttonLabel="CREATE AN ACCOUNT"
            actionButton={createAccount}
          />

          

          <LibraryButton
            buttonLabel="Sign In"
            actionButton={() => setDoYouHaveAccount(true)}
          />
        </div>
      )}
    </>
  );
};

export default LoginPage;
