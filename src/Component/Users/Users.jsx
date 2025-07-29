import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const usersLoadedData = useLoaderData();
    console.log(usersLoadedData);
    return (
        <div>
            <h1>Hello Boss Are you alright</h1>
        </div>
    );
};

export default Users;