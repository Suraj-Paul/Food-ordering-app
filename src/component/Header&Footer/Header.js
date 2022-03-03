import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/home"><img className="header__logo" src="../chef1.png" alt="Logo" />
                </Link>
                <div class="tagname">
                    <h2>Zaika</h2>
                </div>
            </div>
            {/* <div className="header__right">
                <Button variant="contained" color="default">Login</Button>
                <Button variant="contained" color="default">My orders</Button>

            </div> */}
        </div>
    )
}

export default Header;
