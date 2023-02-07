
import { useState, useEffect } from 'react'
import { singleArticle } from '../api'
import { useParams } from 'react-router-dom'
import Comments from "./comments"
import dayjs from 'dayjs';




const SingleArticle = () => {
   const [article, setArticle] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const [vote, setVote] = useState(false)

    
    const {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true)
        singleArticle(article_id).then((data) => {
            setArticle(data)
            setIsLoading(false)

        })
    }, [])

    const increaseVotes = () => {

        }
    
        const date = dayjs(article.created_at).format('DD-MM-YYYY')
    

        
        if(isLoading) return <p>Loading...</p>

        else return <section className="single-article">
        
            <li className="article-title">{article.title}</li>
            <br></br>
            <img src={article.article_img_url} alt=""></img>
            <li>Written by: {article.author}</li>
            <li>Date Added: {date}</li>
            <br></br>
            <p className="article-text">{article.body}</p>
            <br></br>
            <li>Votes: {article.votes}</li>
            <button onClick={increaseVotes}>Upvote!</button>
            <br></br>
            <br></br>


            <Comments/>
        </section>
        
        

}
export default SingleArticle
