import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

/*import Slider from './Slider';
import News from './News';
import Tiles from './Tiles';
import TilesNav from './TilesNav.js';*/

class Landing extends Component {
    componentDidMount() {
       /* if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }*/
    }


    render() {

        return (

            <div className="landing">

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

                <div className="dark-overlay landing-inner text-dark">
                    <div className="container-fluid mt-4">

                    <div className="container-fluid test">
                        <div className="row mt-5 py-3">
                            Test
                        </div>
                    </div>

                  
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps)(Landing);