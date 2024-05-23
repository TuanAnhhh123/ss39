import React, { useMemo } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const B2: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'A', age: 25 },
    { id: 2, name: 'B', age: 17 },
    { id: 3, name: 'C', age: 22 },
    { id: 4, name: 'D', age: 16 },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div>
      <h1>Filtered User List</h1>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default B2;
