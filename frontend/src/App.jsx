import { useEffect } from 'react';
import { Link, Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import logo from './assets/logo.svg';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/' || location.pathname === '/create-post'){
      return;
    }
    navigate('/');
  }, [navigate])

  return (
    <>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} alt="logo" className='h-6 object-contain' />
        </Link>
        <Link to='/create-post' className='font-inter font-medium bg-[#EB5E28] text-white px-4 py-2 rounded-md'>
          Create          
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </>
  )
}

export default App