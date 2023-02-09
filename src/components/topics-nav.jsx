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

    
    return <section className="navi">
         <Link key="all-articles" to={`/`}className="navi">ALL ARTICLES</Link>
        <br></br>
        <br></br>
        <nav>
        {topics.map((topic) => {
            return <Link key={topic.slug} to={`/topics/${topic.slug}`} className="navismaller">{topic.slug.toUpperCase()} ARTICLES <br></br></Link>
           
        })}

    </nav>
    </section>
}

export default TopicsNav
