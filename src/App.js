import './App.css';
import Header from './components/header';
import AllArticles from './components/all-articles';
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/single-article';
import Comments from "./components/comments"
import TopicsNav from './components/topics-nav'


function App() {
  return (
    <div >
      <header>
        <Header />
      </header>
      <section>
        <TopicsNav/>
        <Routes>
          <Route path="/" element= {<AllArticles/>}>
          </Route>
          <Route path="/articles/:article_id" element={<SingleArticle/>} ></Route>
          <Route path="/articles/:article_id/comments" element={<Comments/>}></Route>
          <Route path="/topics/:topic" element={<AllArticles/>}></Route>
        </Routes>
    </section>
    </div>
  );
}

export default App;
