import './App.css';
import Header from './components/header'
import AllArticles from './components/all-articles'

function App() {
  return (
    <div >
      <header>
        <Header />
      </header>
      <section>
        <AllArticles />
    </section>
    </div>
  );
}

export default App;
