import React, { useState, useContext } from 'react';
import './SignUp.css';
import { Link,useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Contex';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);
    const { firebase } = useContext(FirebaseContext);

    const navigate = useNavigate(); // Using useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user.updateProfile({ displayName: username });
                return firebase.firestore().collection('users').add({
                    id: result.user.uid,
                    username: username,
                });
            })
            .then(() => {
                setSignedUp(true);
                navigate('/'); // Redirect after successful sign-up
            })
            .catch((error) => {
                console.error('Error signing up:', error);
            });
    };

    if (signedUp) {
        return null; // Or you can show a message indicating successful sign-up
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h2>Create your account</h2>
                <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                </form>
                <p className="terms-text">
                    By clicking "Sign Up," you agree to our <Link to="/">Terms of Use</Link> and <Link to="/">Privacy Policy</Link>.
                </p>
                <p className="login-link">
                    Already have an account? <Link to={'/'}>Log In</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;


