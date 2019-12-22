import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
//import SelectListGroup from "../common/SelectListGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createKunden } from "../../actions/kundenActions";

let test;
class addKunde extends Component {
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
    //this.handleEditorChange = this.handleEditorChange.bind(this);
    // this.onEditorStateChange = this.onEditorStateChange.bind(this);
    // this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
  
    const kundenData = {
      vorname: this.state.vorname,
      nachname: this.state.nachname,
      strasse: this.state.strasse,
      hausnummer: this.state.hausnummer,
      plz: this.state.plz,
      ort: this.state.ort,
    };

    this.props.createKunden(kundenData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //const { errors } = this.state;

  
    
  }

  render() {
    const { errors } = this.state;

    //select options for categorys

    return (
      <div className="add-post">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col my-5 fenster">
              <Link to="/" className="btn btn-light">
                <i className="fas fa-angle-left text-info" /> Zurück zum
                Dashboard
              </Link>
              <h1 className="display-4 text-center">Kunde erstellen</h1>
              <p className="lead text-center">Erstelle einen neuen Kunden.</p>
              <small className="d-block pb-3">* = Pflichtfelder</small>
              <form onSubmit={this.onSubmit}>
                  <div className="row">
                  <div className="col-6">
              <TextFieldGroup
                  placeholder="* Vorname"
                  name="vorname"
                  value={this.state.vorname}
                  onChange={this.onChange}
                  error={errors.vorname}
                />
                </div>
                <div className="col-6">
                <TextFieldGroup
                  placeholder="Nachname"
                  name="nachname"
                  value={this.state.nachname}
                  onChange={this.onChange}
                  error={errors.nachanme}
                />
                </div>
                </div>

                
                {test}
                <div className="row">
                <div className="col-8">
                <TextFieldGroup
                  placeholder="Strasse"
                  name="strasse"
                  value={this.state.strasse}
                  onChange={this.onChange}
                  error={errors.strasse}
                />
                </div>

                <div className="col-4">
                <TextFieldGroup
                  placeholder="Hausnummer"
                  name="hausnummer"
                  value={this.state.hausnummer}
                  onChange={this.onChange}
                  error={errors.hausnummer}
                  />
                </div>

                </div>
                

               <div className="row">
                <div className="col-4">
                <TextFieldGroup
                  placeholder="PLZ"
                  name="plz"
                  value={this.state.plz}
                  onChange={this.onChange}
                  error={errors.plz}
                  />
                </div>

                <div className="col-8">
                <TextFieldGroup
                  placeholder="Ort"
                  name="ort"
                  value={this.state.ort}
                  onChange={this.onChange}
                  error={errors.ort}
                  />
                </div>

               </div>

                
                
                

                {/*<TextAreaFieldGroup
                  placeholder="* Hier kannst Du deinen Beitrag erstellen."
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
                <Editor
                  editorState={editorState}
                  placeholder="Hier kannst Du deinen Beitrag erstellen."
                  localization={{
                    locale: 'de',
                  }}
                  toolbar={{
                    image: { alignmentEnable: true }
                  }}
                  onEditorStateChange={this.onEditorStateChange}

                /> */}

                <input
                  type="submit"
                  value="Kunden erstellen"
                  className="btn btn-info btn-block mt-4"
                />
                {/* <input type="copy" value="Als Entwurf speichern" className="btn btn-secondary btn-block mt-4" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

addKunde.propTypes = {
  kunden: PropTypes.object.isRequired,
  createKunden: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  kunden: state.kunden,
  errors: state.errors
});

export default connect(mapStateToProps, { createKunden })(withRouter(addKunde));
