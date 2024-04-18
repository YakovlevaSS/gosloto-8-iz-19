import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';


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
