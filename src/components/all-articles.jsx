import {useState, useEffect} from 'react'
import {allArticles} from '../api';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom';






const AllArticles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState('created_at')

    const{topic} = useParams()

    useEffect(() => {
        
        setIsLoading(true)
        allArticles(topic, sortBy).then((data) => {
            setArticles(data.articles)
            setIsLoading(false)
        })
    }, [topic, sortBy])

        
        if (isLoading) return <p>Loading...</p>

    if (isLoading) return <p className="loading">Loading...</p>

    else return <section>
  
        <p className="sort-by">Sort by:
       <button onClick={() => setSortBy('author')}>Author</button>
       <button onClick={() => setSortBy('votes')}>Votes</button>
        <button onClick={() => setSortBy('topic')}>Topic</button>
        <button onClick={() => setSortBy('comment_count')}>Number of Comments</button></p>
        
        
        <ul>
       <h2 className="h2"> ARTICLES </h2>
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
   </section>
}
export default AllArticles