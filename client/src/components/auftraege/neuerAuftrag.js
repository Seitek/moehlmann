import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";

//import { getCurrentProfile } from '../../actions/profileActions';
//import Spinner from '../common/Spinner';
//import ProfileActions from './profileActions';
//import { getGroupPosts, getUserPosts, deletePost } from '../../actions/postActions';
//import MyPosts from './myPosts';
//import GroupPosts from './groupPosts';
import Kundenliste from "./auftragKunden";
import Nutzerliste from "./auftragNutzer";


import SelectListGroup from '../common/SelectListGroup';


import "./css/neuerAuftrag.css";
// import Nutzer from "../../../../models/Nutzer";
// import Kunden from "../../../../models/Kunden";

class NeuerAuftrag extends Component {


  componentDidMount() {}

  render() {
    //  const { user } = this.props.auth;
    //   const { profile, loading } = this.props.profile;
    //const { nutzers } = this.props.nutzer;
    //const { fahrten } = this.props.fahrten;

    let dashboardContent;
    // Ladebildschirm einbinden

    //Check if Logged in user has profile data

    dashboardContent = (
      <div>
        <div className="row">
          <div className="col py-2 my-3 mr-2 fenster f-halb">
          <Link to="/" className="btn btn-light">
                <i className="fas fa-angle-left text-info" /> Zurück zum
                Dashboard
              </Link>
              <h1 className="display-4 text-center">Kunden auswählen</h1>
              <p className="lead text-center">Wähle einen Kunden aus der Liste. Der Startpunkt lässt sich danach noch ändern.</p>
              {/* <small className="d-block pb-3">* = Pflichtfelder</small> */}
            <Kundenliste />
          </div>

          <div className="col py-2 my-3 ml-2 fenster f-halb"><p/><br/>
          <h1 className="display-4 text-center">Nutzer auswählen</h1>
              <p className="lead text-center">Wähle einen Nutzer aus der Liste.</p>
              <Nutzerliste />
          </div>
        </div>
        <h1 className="display-4 mt-3">Daten</h1>
        <div className="row">
          <div className="col py-2 my-3 mr-2 fenster f-halb">
              <h1 className="display-4 text-center">VON</h1>
              <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                  placeholder="Vorname"
                  name="vorname"
                  value=""
                  onChange=""
                  error=""
                />

                <TextFieldGroup
                  placeholder="Nachname"
                  name="nachname"
                  value=""
                  onChange=""
                  error=""
                />

                
                <TextFieldGroup
                  placeholder="Straße"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="Hausnummer"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="PLZ"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="Ort"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="Von Zeit"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />
               
               
              </form>
          </div>

          <div className="col py-2 my-3 ml-2 fenster f-halb">
          <h1 className="display-4 text-center">NACH</h1>
          <form onSubmit={this.onSubmit}>
             
   
                <TextFieldGroup
                  placeholder="Straße"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="Hausnummer"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="PLZ"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="Ort"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />

                <TextFieldGroup
                  placeholder="Bis Zeit"
                  name="code"
                  value=""
                  onChange=""
                  error=""
                  info=""
                />
               
               <input
                  type="submit"
                  value="Auftrag erstellen"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              
          </div>
        </div>
      </div>
    );

    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4 mt-3">Neuer Auftrag</h1>
            </div>
            <div className="col-md-6">
              <div className="display-4 mt-3 float-right">
                {/* <Link to="/neuer-auftrag" className="btn btn-secondary ml-1">
                  Neuer Auftrag
                </Link> */}
                <Link to="/neu-nutzer" className="btn btn-secondary ml-1">
                  Neuer Nutzer
                </Link>
                <Link to="/neu-kunde" className="btn btn-secondary ml-1">
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

NeuerAuftrag.propTypes = {
  nutzer: PropTypes.object.isRequired,
  fahrten: PropTypes.object.isRequired,
  kunden: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nutzer: state.nutzer,
  fahrten: state.fahrten,
  kunden: state.kunden
});

export default connect(mapStateToProps)(NeuerAuftrag);
