
import { useState, useParams } from 'react'
import { singleArticle } from '../api'

const SingleArticleNav = (id) => {
    const [articleId, setArticleId] = useState([])
    console.log(id)

    singleArticle().then((data) => {
        console.log(data)
    })


// const article_id = useParams()
// console.log(article_id)

}
export default SingleArticleNav
