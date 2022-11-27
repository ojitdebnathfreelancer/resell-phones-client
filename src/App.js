import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='max-w-7xl mx-auto bg-slate-100'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
