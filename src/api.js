import axios from 'axios';

export function allArticles(){
    return axios.get('https://matt-inman-backend-project.onrender.com/api/articles').then(({data}) => {
        return data})
    }