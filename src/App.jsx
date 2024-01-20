import { Route, Routes } from 'react-router';
import HomePost from './components/HomePost';
import Register from './pages/userPages/Register';
import Login from './pages/userPages/Login';
import DetailPage from './pages/DetailPage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';


function App() {
  return (
    <div className='App font-opensans' >
     
      <Routes>
        <Route index   path="/" element={<HomePost />} />
        <Route   path="/posts/post/:id" element={<DetailPage />} />
       <Route   path="/register" element={<Register /> } />
        <Route   path="/login" element={<Login /> } />
        <Route   path="/write" element={<CreatePost /> } /> 
        <Route   path="/edit/:id" element={<EditPost /> } /> 
        <Route   path="/profile/:id" element={<Profile /> } /> 
      </Routes>
     
    </div>
  );
}

export default App;
