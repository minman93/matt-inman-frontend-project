import axios from 'axios';

export function allArticles(){
    return axios.get('https://matt-inman-backend-project.onrender.com/api/articles').then(({data}) => {
        return data})

    }
export function singleArticle(article_id){
        return axios.get(`https://matt-inman-backend-project.onrender.com/api/articles/${article_id}`).then(({data}) => {
        
            return data})
        }
export function commentsFunc(article_id){
        return axios.get(`https://matt-inman-backend-project.onrender.com/api/articles/${article_id}/comments`).then(({data}) => {
            return data})
        }
