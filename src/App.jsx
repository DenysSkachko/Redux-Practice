import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import Bookmarks from './pages/Bookmarks';
import Search from './pages/Search';
import Layout from './components/Layout';
import RecipeSingle from './pages/RecipeSingle';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:id" element={<RecipeSingle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
