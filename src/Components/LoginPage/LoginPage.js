import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { FirebaseContext } from '../../Store/Contex';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      alert('Logged In');
      navigate(`/home/${userId}`); // Redirect to unique home page path
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="netflix-logo">Netflix</div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Signing In...' : <span>Sign In</span>}
          </button>
        </form>
        <div className="additional-info">
          New to Netflix? <Link to="/signup">Sign Up</Link>
        </div>
        <div className="additional-info">
          Need help? <Link to="/help">Visit the Help Center</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

