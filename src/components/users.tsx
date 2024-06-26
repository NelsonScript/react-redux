import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addUser, updateUser, deleteUser, selectUsers } from '../features/users/usersSlice';
import { User } from '../features/users/user';

const Users: React.FC = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const [user, setUser] = useState<User>({ id: 0, name: '', email: '' });

    const handleAddUser = () => {
        dispatch(addUser(user));
    };

    const handleUpdateUser = () => {
        dispatch(updateUser(user));
    };

    const handleDeleteUser = (id: number) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <h1>Users</h1>
            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button onClick={handleAddUser}>Add User</button>
            <button onClick={handleUpdateUser}>Update User</button>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        {u.name} ({u.email})
                        <button onClick={() => handleDeleteUser(u.id)}>Delete</button>
                        <button onClick={() => setUser(u)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;