/* eslint-disable import/no-extraneous-dependencies */
import AppRoutes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <>
    <AppRoutes />
    <ToastContainer
      hideProgressBar
      autoClose={ 5000 }
      limit={ 1 }
      position="top-center"
    />
  </>
);

export default App;
