import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import {createUser, SignUpProvider} from '../auth/firebase';

const Register = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        const displayName = firstName + " " + lastName;
        createUser(email, password, displayName);
        history.push('/');
    }


    return (
        <div className="register">
            <div className="form-image">
                <img src={"https://picsum.photos/1200/900"} alt="sample" />
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Register</h1>
                <form id="register">
                    <div className="mb-3">
                        <label for="first-name" className="form-label display-4">First Name</label>
                        <input type="first-name" className="form-control" id="first-name" placeholder="Enter your first name..." onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="last-name" className="form-label display-4">Last Name</label>
                        <input type="last-name" className="form-control" id="last-name" placeholder="Enter your last name..." onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label display-4">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address..." onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label display-4">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password address..." onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <input type="button" className="btn btn-primary form-control" value="Register" onClick={handleRegister}/>
                </form>
                <button className="btn btn-primary form-control" onClick={() => SignUpProvider()} >Continue with Google</button>
            </div>
        </div>
    )
}

export default Register