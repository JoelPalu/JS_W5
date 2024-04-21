import './App.css';
import Home from "./components/Home.jsx";
import {Profile} from "./components/Profile.jsx";
import Upload from "./components/Upload.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Single from "./components/Single.jsx";
const App = () => {
  return (
    <Router>
      <h1>My App</h1>

      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/Upload'}>Upload</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path="/media/:id" element={<Single />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  );
};
export default App;
