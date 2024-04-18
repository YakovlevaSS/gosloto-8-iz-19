/* eslint-disable import/no-extraneous-dependencies */
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <AppRoutes />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      limit={1}
    />
  </>
);

export default App;
