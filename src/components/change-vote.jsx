import {useState} from 'react'
import {changeVote} from '../api'

const Votes = ({votes, article_id}) => {
    const [voteChange, setVoteChange] = useState(0);

const incVote = (votes) => {
    setVoteChange((currChange) => currChange + votes);
    
    changeVote(article_id, votes)
    }


const decVote = (votes) => {
    setVoteChange((currChange) => currChange - votes);
    
    changeVote(article_id, -votes)
    }
return (
    <section>
        <button disabled={voteChange === -1} onClick={() => decVote(1)}>Downvote!</button>
        <span>{votes + voteChange} votes</span>
        <button disabled={voteChange === 1} onClick={() => incVote(1)}>Upvote!</button>
    </section>
)
}
export default Votes