import React from 'react';
//import { Link } from 'react-router-dom';
import './css/Footer.css';

export default () => {


    return (

        <React.Fragment>
            <footer className="text-white bg-dark p-4 text-center" id="footer">
                Copyright &copy; {new Date().getFullYear()} Möhlmann Taxi / Mietwagen<p />
               {/*} <Link to="/impressum">Impressum</Link> | <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link> | <Link to="/faq">FAQ</Link> | <Link to="/version">Version 0.2.0</Link>*/}
            </footer>
        </React.Fragment>

    )
}

