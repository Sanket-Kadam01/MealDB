import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetail from "./pages/RecipeDetails";
import SearchResults from "./pages/SearchResultPage";
import About from "./pages/About";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/recipes/search" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App
