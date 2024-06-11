import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import BookshelfPage from './Components/BookshelfPage';
import './App.css'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </Router>
  );
};

export default App;
