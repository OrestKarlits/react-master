import React, {useEffect, useState} from 'react';


import {UserService} from "../services/user.service";
import User from "../User/User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAll().then(value => setUsers(value))
    }, [])

    return (

        <div>
            {users.map(users => <User key = {users.id} users={users} getUser = {getUser}/>)}
        </div>
    );
};

export default Users;