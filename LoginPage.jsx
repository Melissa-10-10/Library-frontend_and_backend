import React, { useState } from 'react';
import LibraryButton from './LibraryButton';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    alert('This your Username: ' + username + ' AND your Password: ' + password);
  }

  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <LibraryButton ButtonLabel="Login" actionButton={handleLogin} />
    </div>
  );
};

export default LoginPage;
