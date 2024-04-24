import './App.css';
import Home from "./views/Home.jsx";
import {Profile} from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Single from "./views/Single.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout.jsx";
import Layout from "./views/Layout.jsx";
import {UserProvider} from "./contexts/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const App = () => {

  return (
    <>
        <Router basename={import.meta.env.BASE_URL}>
          <UserProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } />
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/media/:id" element={<Single />} />
                  <Route path="/single" element={<Single />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                </Route>
            </Routes>
          </UserProvider>
        </Router>
    </>
  );
};
export default App;
