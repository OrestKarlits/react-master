import {useEffect, useState} from "react";

const Comentari = () => {
    const [comments, Setcomments] = useState([])
    useEffect ( () => {

            fetch('https://jsonplaceholder.typicode.com/comments/')
                .then((get) => {
                    return get.json();
                } )
                .then((coments) => {
                    Setcomments(coments)
                })
    }, [])
    return (
        <div>
            {comments.map(value => <div key={value.id}>{value.name}</div>)}
        </div>
    )
};
export default Comentari;