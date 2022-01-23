import React from 'react';

const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Userid: {userId}</div>
            <div>Title {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;