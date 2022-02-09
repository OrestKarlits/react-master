
import User from "../User/User";

const Users = ({users}) => {


    return (

        <div>
            {users.map(users => <User key = {users.id} users={users} />)}
        </div>
    );
};

export default Users;