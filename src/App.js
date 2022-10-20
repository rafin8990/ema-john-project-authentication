import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop'
import Order from './components/order/Order';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Main from './layouts/Main/Main';
import { productAndCartLoader } from './Loaders/Products&cartLoader';
import Login from './components/Login/Login';
import SignUp from '../src/components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader:productAndCartLoader,
          element:<Shop></Shop>
        },
        {
          path:'/shop',
          loader:productAndCartLoader,
          element:<Shop></Shop>
        },
        {
          path:'/order',
          loader:productAndCartLoader,
          element:<Order></Order>
        },
        {
          path:'/inventory',
          element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: '/shipping',
          element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
