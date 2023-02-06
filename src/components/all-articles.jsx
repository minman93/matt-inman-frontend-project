import {useState} from 'react'
import {allArticles} from '../api'
// import { useParams } from 'react-router-dom';


const AllArticles = () => {
    const [articles, setArticles] = useState([])

    allArticles().then((data) => {
        setArticles(data.articles)
    })
   return (<ul>
    {articles.map((article) => {
        return<section key={article.article_id} className="all-articles">
        <li className="article-title">{article.title} </li> 
        <img src={article.article_img_url} alt=""></img>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
        <li>Date Added: {article.created_at}</li>
        <li>Comments: {article.comment_count}</li>
        <nav class="nav-text">Read full article...</nav>
        <br></br>



        </section>
    })}
   </ul>)
}
export default AllArticles