import './App.css';
import Header from './components/Header.jsx';
import MainPost from './components/MainPost.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="blog-container">
        <div className="content">
          <MainPost />
          <Sidebar />
        </div>
      </div>
      <footer>© 2024 Your Blog</footer>
    </>
  );
}

export default App;
