import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Nav';
import Home from './screens/Home';

function App() {
  return (
    <>
      <Router>
        <Main />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
     

    </>
  );
}

export default App;
