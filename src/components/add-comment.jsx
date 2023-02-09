import { useState } from "react";
import { addComment } from "../api";

const AddComment = ({article_id}) => {
    const username = 'grumpy19'
    const [newComment, setNewComment] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(article_id, newComment, username)
        setNewComment('')
    }
    
    
    return <section>
        <form onSubmit={handleSubmit}>
        
            <br></br>
            <label htmlFor="body">Comment: </label>
            <textarea value={newComment} onChange= {(e) => {
                setNewComment(e.target.value)

            }}  id="body">
            </textarea>
            <button>Submit Comment!</button>
            
        </form>
    </section>
}
export default AddComment