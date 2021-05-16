import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterAdapter = async (user) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_API_URL}/auth`, user);
    const { message } = resp.data;
    toast.success(message);
    return true;
  } catch (err) {
    console.error(err);
    const { errors } = err.response.data;
    errors.forEach((error) => {
      toast.error(error.msg);
    });
    return false;
  }
};

export default RegisterAdapter;
