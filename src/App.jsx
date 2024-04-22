import './App.css';
import Home from "./views/Home.jsx";
import {Profile} from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Single from "./views/Single.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout.jsx";
const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <h1>My App</h1>

      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/Upload'}>Upload</Link>
        <Link to={"/login"}>Login</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path="/media/:id" element={<Single />} />
        <Route path="/single" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};
export default App;
