// Import React and necessary hooks
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function RegistrationPage(props) {
    // State variables for username, password, and error message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [emailid, setEmailid] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const roll = 'user';
    //const [roll, setRoll] = useState('');
   
    // Initialize useNavigate hook for navigation
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Clear previous error messages
            setErrorMessage('');

            // Send login request to server
            const response = await axios.post('http://localhost:3000/register', { username, password,address,emailid ,roll});

            // If login successful, redirect to MainPage
            if (response.status === 200) {
                navigate('/main');
            }
        } catch (error) {
            console.error('Error:', error);

            // If login failed, display error message
            setErrorMessage('Error Creating user.');
        }
    };

    // JSX structure for login form
    return (
<div className="flex items-center justify-center min-h-screen">
  <div className="mx-auto p-6 bg-white rounded-md shadow-md w-full max-w-xl">
    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Username */}
      <div className="flex items-center">
        <label htmlFor="username" className="w-32 text-right mr-4 font-medium">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Password */}
      <div className="flex items-center">
        <label htmlFor="password" className="w-32 text-right mr-4 font-medium">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Address */}
      <div className="flex items-center">
        <label htmlFor="address" className="w-32 text-right mr-4 font-medium">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Email ID */}
      <div className="flex items-center">
        <label htmlFor="emailid" className="w-32 text-right mr-4 font-medium">Email ID:</label>
        <input
          type="text"
          id="emailid"
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm whitespace-pre-line text-center">
          {errorMessage}
        </p>
      )}
    </form>

    {/* Login Link */}
    <div className="text-center mt-4">
      <Link to="/register" className="text-blue-500 hover:underline">
        Login
      </Link>
    </div>
  </div>
</div>
    );
}

export default RegistrationPage;
