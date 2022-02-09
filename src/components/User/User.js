import React from 'react';

import css from './User.modulecss.css'

const User = ({users}) => {
    const {id, name, username, email} = users;
    return (
        <div>

            <div className={'wrap'}>
                <div> {id}) {name} -- {username} ----- {email}</div>
            </div>
        </div>
    );
};

export default User;