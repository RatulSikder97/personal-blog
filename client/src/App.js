import './App.css';
import { useState, useEffect } from 'react'
import Category from './components/Category';

function App() {

  const url = 'http://localhost:4000/categories';

  const [lists, setLists] = useState([]);

  async function fetchMyAPI() {
    try {
      let data = await fetch(url);
      data = await data.json();
      setLists(data);
    } catch (error) {
      console.log('catch error: ' + error);
    }
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <Category lists={lists} />
    </div>
  );

}

export default App;
