import './App.css';
import Header from './components/header';
import AllArticles from './components/all-articles';
import { Routes, Route } from 'react-router-dom';



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
        </Routes>
    </section>
    </div>
  );
}

export default App;
