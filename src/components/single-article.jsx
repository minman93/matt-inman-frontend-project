
import { useState, useEffect } from 'react'
import { singleArticle } from '../api'
import { useParams } from 'react-router-dom'
import Comments from "./comments"

const SingleArticle = () => {
   const [article, setArticle] = useState({})
   const [isLoading, setIsLoading] = useState(false)
    
    const {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true)
        singleArticle(article_id).then((data) => {
            setArticle(data)
            setIsLoading(false)

        })
    }, [])

        if(isLoading) return <p>Loading...</p>

        return <section className="single-article">
=======
    if(isLoading) return <p className="loading">Loading...</p>
        return <section className="all-articles">
        
            <li className="article-title">{article.title}</li>
            <br></br>
            <img src={article.article_img_url} alt=""></img>
            <li>Written by: {article.author}</li>
            <li>Date Added: {article.created_at}</li>
            <br></br>
            <p className="article-text">{article.body}</p>
            <br></br>
            <li>Votes: {article.votes}</li>
            <br></br>
            <br></br>


            <Comments/>
        </section>
        
        

}
export default SingleArticle
