import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { logoutUser } from '../../actions/authActions';
//import { clearCurrentProfile } from '../../actions/profileActions';

//CSS
import './css/Navbar.css';


class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    render() {
     //   const { isAuthenticated } = this.props.auth;


        const guestLinks = (
            <React.Fragment>
                {/*<ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">START</Link>
                    </li>              

        </ul>*/}

               
            </React.Fragment>

        );


        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={require('../../img/logo_moehl.png')} alt="Logo" id="brand" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">

                        {guestLinks}

                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps)(Navbar);