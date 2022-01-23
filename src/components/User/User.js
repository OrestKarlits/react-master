import React from 'react';

import css from './User.modulecss.css'

const User = ({users, getUser}) => {
    const {id, name} = users;
    return (
        <div>

            <div className={'wrap'}>
                <div> {id}) {name}</div>
                <button onClick={() => getUser(users)}>Details</button>
            </div>
        </div>
    );
};

export default User;