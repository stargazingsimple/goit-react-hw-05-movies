import * as API from '../../services/api-movies';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  const [el, setEl] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await API.getMovieCredits(618353);
      setEl(res);
    };
    getData();
  }, []);
  console.log(el);

  return <ToastContainer />;
};
