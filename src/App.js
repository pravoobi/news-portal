import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Publisher from './Publisher';
import { HiHome } from  "react-icons/hi";
import './App.css';

function App() {

  const [news, setNews] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json')
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        setNews(json);
        let newsSet = new Set();
        json.forEach(({PUBLISHER}) => {
          newsSet.add(PUBLISHER);
          return;
        })
        setPublishers([...newsSet]);
    });
  }, []);

  function handleClick() {
    window.history.pushState({}, undefined, "/");
  }
  function searchNews(e){
    setSearchTerm(e.target.value);
    const searchNews = news.find(item => item.TITLE === e.target.value);
    setNews(searchNews);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <HiHome onClick={handleClick}/> */}
        <h1>News Portal</h1>
        <div className="search">
          <input type="input" placeholder="Search news" value = {searchTerm} onChange={searchNews}/>
        </div>
        
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home news={news} publishers={publishers} />} />
        <Route path=":publisher" element={<Publisher news={news} publishers={publishers} />} />
      </Routes>
      </main>

    </div>
  );
}

export default App;
