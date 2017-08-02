import * as React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <div className="navbar-brand">React Grades</div>
            </div>
        </div>
    </nav>
}

export default Header;