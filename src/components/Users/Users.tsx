import React from 'react';
import UserCard from "./UserCard";

const Users: React.FC = () => {
    return (
        <>
            <h4>Users</h4>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </>
    );
};

export default Users;