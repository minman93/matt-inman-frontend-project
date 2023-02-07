
import { useState, useEffect } from 'react'
import { singleArticle } from '../api'
import { useParams } from 'react-router-dom'

const SingleArticle = () => {
   const [article, setArticle] = useState({})
    
    const {article_id} = useParams();

    useEffect(() => {
        singleArticle(article_id).then((data) => {
            setArticle(data)

        })
    }, [])
        return <section className="all-articles">
            <li className="article-title">{article.title}</li>
            <br></br>
            <img src={article.article_img_url} alt=""></img>
            <li>Written by: {article.author}</li>
            <li>Date Added: {article.created_at}</li>
            <br></br>
            <p>{article.body}</p>
            <br></br>
            <li>Votes: {article.votes}</li>


        </section>

}
export default SingleArticle
