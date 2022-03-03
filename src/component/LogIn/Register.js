import React, { useState } from 'react';
import './logIn.css';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { auth } from './../firebase';
import { Link, useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function Register() {
    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log('auth----->', auth)
                if (auth) {
                    // localStorage.setItem('token','skjfskjajkdfdhduffakjdnf')
                    history.push('/home')
                    alert('Registered Successfully,press okay!')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <React.Fragment>
            <div className="logIn">
                <div className="Logo_container">
                    <Link to="/"><img className="login_logo" src="../chef1.png" /></Link>
                </div>
                <h3>Zaika</h3>

                <form className="login_Container">
                    <h1>Sign-up</h1>
                    <TextField fullWidth margin="dense" name="email" label="Email" variant="outlined" type="text" onChange={e => setEmail(e.target.value)} value={email} />

                    <TextField fullWidth margin="dense" name="password" label="Password" variant="outlined" type="password" onChange={e => setPassword(e.target.value)} value={password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <Typography variant="subtitle1" color="primary">Already have an account? Click login</Typography>
                    <br />
                    <div className="buttons">
                        <Button variant="contained" className="signUp_btn" color="secondary" onClick={register}>Sign up</Button>
                        <Button type="submit" variant="contained" color="primary" onClick={login}>Login</Button>

                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Register
