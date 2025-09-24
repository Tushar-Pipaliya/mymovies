
import './App.css';
// import Header from "./Components/Home/Header/Header.jsx";
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Movie from './Components/Movie/Movie.jsx';
import TvShow from './Components/TvShow/TvShow.jsx';
import Pricing from './Components/Pricing/Pricing.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Movie",
      element: <Movie />
    },
    {
      path: "/TvShow",
      element: <TvShow />
    },
    {
      path: "/Pricing",
      element: <Pricing />
    },
    {
      path: "/Blog",
      element: <Blog />
    },
        {
      path: "/Contacts",
      element: <Contacts />
    },
  ])
  return (
    <div>

      {/* <Header/> */}
      <RouterProvider router={router} />

    </div>
  );
}


export default App;
