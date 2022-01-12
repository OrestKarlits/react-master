import React, {useEffect, useState} from 'react';
import './users.css';
const Users = () => {
    const [users,setUsers] = useState([]);
    // const users = state[0]
    // const users = state[1]
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((get) => {
                return get.json();
            })
            .then((usersArr) => {
                setUsers(usersArr)
            })
    }, [])
    return (
        <div className={'users'}>
            <div className={'user-id'}>{users.map(value => <p key={value.id}>{value.id}</p>)}</div>
            <div className={'user-name'}>{users.map(value => <p key={value.id}>{value.name}</p>)}</div>
            <div className={'user-username'}>{users.map(value => <p key={value.id}>{value.username}</p>)}</div>
        </div>
    );
};

export default Users;