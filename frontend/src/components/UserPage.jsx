import React from 'react';
import UserNavbar from './UserNavbar';

function UserPage() {
  return (
    <div>
      <UserNavbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the User Dashboard</h1>
      </div>
    </div>
  );
}


export default UserPage;