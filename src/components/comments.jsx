import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {commentsFunc} from '../api';
import dayjs from 'dayjs';

const Comments = () => {
    const [comments, setComments] = useState([])


    const {article_id} = useParams();

    useEffect(() => {
        commentsFunc(article_id).then((data) => {
            setComments(data)
        })
    }, [])
    return <section> 
        <h2 className="h2">COMMENTS</h2>
    <ul>
        {comments.map((comment) => {
            const date = dayjs(comment.created_at).format('DD-MM-YYYY')

            return <section className="comments"><li>Username: {comment.author}</li>
            <br></br>
        <li>Date Created: {date}</li>
        <br></br>
        <li>{comment.body}</li>
        <br></br>
        <li>Votes: {comment.votes}</li>
        <br></br>
        </section>
    })}
        
    </ul>
    </section>
}



export default Comments
