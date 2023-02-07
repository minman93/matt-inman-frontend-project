import './App.css';
import Header from './components/header';
import AllArticles from './components/all-articles';
import { Routes, Route } from 'react-router-dom';
import SingleArticle from './components/single-article';
import Comments from "./components/comments"


function App() {
  return (
    <div >
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element= {<AllArticles/>}>
          </Route>
          <Route path="/articles/:article_id" element={<SingleArticle/>} ></Route>
          <Route path="/articles/:article_id/comments" element={<Comments/>}></Route>
        </Routes>
    </section>
    </div>
  );
}

export default App;
