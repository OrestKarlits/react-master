import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {PostService} from "../services/post.service";

// const Posts = ({posts}) => {
//     return (
//         <div>
//             {posts.map(post => <Post key = {post.id} post = {post}/>)}
//         </div>
//     );
// };
const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        PostService.getByUserId(userId).then(value => setPosts(value))
    }, [userId])
    return (
        <div>
            {posts.map(post => <Post key = {post.id} post = {post}/>)}
        </div>
    );
};


export default Posts;