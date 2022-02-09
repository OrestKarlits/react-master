import React, {useEffect, useState} from 'react';
import Forms from "./components/Forms/Forms";
import Users from "./components/Users/Users";
import {UserService} from "./components/services/user.service";

const App = () => {
    const [users, setusers] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState([]);

    useEffect(() => {
       UserService.getAll().then(value =>
       {setusers([...value])
       setfilteredUsers([...value])
       })
    }, [])

    const getfilter = (data) => {
      let filterarr = [...users]

        if (data.name){
            filterarr = filterarr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username){
            filterarr = filterarr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email){
            filterarr = filterarr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setfilteredUsers(filterarr)

    }
    return (
        <div>
            <Forms getfilter={getfilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;