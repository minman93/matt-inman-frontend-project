import axios from 'axios';

export function allArticles(){
    return axios.get('https://matt-inman-backend-project.onrender.com/api/articles').then(({data}) => {
        return data})
<<<<<<< HEAD
    }
export function singleArticle(article_id){
        return axios.get(`https://matt-inman-backend-project.onrender.com/api/articles/${article_id}`).then(({data}) => {
            return data})
        }
=======
    }
>>>>>>> 54592a1da7c0a055201db1c659fda123da9cda3f
