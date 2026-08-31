import React, { useState, useEffect } from "react";
import "../styles/UsersAdmin.css";

function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const authorizeUser = (username) => {
    const updatedUsers = users.map((user) =>
      user.username === username ? { ...user, authorized: true } : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert(`${username} has been authorized!`);
  };

  const deleteUser = (username) => {
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert(`${username} has been deleted.`);
  };

  return (
    <div className="users-admin">
      <h2>Manage Users</h2>

      {/* Universal admin card */}
      <div className="user-card admin-card">
        <h3>Admin User</h3>
        <p>
          <strong>Username:</strong> admin
        </p>
        <p>
          <strong>Status:</strong> Authorized
        </p>
        <p className="note">This universal admin cannot be removed.</p>
      </div>

      {/* Other users */}
      {users.length === 0 ? (
        <p>No users signed up yet.</p>
      ) : (
        <div className="user-cards">
          {users.map((user) => (
            <div key={user.username} className="user-card">
              <h3>{user.name || user.username}</h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {user.authorized ? "Authorized" : "Pending"}
              </p>
              <div className="card-actions">
                {!user.authorized && (
                  <button
                    onClick={() => authorizeUser(user.username)}
                    className="approve-btn"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => deleteUser(user.username)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersAdmin;
