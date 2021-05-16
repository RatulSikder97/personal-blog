import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginAdapter from '../../adapters/LoginAdapter';
import useDocumentTitle from '../../utils/useDocumentTitle';
import './Login.scss';

const Login = () => {
  useDocumentTitle('Login | Personal Blog');

  const [user, setUser] = useState({
    email: '',
    password: '',
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
    const isLogin = await LoginAdapter(user);
    if (isLogin) {
      history.push('/');
    } else {
      history.push('/login');
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <div className="card shadow border-0 w-25 mx-auto p-4">
        <form onSubmit={handleSubmit} className="form">
          <h5 className="login-title text-capitalize border-bottom pb-3 mb-3 mt-0">User login</h5>
          <div className="form-group">
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
              Not yet registered?{' '}
              <Link to="/register" className="link">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
