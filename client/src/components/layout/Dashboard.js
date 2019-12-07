import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { getCurrentProfile } from '../../actions/profileActions';
//import Spinner from '../common/Spinner';
//import ProfileActions from './profileActions';
//import { getGroupPosts, getUserPosts, deletePost } from '../../actions/postActions';
//import MyPosts from './myPosts';
//import GroupPosts from './groupPosts';
//import OnlinePosts from './onlinePosts';
//import SelectListGroup from '../common/SelectListGroup';

import './css/Dashboard.css';

class Dashboard extends Component {
    componentDidMount() {
      
    }

    render() {
      //  const { user } = this.props.auth;
     //   const { profile, loading } = this.props.profile;
  

        let dashboardContent;
        // Ladebildschirm einbinden
       

            //Check if Logged in user has profile data
           
                dashboardContent = (
                    <div>
                        

                        <div className="row">
                            <div className="col-md-12 py-2 my-3 fenster">
                                Post 1
                            </div>
                        </div>

                        <div className="row">
                            <div className="col py-2 my-3 mr-2 fenster f-halb">
                                Post 2
                            </div>

                            <div className="col py-2 my-3 ml-2 fenster f-halb">
                                Post 3
                            </div>
                        </div>

                

            </div >
                )
        

        return (
            <div className="dashboard">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-4 mt-3">Dashboard</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="display-4 mt-3 float-right">
                                
                                <Link to="/manage-group" className="btn btn-secondary ml-1" >Nutzer bearbeiten</Link>
                                <Link to="/manage-group" className="btn btn-secondary ml-1" >Kunde bearbeiten</Link>
                                <Link to="/settings" className="btn btn-secondary ml-1">Einstellungen</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {dashboardContent}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getGroupPosts: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    getUserPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    post: state.post,
    auth: state.auth
});


export default connect(mapStateToProps)(Dashboard);