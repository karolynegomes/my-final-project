import './App.css';
import Header from './components/Header';
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
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
