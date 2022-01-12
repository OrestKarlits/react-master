import {useEffect, useState} from "react";

const Posts = () => {
    const [post, Setpost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((get) => {
                return get.json();
            })
            .then((poster) => {
                Setpost(poster)
            })
    }, [])
    return (
        <div>
            {post.map(value => <div key={value.id}>{value.title}</div>)};
        </div>
    )
}
export default Posts;