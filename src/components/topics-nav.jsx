import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const TopicsNav = () => {
    const[topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((data) => {
            setTopics(data.topics)

    })
 }, [])
    console.log(topics)

    
    return <nav>
        {topics.map((topic) => {
            return <Link key={topic.slug} to={`/topic/${topic.slug}`}>{topic.slug.toUpperCase()}</Link>
        })}
    </nav>
}

export default TopicsNav
