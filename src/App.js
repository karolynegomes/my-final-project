import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect} from 'react';


function App() {

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const apiUrl = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';
  }

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
