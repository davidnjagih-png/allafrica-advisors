import React, { useState, useEffect } from "react";

function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsers([JSON.parse(storedUser)]);
    }
  }, []);

  const authorizeUser = (username) => {
    const updatedUsers = users.map((user) =>
      user.username === username ? { ...user, authorized: true } : user,
    );
    setUsers(updatedUsers);
    // Update localStorage
    localStorage.setItem("user", JSON.stringify(updatedUsers[0]));
    alert(`${username} has been authorized!`);
  };

  return (
    <div className="users-admin">
      <h2>Manage Users</h2>
      {users.length === 0 ? (
        <p>No users signed up yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Status</th>
              <th>Authorize</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.authorized ? "Authorized" : "Pending"}</td>
                <td>
                  {!user.authorized && (
                    <button onClick={() => authorizeUser(user.username)}>
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersAdmin;
