import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {commentsFunc} from '../api'

const Comments = () => {
    const [comments, setComments] = useState([])


    const {article_id} = useParams();

    useEffect(() => {
        commentsFunc(article_id).then((data) => {
            console.log(data)
            setComments(data)
        })
    }, [])
    return <p> HELLO</p>

}
export default Comments
