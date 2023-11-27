import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect} from 'react';


function App() {

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  function fetchData() {
    const apiUrl = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';
  }

  return (
    <>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
