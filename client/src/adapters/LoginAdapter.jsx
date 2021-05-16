import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginAdapter = async (user) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, user);
    const { message } = resp.data;
    toast.success(message);
    console.log(resp);
    return true;
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.message);
    return false;
  }
};

export default LoginAdapter;
