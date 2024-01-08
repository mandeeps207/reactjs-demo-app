import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NoPage404 from './pages/NoPage404';
import About from './pages/About';
import Layout from './pages/Layout';

const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />   
                </Route>
                <Route path="*" element={<NoPage404 />} />  
            </Routes>
    </BrowserRouter>
  )
}

export default App;
