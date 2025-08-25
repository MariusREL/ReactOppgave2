import { useState } from 'react';
import './Users.css';

const userData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
];

const Users = () => {
  const [users, setUsers] = useState(userData);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();
    if (username && email) {
      setUsers([...users, { username, email }]);
      setUsername('');
      setEmail('');
    }
  };

  return (
    <div className="users">
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddUser}>
        <h3>Add New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Users;
