import {useState, useEffect} from 'react'
import {allArticles} from '../api';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs'




const AllArticles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        allArticles().then((data) => {
            setArticles(data.articles)
            setIsLoading(false)
        })
    }, [])
        if (isLoading) return <p>Loading...</p>

    if (isLoading) return <p className="loading">Loading...</p>

    else return (<ul>
       <h2 className="h2"> ALL ARTICLES </h2>
    {articles.map((article) => {
        const date = dayjs(article.created_at).format('DD-MM-YYYY');

        return <section key={article.article_id} className="all-articles">
            <Link to={`/articles/${article.article_id}`}>
        <li className="article-title">{article.title} </li> 
        <img src={article.article_img_url} alt=""></img>
        <li>Topic: {article.topic}</li>
        <li>Votes: {article.votes}</li>
        <li>Date Added: {date}</li>
        <li>Comments: {article.comment_count}</li>
        

        <br></br>



        </Link>
        </section>
    })}
   </ul>)
}
export default AllArticles