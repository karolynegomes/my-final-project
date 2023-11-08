import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <head>
        <meta name="description" content="Modern webapp"/>
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:description" content="Fresh and healthy food"/>
        <meta name="og:image" content=""/>
      </head>

      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
