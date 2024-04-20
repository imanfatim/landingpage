import logo from './logo.svg';
import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import HOMEPAGE1 from './components/HomePage'
import Head from './components/Header'
import About from './components/about'
import ArticlePage from './components/articlepage';
import ArticlesListPage from './components/articlelistpage';

function App() {
  return (
    <div className="">
    <BrowserRouter>
    <Head />
    <Routes>
      <Route path='/'element={<HOMEPAGE1/>}></Route>
      <Route path='/about' element={<About/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />

    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
