import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { getCurrentProfile } from '../../actions/profileActions';
//import Spinner from '../common/Spinner';
//import ProfileActions from './profileActions';
//import { getGroupPosts, getUserPosts, deletePost } from '../../actions/postActions';
//import MyPosts from './myPosts';
//import GroupPosts from './groupPosts';
import Nutzerliste from "./nutzerListe";
import Auftragliste from "./auftragListe";
//import SelectListGroup from '../common/SelectListGroup';
import { getNutzers } from "../../actions/nutzerActions";
import { getFahrten } from "../../actions/fahrtenActions";

import "./css/Dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getNutzers();
    this.props.getFahrten();
  }

  render() {
    //  const { user } = this.props.auth;
    //   const { profile, loading } = this.props.profile;
    const { nutzers } = this.props.nutzer;
    const { fahrten } = this.props.fahrten;

    let dashboardContent;
    // Ladebildschirm einbinden

    //Check if Logged in user has profile data

    dashboardContent = (
      <div>
        <div className="row">
          <div className="col-md-12 py-2 my-3 fenster">
            <Auftragliste />
          </div>
        </div>

        <div className="row">
          <div className="col py-2 my-3 mr-2 fenster f-halb">
            <Nutzerliste />
          </div>

          <div className="col py-2 my-3 ml-2 fenster f-halb">
            Die Kundenliste ist bald verfügbar.
          </div>
        </div>
      </div>
    );

    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4 mt-3">Dashboard</h1>
            </div>
            <div className="col-md-6">
              <div className="display-4 mt-3 float-right">
                <Link to="/neuer-auftrag" className="btn btn-secondary ml-1">
                  Neuer Auftrag
                </Link>
                <Link to="/manage-group" className="btn btn-secondary ml-1">
                  Neuer Nutzer
                </Link>
                <Link to="/manage-group" className="btn btn-secondary ml-1">
                  Neuer Kunde
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">{dashboardContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getNutzers: PropTypes.func.isRequired,
  getFahrten: PropTypes.func.isRequired,
  nutzer: PropTypes.object.isRequired,
  fahrten: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nutzer: state.nutzer,
  fahrten: state.fahrten
});

export default connect(mapStateToProps, { getNutzers, getFahrten })(Dashboard);
