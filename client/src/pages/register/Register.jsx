import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RegisterAdapter from '../../adapters/RegisterAdapter';
import useDocumentTitle from '../../utils/useDocumentTitle';
import './Register.scss';

const Login = () => {
  useDocumentTitle('Register | Personal Blog');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isRegister = await RegisterAdapter(user);
    if (isRegister) {
      history.push('/login');
    } else {
      history.push('/register');
    }
    setLoading(false);
  };

  return (
    <div className="register">
      <div className="card shadow border-0 mx-auto p-4">
        <form onSubmit={handleSubmit} className="form">
          <h5 className="register-title text-capitalize border-bottom pb-3 mb-3 mt-0">
            User Register
          </h5>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" onChange={handleInputs} className="form-control" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" name="email" onChange={handleInputs} className="form-control" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInputs}
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleInputs}
              className="form-control"
            />
          </div>
          <div className="form-group text-center mt-4">
            <button
              type="submit"
              className="btn btn-submit text-uppercase w-100"
              disabled={!!loading}
            >
              Submit{' '}
              {loading ? <span className="spinner-border spinner-border-sm" role="status" /> : ''}
            </button>
          </div>
          <div className="form-group text-center mt-3">
            <p className="form-link text-capitalize mb-0">
              Already registered?{' '}
              <Link to="/login" className="link">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
