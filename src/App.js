import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Movie from './Components/Movie/Movie.jsx';
import TvShow from './Components/TvShow/TvShow.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import SignUp from './Components/Form/SignUp/SignUp.jsx';
import Login from './Components/Form/Login/Login.jsx';
import ProtectRoute from './Components/ProtectRoute/ProtectRoute.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <ProtectRoute element={<Home />} />,
    },
    {
      path: "/Movie",
      element: <ProtectRoute element={<Movie />} />,
    },
    {
      path: "/TvShow",
      element: <ProtectRoute element={<TvShow />} />,
    },
    {
      path: "/Pricing",
      element: <ProtectRoute element={<Pricing />} />,
    },
    {
      path: "/Blog",
      element: <ProtectRoute element={<Blog />} />,
    },
    {
      path: "/Contacts",
      element: <ProtectRoute element={<Contacts />} />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
