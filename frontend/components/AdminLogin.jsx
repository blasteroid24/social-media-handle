import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // hardcoded login page information, can setup routes for adding admin detaits to databse and then autheticating
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin/dashboard'); // Redirect to the dashboard after successful login
    } else {
      alert('Invalid credentials!');//thrwing an alert if usersame/password are wrong
    }
  };

  return (
    <>
       <div className='flex justify-center items-center h-screen bg-zinc-900'>
      <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-4xl text-center text-white mb-6'>Admin Login Panel</h2>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='block text-white'>Username:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='w-full p-2 border border-zinc-600 rounded focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out'
              placeholder='Enter your username'
            />
          </div>
          <div>
            <label className='block text-white'>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full p-2 border border-zinc-600 rounded focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-150 ease-in-out'
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;
