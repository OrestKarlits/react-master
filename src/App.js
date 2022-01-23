
import Users from "./components/Users/Users";
import UserDetails from "./components/User-Details/User-Details";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'
import {useState} from "react";
// import {PostService} from "./components/services/post.service";

const App = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    // const [posts, setPosts] = useState([]);

    const getUser = (user) => {
      setUser(user)
        setUserId(null)
    }
    const getUserId = (id) => {
      // PostService.getByUserId(id).then(value => setPosts([...value]))
        setUserId(id)
    }

  return (

    <div>

        <div className={css.wrap}>
          <Users getUser = {getUser}/>
            {user && <UserDetails user = {user} getUserId = {getUserId}/>}
        </div>

        {/*{!!posts.length && <Posts posts={posts}/>}*/}
        {userId && <Posts userId = {userId}/>}

    </div>
  );
}

export default App;
