import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateKunde, getKunde } from "../../actions/kundenActions";
import Spinner from '../common/Spinner';
import isEmpty from '../../validation/is-empty';


class bearbeitenKunde extends Component {
    constructor(props) {
      super(props);
    
       this.state = {
          vorname: '',
          nachname: '',
          strasse: '',
          hausnummer: '',
          plz: '',
          ort: '',
          errors: {}
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    
  
    componentDidMount() {
      this.props.getKunde(this.props.match.params.id);
  
  }
  
    componentWillReceiveProps(nextProps) {
  
      if (nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }

      if (nextProps.kunden.kunde){
        const kunde = nextProps.kunden.kunde

        kunde.vorname = !isEmpty(kunde.vorname) ? kunde.vorname : '';
        kunde.nachname = !isEmpty(kunde.nachname) ? kunde.nachname : '';
        kunde.strasse = !isEmpty(kunde.strasse) ? kunde.strasse : '';
        kunde.hausnummer = !isEmpty(kunde.hausnummer) ? kunde.hausnummer : '';
        kunde.plz = !isEmpty(kunde.plz) ? kunde.plz : '';
        kunde.ort = !isEmpty(kunde.ort) ? kunde.ort : '';

        this.setState({
            vorname: kunde.vorname,
            nachname: kunde.nachname,
            strasse: kunde.strasse,
            hausnummer: kunde.hausnummer,
            plz: kunde.plz,
            ort: kunde.ort,
        });
      }
  
      }
  
      
  
    onSubmit(e) {
      e.preventDefault();
    
      const kundeData = {
        vorname: this.state.vorname,
        nachname: this.state.nachname,
        strasse: this.state.strasse,
        hausnummer: this.state.hausnummer,
        plz: this.state.plz,
        ort: this.state.ort
      };
  
      this.props.updateKunde(this.props.match.params.id, kundeData, this.props.history);
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    render() {
      const { errors } = this.state;
      const {loading} = this.props.kunden;
      let postContent;

      
      //
      if (loading) {
        postContent = <Spinner />;
      } else {
        postContent = (
          
                <form onSubmit={this.onSubmit}>

  <div className="form-row">

                <div className="form-group col-md-6">
                      Vorname:
                  <TextFieldGroup
                    placeholder="* Vorname"
                    name="vorname"
                    value={this.state.vorname}
                    onChange={this.onChange}
                    error={errors.vorname}
                  />
                  </div>

                <div className="form-group col-md-6">
                    Nachname:
                  <TextFieldGroup
                    placeholder="Nachname"
                    name="nachname"
                    value={this.state.nachname}
                    onChange={this.onChange}
                    error={errors.nachname}
                  />
                </div>
  </div>

  <div className="form-row">

                <div className="form-group col-md-8">
                  Strasse:
                  <TextFieldGroup
                    placeholder="Strasse"
                    name="strasse"
                    value={this.state.strasse}
                    onChange={this.onChange}
                    error={errors.code}
                    
                  />
                  </div>

                <div className="form-group col-md-4">
                  Hausnummer:
                  <TextFieldGroup
                    placeholder="Hausnummer"
                    name="hausnummer"
                    value={this.state.hausnummer}
                    onChange={this.onChange}
                    error={errors.code}
                    
                  />
                  </div>


  </div>

  <div className="form-row">

<div className="form-group col-md-4">
  PLZ:
  <TextFieldGroup
    placeholder="PLZ"
    name="plz"
    value={this.state.plz}
    onChange={this.onChange}
    error={errors.code}
    
  />
  </div>

<div className="form-group col-md-8">
  Ort:
  <TextFieldGroup
    placeholder="Ort"
    name="ort"
    value={this.state.ort}
    onChange={this.onChange}
    error={errors.code}
    
  />
  </div>


</div>
                  
                  
  
                  <input
                    type="submit"
                    value="Kunden bearbeiten"
                    className="btn btn-info btn-block mt-4"
                  />
                 
                </form>
             
        );
      }
    
      //select options for categorys
      
        return (
        <div>
          <div className="add-post">
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-md-8 my-5 fenster">
                <Link to="/" className="btn btn-light">
                  <i className="fas fa-angle-left text-info" /> Zurück zum
                  Dashboard
                </Link>
                <h1 className="display-4 text-center">Kunden bearbeiten</h1>
                <p className="lead text-center">Bearbeite einen Kunden.</p>
                <small className="d-block pb-3">* = Pflichtfelder</small>
          
          
          {postContent}
        
        
        
        </div>
            </div>
          </div>
        </div>
        </div>
         
        );
      
      

  
    }
  }
  
  bearbeitenKunde.propTypes = {
    kunden: PropTypes.object.isRequired,
    updateKunde: PropTypes.func.isRequired,
    getKunde: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    kunden: state.kunden,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { updateKunde, getKunde })(withRouter(bearbeitenKunde));
  