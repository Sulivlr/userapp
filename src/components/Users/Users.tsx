import React from 'react';
import UserCard from "./UserCard";
import {User} from "../../types";

interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({users}) => {
    return (
        <>
            <h4>Users</h4>
            {users.map(user => (
                <UserCard
                key={user.id}
                user={user}
                />
            ))}
        </>
    );
};

export default Users;