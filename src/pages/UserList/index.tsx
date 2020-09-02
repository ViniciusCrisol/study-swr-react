import React, { useCallback } from 'react';
import { mutate as mutateGlobal } from 'swr';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { useFetch } from '../../hooks/useFetch';

interface User {
  name: string;
  id: number;
}

const UserList: React.FC = () => {
  const { data, mutate } = useFetch<User[]>('users');

  const handleNameChange = useCallback(
    (id: number) => {
      api.put(`users/${id}`, { name: 'Bartolomeu' });

      const updatedUsers = data?.map((user) => {
        if (user.id === id) {
          return { ...user, name: 'Bartolomeu' };
        }

        return user;
      });

      mutate(updatedUsers, false);
      mutateGlobal(`users/${id}`, { id, name: 'Bartolomeu' });
    },
    [data, mutate]
  );

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          <button type='button' onClick={() => handleNameChange(user.id)}>
            Alterar nome
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
