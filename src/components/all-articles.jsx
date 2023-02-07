import {useState, useEffect} from 'react'
import {allArticles} from '../api';
import {Link} from 'react-router-dom';




const AllArticles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {

        allArticles().then((data) => {
            setArticles(data.articles)
        })
    }, [])



    return (<ul>
       <h2 className="h2"> ALL ARTICLES </h2>
    {articles.map((article) => {
        return <section key={article.article_id} className="all-articles">
            <Link to={`/articles/${article.article_id}`}>
        <li className="article-title">{article.title} </li> 
        <img src={article.article_img_url} alt=""></img>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
        <li>Date Added: {article.created_at}</li>
        <li>Comments: {article.comment_count}</li>
        

        <br></br>



        </Link>
        </section>
    })}
   </ul>)
}
export default AllArticles