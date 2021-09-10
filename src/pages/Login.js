import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {SignIn, SignUpProvider} from '../auth/firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    console.log('email', email)
    const [password, setPassword] = useState("");
    console.log('password', password)


    const handleSignIn = () => {
        SignIn(email, password)
        history.push('/');
    }


    return (
        <div className="register">
            <div className="register-form">
                <h1 className="form-title display-3">Login</h1>
                <form id="login">
                    <div className="mb-3">
                        <label for="email" className="form-label display-4">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address..." onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label display-4">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password address..." onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <input type="button" className="btn btn-primary form-control" value="Login" onClick={handleSignIn}/>
                </form>
                <button className="btn btn-primary form-control" onClick={() => SignUpProvider()} >Continue with Google</button>
            </div>
            <div className="form-image">
                <img src={"https://picsum.photos/1200/900"} alt="sample" />
            </div>
        </div>
    )
}

export default Login