import { useState } from "react";
import { addComment } from "../api";

const AddComment = ({article_id, setComments}) => {
    const username = 'grumpy19'
    const [newComment, setNewComment] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        if (newComment.length >= 1) {

        addComment(article_id, newComment, username).then((comment) => {
            setComments((currentComments) => {
                console.log(comment)
                console.log(currentComments)
                return [comment,...currentComments]
            })
            setNewComment('')
        })}
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