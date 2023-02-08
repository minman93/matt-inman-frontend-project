import { useState } from "react";
import { addComment } from "../api";

const AddComment = ({article_id, comment}) => {
    const [submit, setSubmit] = useState();
    const [newComment, setNewComment] = useState({'author': '', 'body': ''});

    const useEffect = () => {
        addComment(article_id, comment).then((data) => {
        return data
    }, [])}

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(newComment)
        return submit
    }
    
    
    return <section>
        <form>
            <label htmlFor="author">Username: </label>
            <input onChange= {(e) => {
                setNewComment((currComment) => {
                    const commentCopy = {...currComment}
                    commentCopy.author = e.target.value;
                    return commentCopy
                })
            }} type="text" id="author" value={newComment.author}>
            </input>
            <br></br>
            <label htmlFor="body">Comment: </label>
            <textarea onChange= {(e) => {
                setNewComment((currComment) => {
                    const commentCopy = {...currComment}
                    commentCopy.body = e.target.value;
                    return commentCopy
                })
            }}  id="body" value={newComment.body}>
            </textarea>
            <button onSubmit={handleSubmit}>Submit Comment!</button>
            
        </form>
    </section>
}
export default AddComment